# Security policy

## Reporting a vulnerability

Email **info@makemytechnology.com** with the subject "Security: website".
Include what you found and how to reproduce it. Please don't open a public
issue for security problems. We aim to reply within 3 working days.

## How this repository is protected

- Dependencies are installed with `npm ci` from `package-lock.json`, and CI
  fails on any high or critical advisory in production dependencies.
- GitHub Actions are pinned by commit SHA; Dependabot proposes updates to
  them and to npm packages weekly.
- Security headers, including a report-only Content-Security-Policy, are set
  in `next.config.mjs`.
