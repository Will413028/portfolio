// Will Wu — CV. Source of truth mirrors ~/second-brain/wiki/work/resume.md
// Writing rules: ~/second-brain/wiki/work/english-resume-guide.md
//   (one page, 3–4 bullets per role, each bullet leads with the result, company and title on separate lines)
// Build:  pnpm resume:pdf   (-> ../public/resume.pdf)
// ATS notes: single column, selectable text, standard section headings.

#set document(title: "Will Wu — Senior Backend Engineer", author: "Will Wu")
#set page(
  paper: "a4",
  margin: (x: 1.4cm, top: 1.0cm, bottom: 0.85cm),
  footer: align(center, text(size: 7.5pt, fill: rgb("#9a9a9a"))[
    Will Wu · Senior Backend Engineer · Updated November 2026
  ]),
)
#set text(font: ("Helvetica Neue", "Arial"), size: 9.2pt, fill: rgb("#262626"))
#set par(leading: 0.44em, justify: false)
#show link: it => text(fill: rgb("#0e7490"), it)

#let accent = rgb("#0e7490")
#set list(marker: text(fill: accent)[•], body-indent: 0.4em, spacing: 0.3em, indent: 0.2em)

#let sectiontitle(t) = block(above: 1.0em, below: 0.5em, breakable: false, sticky: true)[
  #text(size: 10.3pt, weight: "bold", fill: accent, tracking: 0.6pt)[#upper(t)]
  #v(-0.5em)
  #line(length: 100%, stroke: 0.6pt + rgb("#cbd5d8"))
]

// Line 1: company + one-line introduction for readers who do not know it, dates on the right.
// Line 2: job title on its own, tech stack, location on the right.
#let job(company, intro, role, dates, place, stack, bullets) = {
  block(above: 0.75em, below: 0.1em, breakable: true)[
    #block(breakable: false, below: 0.3em)[
      #grid(
        columns: (1fr, auto),
        row-gutter: 0.32em,
        text(size: 10.2pt)[*#company*#h(0.4em)#text(size: 8.6pt, fill: rgb("#525252"))[#intro]],
        text(size: 8.8pt, fill: rgb("#525252"))[#dates],
        text(size: 9.4pt)[*#role*#h(0.5em)#text(size: 8.4pt, fill: rgb("#737373"))[#emph(stack)]],
        text(size: 8.4pt, fill: rgb("#737373"))[#place],
      )
    ]
    #v(0.18em)
    #list(..bullets)
  ]
}

#let proj(title, meta, bullets) = {
  block(above: 0.75em, below: 0.1em, breakable: true)[
    #block(breakable: false, below: 0.3em)[
      #text(size: 10pt)[*#title*]#h(0.5em)#text(size: 8.4pt, fill: rgb("#737373"))[#emph(meta)]
    ]
    #v(0.18em)
    #list(..bullets)
  ]
}

#let skillrow(cat, items) = (
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
    #h(0.5em)·#h(0.5em) #link("https://portfolio-kohl-three-81.vercel.app/en")[Portfolio]
    #h(0.5em)·#h(0.5em) #link("https://www.linkedin.com/in/will4130/")[LinkedIn]
    #h(0.5em)·#h(0.5em) #link("https://github.com/Will413028")[GitHub]
  ]
]
#v(0.45em)

// =========================== SUMMARY ===========================
// 三個定位版本。換版本只改下面 `active-summary` 那一行，不要改別處。
// 每版一到兩行、只放具體事實（不放 communication / problem solving 這類形容詞）。
// 事實來源全部出自 ~/second-brain/wiki/work/resume.md（SSOT）——
// 這裡不得出現 SSOT 沒有的宣稱；要新增請先寫回 SSOT 再引用。

#let summary-backend = [
  Senior backend engineer, 4+ years in Go, Python, and TypeScript. Cut MongoDB p95 latency on hotspot endpoints by 80%
  on a platform serving \~3M weekly API calls, shipped SAML SSO for a global insurance client, and built
  3-layer distributed tracing across FastAPI and RabbitMQ.
]

#let summary-ai = [
  Backend engineer building enterprise LLM and agent platforms. Consolidated a Google ADK agent platform
  into one FastAPI service (agent state machine 721 → 144 lines, held by 50 characterization tests) and
  cut actionable gaps in a RAG retrieval corpus from 64 to 1.
]

#let summary-product = [
  Backend-first engineer who ships whole products: built a commercial AI meeting-summarization app solo
  in 3 months that now serves paying customers, plus a cloud POS and an EV-rental system in \~2 months each.
]

#let active-summary = summary-product  // ← 換定位改這行：summary-backend / summary-ai / summary-product

#sectiontitle("Summary")
#block(above: 0.2em, below: 0.35em)[
  #text(size: 9pt, fill: rgb("#404040"))[#active-summary]
]

// ========================= EXPERIENCE ==========================
#sectiontitle("Work Experience")

#job(
  "APMIC", "(enterprise AI platform for on-premises LLM deployment and model fine-tuning)",
  "Sr. Backend Engineer", "Nov 2025 – Present", "Taipei, Taiwan",
  "Python (FastAPI), React, Next.js, PostgreSQL, Hasura, RabbitMQ, Google ADK",
  (
    [*Shipped SAML 2.0 SSO and an RBAC redesign for a global insurance client*, closing a privilege-escalation gap; traced an SSO failure to a vendor XSD-validation conflict and hot-patched production.],
    [*Cleared the client's pre-audit security scan for an on-premises delivery* (static findings 5 → 0, dependency vulnerabilities 16 → 2, `npm audit` 20 → 0) by triaging 1,699 raw findings down to 6 production-code sites.],
    [*Cut AI report generation from 7m37s to 1m57s* with asyncio parallelization, and *quarterly-report Q&A from \~80s to \~7s* by timing download and parse separately and swapping the spreadsheet reader.],
    [*Shrank the agent state machine from 721 to 144 lines* with declarative flow control (behavior locked by 50 characterization tests), while consolidating a Google ADK agent platform into one FastAPI service with HMAC-SHA256 request signing.],
  ),
)

