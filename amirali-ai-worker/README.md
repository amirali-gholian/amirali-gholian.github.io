# Amirali AI — Cloudflare Workers AI Backend

This backend is designed for the Amirali Gholian portfolio on GitHub Pages.

## Architecture

GitHub Pages
→ frontend chat widget
→ Cloudflare Worker
→ Cloudflare Workers AI
→ `@cf/zai-org/glm-4.7-flash`

No OpenAI API key is required.

## 1. Create / use a Cloudflare account

Create a Cloudflare account and open the Workers & Pages dashboard.

Workers AI is available on the Free plan with a daily free allocation. The current
Cloudflare documentation lists 10,000 Neurons/day on Free.

## 2. Install Wrangler

Install Node.js first, then:

    npm install -g wrangler

Login:

    npx wrangler login

## 3. Deploy

Open this folder in a terminal:

    cd amirali-ai-worker
    npx wrangler deploy

Wrangler will print the Worker URL, similar to:

    https://amirali-ai.<your-subdomain>.workers.dev

## 4. Connect the frontend

Open `main.js` and replace:

    endpoint: "https://YOUR-AMIRALI-AI-WORKER.workers.dev"

with your real Worker URL.

Then upload the updated `index.html`, `main.js` and `style.css` to GitHub.

## 5. Important security settings

The Worker intentionally uses an AI binding:

    [ai]
    binding = "AI"

There is no provider API key in the website JavaScript.

Keep the Worker CORS allow-list limited to:

- https://amiraligholian.ir
- https://www.amiraligholian.ir

If your final domain is only one of these, remove the other one.

## 6. Recommended next hardening

For a public production chatbot, add Cloudflare Turnstile and/or a stronger per-IP
rate limit before exposing it widely. The AI free quota is shared by your account,
so an abusive visitor can consume the daily allocation.

## 7. Model

The initial model is:

    @cf/zai-org/glm-4.7-flash

It is selected because Cloudflare describes it as a fast multilingual model optimized
for dialogue and instruction-following across 100+ languages.

If Cloudflare changes the Free-plan model catalog later, update the MODEL constant in
`worker.js`.
