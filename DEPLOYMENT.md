# Home server deployment

This Next.js app is deployed with the sibling `commercial-review-be` repository.
The production image uses `NEXT_PUBLIC_API_URL=/api` and proxies requests through
the unique Docker alias `commercial-review-api`. Uploaded images use `/uploads`.
No Azure storage settings are needed.

Push changes, then run `~/bin/start-commercial-review` on the Ubuntu server.
It pulls and builds both repositories and prints the temporary public URL.
See the [backend deployment guide](https://github.com/saneag/commercial-review-be/blob/main/DEPLOYMENT.md)
for database settings, persistent uploads, logs, and backup guidance.
