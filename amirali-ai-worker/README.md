# Amirali AI — Gemini + Cache

This Worker uses Gemini through a Cloudflare backend.

Secret required:
- GEMINI_API_KEY

Deploy:
npx wrangler deploy

The Worker includes a portfolio knowledge base and Cloudflare Cache API.
Fixed portfolio FAQ answers do not call Gemini. Single-turn Gemini answers are cached
for 6 hours. Multi-turn conversations are not globally cached.
