import os
import re
import urllib.request
import urllib.error
import json
import time

SPRING_URL = "http://localhost:8081"
PYTHON_URL = "http://localhost:8000"

print("Starting QA Tests...")

# 1. Gather all Spring endpoints
spring_endpoints = []
for root, _, files in os.walk('BackEnd/src/main/java'):
    for file in files:
        if file.endswith('.java'):
            with open(os.path.join(root, file), 'r', encoding='utf-8') as f:
                content = f.read()
                class_mapping = re.search(r'@RequestMapping\s*\(\s*\"([^\"]*)\"\s*\)', content)
                base_path = class_mapping.group(1) if class_mapping else ""
                matches = re.findall(r'@(GetMapping|PostMapping|PutMapping|DeleteMapping|RequestMapping)\s*(?:\(\s*\"([^\"]*)\"\s*\))?', content)
                for match in matches:
                    if match[0] == 'RequestMapping' and match[1] == base_path:
                        continue
                    full_path = base_path + match[1]
                    spring_endpoints.append({"method": match[0].replace('Mapping', '').upper(), "path": full_path, "file": file})

# 2. Gather Python endpoints
python_endpoints = []
for root, _, files in os.walk('talentpredict-ai'):
    if "venv" in root or "__pycache__" in root: continue
    for file in files:
        if file.endswith('.py'):
            with open(os.path.join(root, file), 'r', encoding='utf-8') as f:
                content = f.read()
                matches = re.findall(r'@(app|router)\.(get|post|put|delete)\(\s*\"([^\"]*)\"', content)
                for match in matches:
                    python_endpoints.append({"method": match[1].upper(), "path": match[2], "file": file})

# 3. Static Analysis
frontend_strings = set()
for root, _, files in os.walk('FrontEnd/src'):
    for file in files:
        if file.endswith('.ts') or file.endswith('.html'):
            with open(os.path.join(root, file), 'r', encoding='utf-8') as f:
                content = f.read()
                strings = re.findall(r'[\'\"\`]?/?([a-zA-Z0-9_\-]+/[a-zA-Z0-9_\-]+)[\'\"\`]?', content)
                for s in strings:
                    frontend_strings.add(s.strip("'\"`/"))

orphaned_spring = []
for ep in spring_endpoints:
    # Check if a significant part of the path is used
    parts = [p for p in ep['path'].split('/') if p and '{' not in p and p != 'api']
    if not parts: continue
    search_str = "/".join(parts[-2:]) if len(parts) >= 2 else parts[0]
    
    is_called = False
    for s in frontend_strings:
        if search_str in s:
            is_called = True
            break
    if not is_called and "health" not in ep['path']:
        orphaned_spring.append(ep)

# 4. Dynamic Analysis
results = {
    "passed": [],
    "broken": [],
    "unresponsive": [],
    "orphaned_spring": orphaned_spring
}

def test_endpoint(base_url, ep, is_python=False):
    path = ep['path']
    # Replace path variables with dummy data
    path = re.sub(r'\{[^}]+\}', '1', path)
    url = base_url + path
    if url.endswith("/"): url = url[:-1]
    
    start = time.time()
    try:
        req = urllib.request.Request(url, method=ep['method'])
        if ep['method'] in ['POST', 'PUT']:
            req.add_header('Content-Type', 'application/json')
            req.data = b'{}'
            
        resp = urllib.request.urlopen(req, timeout=3)
        duration = time.time() - start
        status = resp.getcode()
        
        if duration > 2.0:
            results["unresponsive"].append({"location": f"{ep['method']} {ep['path']}", "type": "Python" if is_python else "Spring", "timeout_after": f"{duration:.1f}s"})
        else:
            results["passed"].append(f"{ep['method']} {ep['path']} (Status {status})")
            
    except urllib.error.HTTPError as e:
        duration = time.time() - start
        if e.code in [400, 401, 403, 404, 405, 415, 422]:
            results["passed"].append(f"{ep['method']} {ep['path']} (Status {e.code} properly handled)")
        elif e.code >= 500:
            error_body = ""
            try: error_body = e.read().decode('utf-8')[:50]
            except: pass
            results["broken"].append({
                "location": f"{ep['method']} {ep['path']}", 
                "type": "Python" if is_python else "Spring", 
                "what": f"Returns {e.code}", 
                "error": error_body or "Internal Server Error"
            })
    except urllib.error.URLError as e:
        if isinstance(e.reason, TimeoutError) or "timed out" in str(e.reason).lower():
            results["unresponsive"].append({"location": f"{ep['method']} {ep['path']}", "type": "Python" if is_python else "Spring", "timeout_after": "3.0s, no response"})
        else:
            results["broken"].append({
                "location": f"{ep['method']} {ep['path']}", 
                "type": "Python" if is_python else "Spring", 
                "what": "Connection Failed", 
                "error": str(e.reason)
            })
    except Exception as e:
        results["broken"].append({
            "location": f"{ep['method']} {ep['path']}", 
            "type": "Python" if is_python else "Spring", 
            "what": "Unexpected Error", 
            "error": str(e)
        })

print(f"Testing {len(spring_endpoints)} Spring endpoints...")
for ep in spring_endpoints:
    test_endpoint(SPRING_URL, ep)

print(f"Testing {len(python_endpoints)} Python endpoints...")
for ep in python_endpoints:
    test_endpoint(PYTHON_URL, ep, is_python=True)

with open('scratch/qa_results.json', 'w') as f:
    json.dump(results, f, indent=2)

print("Tests completed successfully.")
