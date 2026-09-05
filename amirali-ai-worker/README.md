# Amirali AI v3

Features:
- Gemini API via Cloudflare Worker
- Cloudflare Cache API for successful single-turn answers
- Fixed portfolio FAQ answers without Gemini
- 10 requests/minute per IP burst protection
- Global daily Gemini budget counter with Pacific-time reset
- Current bootstrap day (2026-09-05) reserves the 6 requests that remained from the dashboard screenshot (14/20)
- Full 20-request budget from the next Pacific calendar day
- API key remains in the Cloudflare Secret `GEMINI_API_KEY`

Deploy:
npx wrangler deploy

The existing GEMINI_API_KEY secret does not need to be recreated.
