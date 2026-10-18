# The Editor Cafe

A responsive portfolio for an independent creative studio, built with Next.js. The contact form stores messages in MongoDB and offers a Gmail fallback if database delivery is unavailable.

## Run locally

1. Install Node.js 18.17 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and configure `MONGODB_URI` and `MONGODB_DB`.
4. Run `npm run dev` and open http://localhost:3000.

The contact form stores submissions in the `contact_messages` collection with `name`, `email`, `message` and `createdAt` fields. Configure a MongoDB Atlas connection string and allow Vercel network access. Without valid database settings, the form will provide a prefilled Gmail compose link to nirobmia2026@gmail.com so visitors can still send their note.

## Deploy to Vercel

Import this GitHub repository in Vercel and set `MONGODB_URI` and `MONGODB_DB` under Project Settings → Environment Variables for the deployment environments. Never commit database credentials; `.env*` files are ignored by Git.
