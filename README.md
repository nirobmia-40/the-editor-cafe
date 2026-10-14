# The Editor Cafe

A responsive portfolio site for an independent creative studio, built with Next.js. The contact form stores messages in MongoDB.

## Run locally

1. Install Node.js 18.17 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and set `MONGODB_URI` and `MONGODB_DB`.
4. Run `npm run dev` and open [http://localhost:3000](http://localhost:3000).

The MongoDB database must be reachable by the app. For MongoDB Atlas, add the Vercel deployment's outbound access as permitted by your cluster's network access configuration.

## Deploy to Vercel

Import the GitHub repository in Vercel, set the `MONGODB_URI` and `MONGODB_DB` environment variables for the deployment environments, then deploy. Never commit database credentials; `.env*` files are ignored by Git.

The contact form writes to the `contact_messages` collection. Stored fields are `name`, `email`, `message` and `createdAt`.
