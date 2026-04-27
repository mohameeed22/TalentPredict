
import requests
import json

def test_ai_evaluate():
    url = "http://localhost:8000/api/test/interview/evaluate-turn"
    payload = {
        "role": "Full Stack Developer",
        "level": "mid",
        "question": "Parlez-moi de votre parcours en tant que Full Stack Developer.",
        "answer": "J'ai travaillé sur plusieurs projets React et Spring Boot pendant 3 ans.",
        "turn_number": 1,
        "max_turns": 5,
        "language": "fr"
    }
    print(f"Testing AI Evaluate endpoint: {url}")
    try:
        response = requests.post(url, json=payload, timeout=10)
        print(f"Response status: {response.status_code}")
        print(f"Response body: {response.text}")
    except Exception as e:
        print(f"AI Evaluate test failed: {e}")

if __name__ == "__main__":
    test_ai_evaluate()