#job(
  "Vocus", "(Taiwan's top-tier content-creator platform; ~3M weekly API calls)",
  "Sr. Backend Engineer", "Mar 2025 – Oct 2025", "Taipei, Taiwan",
  "Go (Gin), MongoDB, Redis, Qdrant, Cloudflare, AWS, GCP",
  (
    [*Reduced MongoDB p95 latency on hotspot endpoints by 80%* by replacing `$lookup` cross-collection joins with single-collection reads and application-layer joins (goroutine fan-out).],
    [*Lowered recommendation infrastructure cost by 20%* by migrating from BigQuery to a self-hosted Qdrant vector DB, removing per-query pricing on the highest-traffic path.],
    [*Owned the NewebPay payment migration to iframe-redirect mode* across all 4 payment types (subscription, one-time, recurring, donation), reducing PCI-DSS scope by moving card-data collection to the gateway.],
  ),
)

#job(
  "ChengChi Tech", "(early-stage startup building POS, EV-rental, AI and ERP products)",
  "Sr. Backend Engineer", "Apr 2024 – Mar 2025", "New Taipei, Taiwan",
  "Python (FastAPI), Next.js, Tauri, PostgreSQL, Redis, GCP, Azure",
  (
    [*First and only senior backend engineer*: architected 9 microservices from scratch (Python 3.12 / FastAPI), owned all backend architecture and code review, and mentored juniors as the team grew from 4 to 7–8.],
    [*Shipped three products solo*: an AI meeting-summarization app in 3 months (WhisperX + Ollama + Tauri), now serving paying customers, plus a cloud POS and an EV-rental system in \~2 months each.],
    [*Cut deployment time by 50% and infrastructure overhead by 30%* by building CI/CD (self-hosted GitLab CI + Ansible), Terraform IaC, and SonarQube quality gates from zero.],
  ),
)

#job(
  "AI-Rider", "(parking-technology company; POS and devices across ~1,000 parking sites)",
  "Backend Engineer", "Mar 2022 – Nov 2023", "New Taipei, Taiwan",
  "Node.js (Koa), Python (Flask), MariaDB, Redis, RabbitMQ, Modbus TCP",
  (
    [*Primary backend engineer on the POS system for \~1,000 parking sites*, whose flagship client brought in 50%+ of company revenue; handled multi-tenant billing (time tiers, monthly passes, EV-charging pre-auth).],
    [*Architected a hardware abstraction layer for 10+ device types* over Modbus TCP (ANPR cameras, gate arms, ETag readers, LED boards) behind one REST API.],
    [*Halved SQL execution time* for a customer with \~4–5M parking records using EXPLAIN analysis and compound indexes.],
  ),
)

// ========================= SIDE PROJECTS =======================
#sectiontitle("Side Projects")

#proj(
  "bfx-funding-bot — Algorithmic Crypto Funding Bot (Solo)",
  [2026 · Python (asyncio), PostgreSQL, Docker · #link("https://portfolio-kohl-three-81.vercel.app/en/work/bfx-funding-bot")[case study]],
  (
    [*Built and run a live, real-money Bitfinex margin-funding bot* on an event-sourced ledger reconciled against exchange snapshots; fixed 6+ production incidents on live capital, each shipped with a canary check.],
    [*Raised order-book data availability from 3.9% to 99.6%* and cut cold-start quoting from 60 min to 14–27 s; realized net APR of 3.75–5.14% in lending weeks, reconciled to the exchange's own ledger within 0.1–2.9%.],
  ),
)

#proj(
  "divego — Full-Stack Migration (Solo)",
  [2026 · TypeScript (Next.js, Hono, Drizzle) · #link("https://portfolio-kohl-three-81.vercel.app/en/work/divego")[case study]],
  (
    [*Retired a Python backend (\~567 tests)* via a strangler-fig migration to a unified Next.js full-stack app (Hono + Drizzle).],
  ),
)

// ============================= SKILLS ==========================
#sectiontitle("Skills")
#grid(
  columns: (8.6em, 1fr),
  column-gutter: 0.5em,
  row-gutter: 0.42em,
  ..skillrow("Languages", "Python, Go, TypeScript, Java, Dart"),
  ..skillrow("Backend & Data", "FastAPI, Gin, Spring Boot, Hono · PostgreSQL, MongoDB, Redis, Qdrant · RabbitMQ · gRPC, GraphQL"),
  ..skillrow("Cloud & DevOps", "GCP, AWS, Azure, Cloudflare, Alibaba Cloud · Docker, k3s, Terraform, Ansible, GitLab CI"),
  ..skillrow("AI & Frontend", "Google ADK, Ollama, WhisperX, PyTorch · Next.js, React, Tauri, Flutter"),
)
#v(0.2em)

// =========================== EDUCATION =========================
#sectiontitle("Education")
#grid(
  columns: (1fr, auto),
  row-gutter: 0.35em,
  [*George Mason University* — MS, Data Analytics Engineering], text(fill: rgb("#525252"), size: 9pt)[2019 – 2021],
  [*Tatung University* — BS, Chemical Engineering], text(fill: rgb("#525252"), size: 9pt)[2013 – 2016],
)
