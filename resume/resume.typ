// Will Wu — CV. Source of truth mirrors ~/second-brain/wiki/work/resume.md
// Build:  pnpm resume:pdf   (-> ../public/resume.pdf)
// ATS notes: single column, selectable text, standard section headings.

#set document(title: "Will Wu — Senior Backend Engineer", author: "Will Wu")
#set page(
  paper: "a4",
  margin: (x: 1.4cm, top: 1.0cm, bottom: 0.85cm),
  footer: align(center, text(size: 7.5pt, fill: rgb("#9a9a9a"))[
    Will Wu · Senior Backend Engineer · Updated June 2026
  ]),
)
#set text(font: ("Helvetica Neue", "Arial"), size: 9.2pt, fill: rgb("#262626"))
#set par(leading: 0.44em, justify: false)
#show link: it => text(fill: rgb("#0e7490"), it)

#let accent = rgb("#0e7490")
#set list(marker: text(fill: accent)[•], body-indent: 0.4em, spacing: 0.3em, indent: 0.2em)

#let sectiontitle(t) = {
  v(0.34em)
  text(size: 10.3pt, weight: "bold", fill: accent, tracking: 0.6pt)[#upper(t)]
  v(0.1em)
  line(length: 100%, stroke: 0.6pt + rgb("#cbd5d8"))
  v(0.16em)
}

#let job(company, role, dates, meta, bullets, summary: none) = {
  block(above: 0.42em, below: 0.1em, breakable: true)[
    #block(breakable: false)[
      #grid(
        columns: (1fr, auto),
        text(size: 10.2pt)[*#company*#h(0.32em)#text(fill: rgb("#525252"), size: 9.5pt)[— #role]],
        text(size: 8.8pt, fill: rgb("#525252"))[#dates],
      )
      #v(0.1em)
      #text(size: 8.4pt, fill: rgb("#737373"))[#emph(meta)]
      #if summary != none {
        v(0.18em)
        text(size: 9pt, fill: rgb("#404040"))[#summary]
      }
    ]
    #v(0.12em)
    #list(..bullets)
  ]
}

#let proj(title, meta, bullets) = {
  block(above: 0.55em, below: 0.1em, breakable: true)[
    #text(size: 10pt)[*#title*]#h(0.5em)#text(size: 8.4pt, fill: rgb("#737373"))[#emph(meta)]
    #v(0.1em)
    #list(..bullets)
  ]
}

#let skillrow(cat, items) = grid(
  columns: (8.6em, 1fr),
  gutter: 0.5em,
  text(size: 9pt, weight: "bold")[#cat],
  text(size: 9pt)[#items],
)

// ============================ HEADER ============================
#align(center)[
  #text(size: 23pt, weight: "bold")[Will Wu]
  #v(0.05em)
  #text(size: 12pt, fill: accent, weight: "medium")[Senior Backend Engineer]
  #v(0.35em)
  #text(size: 8.8pt, fill: rgb("#525252"))[
    #link("mailto:will413028@gmail.com")[will413028\@gmail.com]
    #h(0.5em)·#h(0.5em) +886 911-279-755
    #h(0.5em)·#h(0.5em) Taipei, Taiwan
    #h(0.5em)·#h(0.5em) #link("https://www.linkedin.com/in/will4130/")[LinkedIn]
    #h(0.5em)·#h(0.5em) #link("https://github.com/Will413028")[GitHub]
  ]
]
#v(0.45em)

// ========================= EXPERIENCE ==========================
#sectiontitle("Work Experience")

#job(
  "APMIC", "Sr. Backend Engineer", "Nov 2025 – Present",
  "Taipei, Taiwan · Python (FastAPI), React, Next.js, PostgreSQL, Hasura, RabbitMQ, Google ADK",
  summary: [Enterprise AI platform for on-premises LLM deployment and model fine-tuning; deliver end-to-end LLM / agent integrations and the full-stack enterprise systems around them for clients.],
  (
    [*Delivered SAML 2.0 SSO and a privilege-isolating RBAC redesign* for an enterprise customer-service platform (iframe-embedded for a global insurance client) — root-caused a multi-layer SSO failure down to a vendor `xsi:type` XSD-validation conflict and shipped a production hot-patch; introduced a `type` discriminator to cleanly separate JIT-provisioned end-customers from operators, closing a privilege-escalation gap.],
    [*Built a real-time webchat agent-state system* — a 5-state machine (ready / not-ready / serving / busy / offline) enforced by PostgreSQL triggers, supervisor 1-to-many assignment, and cross-system mutual exclusion against the client's Cisco Finesse telephony platform (fail-open REST gate), covered by unit + Playwright e2e suites.],
    [*Self-built 3-layer distributed tracing* — contextvar `trace_id` propagated across FastAPI middleware and RabbitMQ message headers, with dual-sink structured logging and PII-safe business-event instrumentation across 6 modules (chosen over OpenTelemetry where no downstream collector existed).],
    [*Built automated web-scraping pipelines and a RAG knowledge-base integrity toolchain* — manifest-diff verification with exponential-backoff retry that surfaced 64 missing upstream documents and cut actionable gaps from 64 to 1, keeping the LLM retrieval corpus fresh and complete.],
  ),
)

