import os
import re

for root, dirs, files in os.walk('BackEnd/src/main/java'):
    for file in files:
        if file.endswith('.java'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
                
                # Check for class level RequestMapping
                class_mapping = re.search(r'@RequestMapping\s*\(\s*\"([^\"]*)\"\s*\)', content)
                base_path = class_mapping.group(1) if class_mapping else ""
                
                matches = re.findall(r'@(GetMapping|PostMapping|PutMapping|DeleteMapping|RequestMapping)\s*(?:\(\s*\"([^\"]*)\"\s*\))?', content)
                
                if matches:
                    print(f'\\n{file}:')
                    for match in matches:
                        method = match[0]
                        sub_path = match[1] if match[1] else ""
                        full_path = base_path + sub_path
                        # If the match was actually the class level mapping, skip printing it as an endpoint unless it's a method
                        # To be simple, let's just print everything
                        if method == 'RequestMapping' and sub_path == base_path:
                            print(f'  Class base path: {base_path}')
                        else:
                            print(f'  {method} {full_path}')
