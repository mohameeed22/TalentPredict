
import requests
import json

def check_port(url, name):
    try:
        response = requests.get(url, timeout=2)
        print(f"{name} ({url}) is UP. Status: {response.status_code}")
        return True
    except Exception as e:
        print(f"{name} ({url}) is DOWN. Error: {e}")
        return False

def test_ai_interview():
    url = "http://localhost:8000/api/test/interview/question"
    payload = {
        "role": "Full Stack Developer",
        "level": "mid",
        "focus_area": "general",
        "history": [],
        "language": "fr"
    }
    print(f"Testing AI Interview endpoint: {url}")
    try:
        response = requests.post(url, json=payload, timeout=10)
        print(f"Response status: {response.status_code}")
        print(f"Response body: {response.text}")
    except Exception as e:
        print(f"AI Interview test failed: {e}")

if __name__ == "__main__":
    check_port("http://localhost:8081/actuator/health", "Backend")
    check_port("http://localhost:8000/", "AI Service Root")
    check_port("http://localhost:11434/", "Ollama")
    test_ai_interview()
