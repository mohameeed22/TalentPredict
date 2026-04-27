
import requests
import json

def test_n8n_webhook():
    url = "http://localhost:5678/webhook/master-agent"
    payload = {
        "full_name": "Test User",
        "email": "test@example.com",
        "github_username": "testuser",
        "cv_text": "Experienced developer with Java and React.",
        "q1": 5, "q2": 5, "q3": 5,
        "q4": 5, "q5": 5, "q6": 5,
        "q7": 5, "q8": 5, "q9": 5,
        "q10": 5, "q11": 5, "q12": 5,
        "q13": 5, "q14": 5, "q15": 5,
        "q16": 5, "q17": 5, "q18": 5
    }
    print(f"Testing n8n webhook: {url}")
    try:
        response = requests.post(url, json=payload, timeout=15)
        print(f"Response status: {response.status_code}")
        print(f"Response body: {response.text}")
    except Exception as e:
        print(f"n8n test failed: {e}")

if __name__ == "__main__":
    test_n8n_webhook()
