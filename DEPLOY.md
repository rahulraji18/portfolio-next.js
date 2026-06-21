Deployment & Environment Variables

1) Keep secrets out of the repo
- Do NOT commit a real `.env` file. This repo now ignores `.env`.
- Commit `.env.example` with dummy values so other developers know what keys are required.

2) Local setup
- Copy `.env.example` to `.env` and fill values locally:

  cp .env.example .env
  # then edit .env with your secrets

3) Deploy to Vercel (recommended, free tier)
- Connect your GitHub repo to Vercel (https://vercel.com/new) and import the project.
- In the project dashboard, go to Settings → Environment Variables and add the variables from `.env`.
  - For client-side values that must be exposed, prefix with `NEXT_PUBLIC_`.
  - Set values separately for `Preview` and `Production` as needed.
- After settings are saved, trigger a deployment (push to main or click "Deploy").

Optional: use Vercel CLI
- Install: `npm i -g vercel`
- Login and deploy:

  vercel login
  vercel --prod

- Add env vars via CLI:

  vercel env add NEXT_PUBLIC_API_URL production

4) Other free hosting options
- Netlify: connect Git repo, set environment variables in Site settings → Build & deploy → Environment.
- Render: offers free web services (check their current free tier).

5) Tips & security
- Rotate keys if they were ever committed accidentally (use `git log` / `git filter-repo` to remove, or rotate with provider).
- Prefer provider-side secret storage (Vercel/Netlify/Render dashboard) rather than embedding secrets in code.
- Keep sensitive server endpoints and secrets on server-side only (do not expose SECRET keys to client).

If you want, I can:
- Add a simple serverless API route to accept phone requests and store them securely (requires setting DATABASE_URL or a free DB provider), or
- Help connect and configure Vercel for this repo (I can add a `vercel.json` with build settings if you plan to use Vercel CLI).
