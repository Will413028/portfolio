# Operations

The site is a static-first Next.js app on Vercel with no database, no accounts and no
payments. Production is `main`; every merge to `main` deploys.

## Service level objective

| Indicator | Objective | Measured by |
|---|---|---|
| Availability: `GET /en` returns 200 | 99.5% per rolling 30 days (about 3.6 hours of downtime) | Blackbox probe every 60 seconds |
| Latency: `GET /en` | 95% of probes under 1.5 s (provisional: revisit after 30 days of probe data) | Same probe |
| Page quality | Lighthouse desktop performance ≥ 0.9, accessibility ≥ 0.95, SEO ≥ 0.95 | `lighthouse` CI job, every change |

There is no error budget policy yet: the site has a single maintainer and no paying users.

## Launch checklist

Re-check this list when the hosting, domain or build setup changes.

- [x] Monitoring: a Prometheus blackbox probe on `/en` every 60 seconds from the homelab VM; Grafana alerts through Telegram after 5 minutes of failures. Test alert sent and received 2026-11-17.
- [x] Rollback: Vercel instant rollback, rehearsed 2026-11-17 (see below).
- [x] Backups: not applicable; all content lives in git.
- [x] Capacity: served by Vercel's CDN; no server-side state.
- [x] External dependencies: Google Analytics (optional; the page works without it) and Vercel.
- [x] Security: CSP and security headers (`docs/security-headers.md`), dependency and secret scans in CI, ZAP baseline scan (see below).
- [x] Domain: the production build fails without a stable site URL (`src/lib/site-url.ts`).

## Runbook: site down

Alert: the uptime probe sees a non-200 response or a timeout on `/en` twice in a row.

1. Open the production URL in a browser. If it loads, check the probe itself before anything else.
2. Check [Vercel status](https://www.vercel-status.com/). A platform incident means waiting; note the start time for the incident record.
3. Check the latest production deployment in the Vercel dashboard. If the outage started with it, roll back (next section) first and investigate after.
4. If the build or runtime logs show an error, fix it on `dev` and ship through the usual `dev`→`main` PR.

## Rollback

1. Find the last good production deployment: `vercel ls portfolio --prod`.
2. Roll back: `vercel rollback <deployment-url> --yes`. It takes a few seconds.
3. Confirm: `vercel inspect <production-domain>` shows the deployment you chose.
4. After a rollback, Vercel may stop assigning the production domain to new deployments. Once the fix is merged, check that the new deployment took over the domain; if not, run `vercel promote <new-deployment-url> --yes`.

Rehearsal 2026-11-17: rolled back from `dpl_FdMq31Dwss7U56S8RnBXXLq8fxqA` to the previous deployment and promoted it back; both steps took about 3 seconds, 16 seconds in total, and `/en` returned 200 throughout.

## ZAP baseline scan

Run the `ZAP baseline scan` workflow by hand after changes to headers, CSP or routes.

First run 2026-11-17 (run 44126074882): 0 FAIL, 13 WARN, 58 PASS. Fixed X-Powered-By and the missing form-action and base-uri directives; the rest are ignored in `.zap/rules.tsv` with a reason each. Rerun on main after the fix (run 44131649141): 0 FAIL, 1 WARN (script-src 'unsafe-inline', accepted and now ignored), 59 PASS. Run with the final rules file (run 44131941693): 0 FAIL, 0 WARN, 12 IGNORE, 59 PASS. Rule 10055 is ignored as a whole, which mutes every CSP alert; the e2e smoke test matches the full CSP exactly instead.

## Incidents

Record every user-visible outage or bug that reached production in `docs/incidents/YYYY-MM-DD-<slug>.md`:

```markdown
# <title>

- Start / detected / resolved: <times, with time zone>
- Impact: <what visitors saw, for how long>
- Cause: <root cause>
- Fix: <commit or PR>
- Regression test: <test name that fails without the fix>
- Follow-up: <checks or rules added so it cannot recur>
```

Every incident adds a regression test that fails before the fix.