#job(
  "dailyfresh", "Sr. Backend Engineer", "Jan 2025 – Present",
  "Part-time · Taipei, Taiwan · Go (Gin), Java (Spring Boot), PostgreSQL, Redis, RabbitMQ, k3s, Next.js, Flutter",
  summary: [Multi-vendor fresh-grocery marketplace (Go / Java microservices + Next.js web + Flutter buyer/seller apps); senior engineer owning backend platform and cross-stack delivery.],
  (
    [*Re-architected web authentication to a gateway-owned session model* — replaced a BFF / Better-Auth setup with opaque httpOnly cookies + CSRF protection and a role-as-claim design (per-request active-role hint validated against the account's role set), unifying buyer/seller dual-role identity; shipped with Playwright e2e regression guards and a single-use Redis-ticket scheme for cookie-authenticated WebSockets.],
    [*Led a zero-downtime OAuth account-model refactor* from 1:1 columns to a 1:N `auth_providers` table across Google / Apple providers — dual-write → read-cutover → drop-legacy migration with a conflict-resolution flow (tempBindToken + link-confirm + last-provider guard) and an in-process Apple-revoke worker (33 commits, no downtime).],
    [*Owned a production database migration of a 20-microservice platform to Alibaba Cloud RDS* (11 Go + 9 Java services, 100 migrations, 19 pods) within an \~11-minute maintenance window — resolved migration-history, TLS, and Cloudflare-525 edge issues during cutover.],
    [*Delivered a merchant-governance / food-safety-reporting epic end-to-end in a day* (\~16,000 lines across Go / proto / SQL / Next.js) and drove the buyer/seller iOS apps through their first App Store submission (full G0-G7 launch pipeline + root-caused an App Store Connect IRIS bundle-id substring-match bug).],
  ),
)

#job(
  "Vocus", "Sr. Backend Engineer", "Mar 2025 – Oct 2025",
  "Taipei, Taiwan · Go (Gin), MongoDB, Redis, Qdrant, Cloudflare, AWS, GCP",
  (
    [*Contributed to DDD refactoring of Taiwan's top-tier content-creator platform* (CDN-fronted, 94%+ Cloudflare cache-hit; backend handled \~3M weekly API calls for memberships, subscriptions, comments, recommendations, payments) — migrated legacy handlers into a 4-layer architecture across 73+ API modules; designed composition patterns (single-responsibility services + functional decorator chains with concurrent fan-out) to cut god-function complexity.],
    [*Owned end-to-end migration of the NewebPay payment integration* from server-side to iframe-redirect mode across all 4 payment types (subscription / one-time / recurring / donation) — moved card-data collection to the gateway's iframe to reduce PCI-DSS scope; redesigned token lifecycle across legacy + new paths.],
    [*Reduced MongoDB p95 latency on hotspot endpoints by 80%* (platform-wide API p95 80 ms, p50 4 ms) — restructured queries from `$lookup` cross-collection joins to single-collection reads + application-layer joins (goroutine fan-out), leveraging the document model instead of mimicking SQL.],
    [*Implemented batched async pipelines* — AWS SQS delayed-notification queue (batch 100–500, group-by aggregation, retry with backoff), hourly stats aggregation via worker pool (`InsertMany` replacing per-event writes), and periodic Qdrant-driven recommendation computation for article internal linking (SEO).],
    [*Migrated the recommendation system from BigQuery to self-hosted Qdrant vector DB, lowering infra cost by 20%* — eliminated per-query usage-based pricing for the highest-traffic query path.],
  ),
)

#job(
  "ChengChi Tech", "Sr. Backend Engineer", "Apr 2024 – Mar 2025",
  "New Taipei, Taiwan · Python (FastAPI), Next.js, Tauri, PostgreSQL, Redis, GCP, Azure",
  (
    [Joined as the company's first and only Sr. backend engineer in an early-stage startup; architected and built 9 backend microservices from scratch (unified Python 3.12 / FastAPI / SQLAlchemy 2) covering cloud POS, short-term EV rental, AI meeting summarization, and multiple vertical ERPs.],
    [Owned all backend architectural decisions, technical selection, and code review; mentored junior engineers as the team grew from 4 to 7–8 people.],
    [Built development infrastructure from zero — self-hosted GitLab, CI/CD (GitLab CI + Ansible) reducing deployment time by 50%, IaC (Terraform) reducing infrastructure overhead by 30%, SonarQube quality gates.],
    [Shipped a commercial AI meeting-summarization product solo in 3 months — Whisperx (ASR with speaker diarization) + Ollama (local LLM) + a Tauri desktop app (Next.js 16 / React 19); currently serving paying customers.],
    [Shipped a cloud POS (F&B + retail) and a short-term EV-rental system (IoT + payment + SMS) — each \~2 months greenfield solo development.],
  ),
)

#job(
  "AI-Rider", "Backend Engineer", "Mar 2022 – Nov 2023",
  "New Taipei, Taiwan · Node.js (Koa), Python (Flask), MariaDB, Redis, RabbitMQ, Modbus TCP",
  (
    [*Primary backend engineer on a POS system powering \~1,000 on-premise parking sites* (DuDuParking as flagship client, 50%+ of company revenue) — handled multi-tenant billing (time-tiered, monthly pass, EV-charging pre-auth, municipal contract rates).],
    [*Architected a hardware abstraction layer (ioserver) supporting 10+ device types* via Modbus TCP — ANPR cameras, gate arms, ETag, LED boards — with OOP design and a unified REST API hiding protocol complexity from upstream services.],
    [*Rebuilt the LED broadcasting system controlling thousands of LED panels across \~1,000 sites* — consolidated a 2-service legacy architecture (Go datasync + Python device backend) into a unified Turbo monorepo (Next.js + Electron + Python Flask), retiring the legacy Go service entirely.],
    [Optimized SQL queries reducing execution time by 50% for a customer with \~4–5M parking records (EXPLAIN analysis + compound indexes).],
    [Built a YouTube-based Asian facial dataset pipeline processing 1,000+ videos (multi-stream threading pool, incremental validation) to address facial-recognition model bias.],
  ),
)

// ========================= SIDE PROJECTS =======================
#sectiontitle("Side Projects")

#proj(
  "bfx-funding-bot — Algorithmic Crypto Funding Bot (Solo)",
  "2026 · Python (asyncio), PostgreSQL, Koyeb",
  (
    [*Built and run a live, real-money Bitfinex margin-funding bot* end-to-end — event-sourced ledger with a periodic-reconcile correctness backbone (REST snapshot as source of truth, WebSocket as best-effort latency optimization, à la FIX drop-copy), single-writer exposure reconciliation, and balance-aware deployment gating; diagnosed and fixed 6+ production incidents on live capital, each shipped with a canary verification step.],
    [*Designed a quantitative strategy-validation framework* — walk-forward optimization, out-of-sample profitability with bootstrap confidence intervals and deflated Sharpe, and a bot-vs-idle attribution model.],
  ),
)

