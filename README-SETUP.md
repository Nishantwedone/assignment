## Setup notes

1. Copy `.env.example` to `.env` and replace placeholders.
2. To use a local Postgres, ensure DATABASE_URL is correct.
3. Run `npm install` then `npm run dev` to start dev server.
4. The API routes under `/api/*` are mock handlers returning generated data.
5. To seed sample JSON data run `node prisma/seed.js`.
