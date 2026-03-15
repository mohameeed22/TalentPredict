import anthropic, os, traceback
from dotenv import load_dotenv
load_dotenv()

k = os.getenv("ANTHROPIC_API_KEY", "")
b = "https://openrouter.ai/api/v1" if k.startswith("sk-or-") else ""
print("base_url:", b)
print("key prefix:", k[:15])

try:
    kw = {"api_key": k}
    if b:
        kw["base_url"] = b
    c = anthropic.Anthropic(**kw)
    print("client created OK")
    r = c.messages.create(
        model=os.getenv("ANTHROPIC_MODEL", "anthropic/claude-sonnet-4"),
        max_tokens=50,
        messages=[{"role": "user", "content": "Say hello"}],
    )
    print("Response:", r.content[0].text)
except Exception:
    traceback.print_exc()
