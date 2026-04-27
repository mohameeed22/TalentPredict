import os
import re
import json

# 1. Gather all Python endpoints
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

# 2. Gather Spring endpoints
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

# 3. Static Analysis for frontend usages
frontend_strings = set()
for root, _, files in os.walk('FrontEnd/src'):
    for file in files:
        if file.endswith('.ts') or file.endswith('.html'):
            with open(os.path.join(root, file), 'r', encoding='utf-8') as f:
                content = f.read()
                strings = re.findall(r'[\'\"\`]?/?([a-zA-Z0-9_\-]+/[a-zA-Z0-9_\-]+)[\'\"\`]?', content)
                for s in strings:
                    frontend_strings.add(s.strip("'\"`/"))

# 4. Find orphaned python endpoints
orphaned_python = []
for ep in python_endpoints:
    parts = [p for p in ep['path'].split('/') if p and '{' not in p and p != 'api']
    if not parts: continue
    search_str = "/".join(parts[-2:]) if len(parts) >= 2 else parts[0]
    
    is_called = False
    for s in frontend_strings:
        if search_str in s:
            is_called = True
            break
    if not is_called and "health" not in ep['path'] and "extract" not in ep['path']:
        orphaned_python.append(ep)

# 5. Output
results = {
    "orphaned_python": orphaned_python
}
with open('scratch/orphaned_results.json', 'w') as f:
    json.dump(results, f, indent=2)

print("Found {} orphaned python endpoints".format(len(orphaned_python)))
for ep in orphaned_python:
    print(ep)