#proj(
  "divego — Full-Stack Migration (Solo)",
  "2026 · TypeScript (Next.js, Hono, Drizzle)",
  (
    [*Migrated a FastAPI backend to a unified Next.js full-stack app* (Hono + Drizzle on Next.js 16) using the strangler-fig pattern — domain-by-domain vertical slices with a cross-stack unified error protocol, retiring the Python backend entirely (\~567 tests).],
  ),
)

// ============================= SKILLS ==========================
#sectiontitle("Skills & Technical Competencies")
#block(spacing: 0.4em)[
  #skillrow("Languages", "Python, Go, TypeScript, Dart, Java")
  #skillrow("Backend", "FastAPI, Gin, Koa, Flask, Spring Boot, Hono")
  #skillrow("Frontend / Desktop", "Next.js, React, Tauri, Flutter")
  #skillrow("Databases", "PostgreSQL, MariaDB, MongoDB, Redis, Qdrant (vector DB)")
  #skillrow("Data / Migration", "SQLAlchemy, Drizzle, Atlas, Alembic, Flyway")
  #skillrow("Messaging", "RabbitMQ, MQTT")
  #skillrow("AI / ML", "Whisperx (ASR), Ollama (local LLM), Google ADK, PyTorch / CUDA")
  #skillrow("Cloud", "GCP, AWS, Azure, Cloudflare, Alibaba Cloud")
  #skillrow("DevOps / Infra", "Docker, k3s, GitLab CI, Terraform, Ansible, Self-hosted GitLab")
  #skillrow("Protocols", "REST, gRPC, GraphQL (Hasura), SAML / OAuth, Modbus TCP, JSON-RPC, Webhooks")
]

// =========================== EDUCATION =========================
#sectiontitle("Education")
#grid(
  columns: (1fr, auto),
  row-gutter: 0.35em,
  [*MS, Data Analytics Engineering* — George Mason University], text(fill: rgb("#525252"), size: 9pt)[2019 – 2021],
  [*BS, Chemical Engineering* — Tatung University], text(fill: rgb("#525252"), size: 9pt)[2013 – 2016],
)
