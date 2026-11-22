#set document(title: "Will Wu — Resume", author: "Will Wu")
#set page(paper: "us-letter", margin: (x: 0.6in, top: 0.45in, bottom: 0.4in))
#set text(font: ("Helvetica Neue", "Arial"), size: 9.3pt)
#set par(leading: 0.42em)
#set list(marker: [•], indent: 0pt, body-indent: 0.35em, spacing: 0.32em)

// A hyphenated word broken at its hyphen loses the hyphen in text extraction
// ("on-" + "prem" reads as "onprem"), so keep each one on a single line.
#show regex("[\\p{L}\\d]+(-[\\p{L}\\d]+)+"): box

#let blue = rgb("#1a5fd0")
#let ul(url, body) = link(url, text(fill: blue, underline(body)))

#let section(t) = block(above: 0.85em, below: 0.4em)[
  #line(length: 100%, stroke: 0.9pt)
  #v(-0.62em)
  #text(weight: "bold", size: 11pt)[#upper(t)]
  #v(-0.7em)
  #line(length: 100%, stroke: 0.5pt)
]

#let job(company, url, intro, dates, role, place, stack, bullets) = block(above: 0.75em, below: 0pt)[
  #grid(columns: (1fr, auto), row-gutter: 0.42em, align: (left, right),
    [#text(weight: "bold", size: 11pt)[#ul(url, company)]#h(0.4em)#text(size: 8.6pt, fill: rgb("#555"))[#intro]], emph(dates),
    text(weight: "bold")[#role], emph(place))
  #v(-0.3em)
  #emph[Tech Stack: #stack]
  #v(-0.25em)
  #list(..bullets)
]
// ---------------- header ----------------
#grid(columns: (1fr, auto), column-gutter: 1em,
  [
    #text(size: 26pt, weight: "bold")[Will Wu]
    #v(-0.6em)
    #text(size: 11.5pt, weight: "bold")[Senior Full-Stack Software Engineer]
  ],
  align(left)[
    #set text(size: 8.6pt)
    #v(0.4em)
    #ul("https://www.linkedin.com/in/will4130/")[linkedin.com/in/will4130] \
    #ul("https://github.com/Will413028")[github.com/Will413028] \
    #text(fill: blue)[will413028\@gmail.com] \
    #text(fill: blue)[+886 911-279-755] \
    Taipei, Taiwan (UTC+8) · Remote
  ],
)

#v(0.2em)
#text(size: 10pt)[Full-stack engineer with 4+ years shipping production systems: Next.js/React and Flutter clients, Python/Go/Java APIs, PostgreSQL, Kubernetes. Now building on-prem LLM agents (47% → 89% accuracy on a financial golden set).]

#section("Work Experience")

#job("APMIC", "https://www.apmic.ai/", "(enterprise AI platform for on-premises LLM deployment)", "Nov 2025 – Present", "Sr. Backend Engineer", "Taipei, Taiwan",
  "Python (FastAPI), Next.js, React, PostgreSQL, LiteLLM, MCP, RAG, Gemma 4 (on-prem)", (
  [Raised an investment-analysis agent's accuracy from 47% to 89% (wrong answers 11 → 1 of 30) on a financial golden set with an on-prem Gemma 4 26B by benchmarking 7 data-feeding strategies and exposing retrieval as a tool],
  [Cut the schema context an on-prem LLM needs for text-to-SQL by 91% (44K → 3.8K characters) by exposing only 13 tables through a PostgreSQL query layer and iterating an eval-driven schema guide; also built an MCP search server],
  [Delivered a financial-ratio engine (14 ratios, API, UI, e2e tests) using AI coding agents, with a full-diff review that caught 2 security defects and mutation testing that caught a test asserting nothing before release],
  [Migrated an undocumented Next.js API layer to FastAPI route by route (strangler fig) with 0 behavior diffs in side-by-side staging runs before each cutover, across \~40 PRs in 2 days],
  [Traced intermittent production timeouts to 2 HTTP calls missing a timeout that exhausted a worker's thread pool, after measurements ruled out 3 other hypotheses; added an AST lint rule to prevent recurrence],
))

#job("dailyfresh", "https://dailyfresh.food", "(grocery marketplace: 20+ microservices, web and two mobile apps)", "Jan 2026 – Sep 2026", "Sr. Full-Stack Engineer (Part-time)", "Taipei, Taiwan",
  "Next.js, React, TypeScript, Flutter, Go (gRPC), Java (Spring Boot), PostgreSQL, k3s, Grafana LGTM", (
  [Took over an AI-generated prototype with no deployment process and cut deploys from \~1 hour of manual builds to under 20 minutes with a CI pipeline (lint, tests) deploying to k3s],
  [Achieved zero-downtime deploys across 21 Go/Java microservices (7,910 requests, 0 failures in a live rolling restart) with PodDisruptionBudgets and Helm auto-rollback],
  [Owned the Next.js web front end: fixed a cross-account private-data leak by replacing a two-layer server-state cache with TanStack Query, and built the AI procurement assistant's streaming chat UI over SSE],
  [Unified buyer/seller identity across web and two Flutter apps with gateway-owned sessions, guarded by Playwright e2e tests],
))

#job("Vocus", "https://vocus.cc/", "(Taiwan content-creator platform)", "Mar 2025 – Oct 2025", "Sr. Backend Engineer", "Taipei, Taiwan",
  "Go (Gin), MongoDB, Redis, Qdrant, AWS, GCP", (
  [Cut p95 latency by 80% on hot endpoints of an API serving \~3M dynamic calls/week by replacing MongoDB `$lookup` joins with concurrent application-layer joins in Go],
  [Took card data off company servers for all 4 payment types via NewebPay's hosted iframe, shrinking PCI-DSS scope],
  [Lowered recommendation infrastructure cost by 20% by migrating from BigQuery to a self-hosted Qdrant vector database],
))

#job("ChengChi Tech", "https://chengchitech.com.tw/", "(early-stage software startup)", "Apr 2024 – Mar 2025", "Sr. Backend Engineer", "New Taipei, Taiwan",
  "Python (FastAPI), Next.js, React, Tauri, PostgreSQL, Redis, GCP", (
  [Shipped a commercial AI meeting-summarization desktop app solo in 3 months, sold to paying customers: speech recognition with speaker diarization (WhisperX), an offline local LLM (Ollama) and a Tauri/Next.js client],
  [Built 9 backend services from scratch as the sole backend engineer, owning architecture and code review, then mentored the second backend hire as the team grew from 4 to 7],
))

#job("AI-Rider", "https://www.ai-rider.com/?lang=en", "(parking technology; POS system running at ~1,000 sites)", "Mar 2022 – Nov 2023", "Backend Engineer", "New Taipei, Taiwan",
  "Node.js (Koa), Python (Flask), MariaDB, Redis, RabbitMQ", (
  [Halved SQL execution time for a customer with 4–5M parking records using EXPLAIN analysis and compound indexes],
  [Fixed silent disconnects of on-site ETag readers with epoll and TCP keepalive, detecting dead connections in \~7s],
))

#section("Skills")
#set text(size: 10pt)
#grid(columns: (1fr, 1fr), column-gutter: 1.2em, row-gutter: 0.42em,
  [• Languages: Python, Go, TypeScript, JavaScript, Java], [• Front-end: Next.js, React, Flutter (Dart), Tauri],
  [• Back-end: FastAPI, Gin, Spring Boot, Node.js, gRPC], [• Data: PostgreSQL, MongoDB, Redis, Qdrant],
  [• Infra: Docker, Kubernetes, GitHub Actions, AWS, GCP], [• AI: LLM agents, RAG, text-to-SQL, MCP, evals],
)

#section("Education")
#set text(size: 9.3pt)
#grid(columns: (1fr, auto), row-gutter: 0.42em, align: (left, right),
  [MS, Data Analytics Engineering, George Mason University (GPA 3.78/4.0)], emph[2019 – 2021],
  [BS, Chemical Engineering, Tatung University], emph[2013 – 2016])
