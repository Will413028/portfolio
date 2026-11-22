#set document(title: "Will Wu — Resume", author: "Will Wu")
#set page(paper: "us-letter", margin: (x: 0.6in, top: 0.45in, bottom: 0.4in))
#set text(font: ("Helvetica Neue", "Arial"), size: 9.3pt)
#set par(leading: 0.42em)
#set list(marker: [•], indent: 0pt, body-indent: 0.35em, spacing: 0.32em)

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
    #v(-0.3em)
    #set text(size: 8.6pt)
    #grid(columns: (auto, auto), column-gutter: 1em, row-gutter: 0.45em,
      [MS, Data Analytics Engineering, George Mason University (GPA 3.78/4.0)], text(fill: rgb("#777"))[2019 – 2021],
      [BS, Chemical Engineering, Tatung University], text(fill: rgb("#777"))[2013 – 2016])
  ],
  align(left)[
    #set text(size: 8.6pt)
    #v(0.4em)
    #ul("https://www.linkedin.com/in/will4130/")[https://www.linkedin.com/in/will4130/] \
    #ul("https://github.com/Will413028")[https://github.com/Will413028] \
    #text(fill: blue)[will413028\@gmail.com] \
    #text(fill: blue)[+886 911-279-755] \
    Taipei, Taiwan (UTC+8) · Remote
  ],
)

#v(0.2em)
#text(size: 10pt)[4+ years shipping production full-stack systems in Python, Go, TypeScript, Java and Dart, from Next.js/React and Flutter clients to APIs, databases and Kubernetes.]

#section("Work Experience")

#job("APMIC", "https://www.apmic.ai/", "(enterprise AI platform for on-premises LLM deployment)", "Nov 2025 – Present", "Sr. Backend Engineer", "Taipei, Taiwan",
  "Python (FastAPI), Next.js, React, PostgreSQL, LiteLLM, MCP, Gemma 4 (on-prem)", (
  [Raised an investment-analysis agent's accuracy on a financial golden set from 47% to 89% (error rate 37% → 3%) on an on-prem Gemma 4 26B by benchmarking 7 data-feeding strategies and exposing retrieval as an agentic tool],
  [Cut the schema an on-prem LLM reads for text-to-SQL by 91% by building a 13-table PostgreSQL query layer and an eval-driven schema guide, plus an MCP server hardened against SQL injection],
  [Delivered a financial-ratio engine (14 ratios, API, UI, e2e) with AI coding agents in 9 tasks, gating merges on whole-branch code review and mutation testing that caught 2 security defects before release],
  [Migrated an undocumented Next.js API layer to FastAPI route by route (strangler fig) with 0 behavior diffs across 6–64 side-by-side runs per route, merging \~40 PRs in two days],
  [Resolved intermittent production timeouts by ruling out 3 hypotheses with measurements and tracing them to an unbounded HTTP call exhausting the thread pool; added an AST lint rule to prevent recurrence],
))

#job("dailyfresh", "https://dailyfresh.food", "(grocery marketplace: 20+ microservices, web and two mobile apps)", "Jan 2026 – Sep 2026", "Sr. Full-Stack Engineer (Part-time)", "Taipei, Taiwan",
  "Next.js, React, TypeScript, TanStack Query, Flutter, Go, Java (Spring Boot), PostgreSQL, k3s, Grafana LGTM", (
  [Took over an AI-generated prototype mixing Rust, Go and Java with no deployment process; cut deploys from \~1 hour of manual builds to under 20 minutes through CI with lint and tests onto k3s, rewrote the 2 Rust services in Go, and added Grafana LGTM observability],
  [Achieved zero-downtime deploys across 21 Go/Java microservices (7,910 requests, 0 failures in a live rolling restart) with PodDisruptionBudgets and Helm auto-rollback],
  [Owned the Next.js web front end, fixing a cross-account private-data leak by moving server state to TanStack Query and building the AI agent's streaming chat UI over SSE],
  [Unified buyer/seller identity across the web and two Flutter apps with gateway-owned sessions, guarded by Playwright e2e tests],
))

#job("Vocus", "https://vocus.cc/", "(Taiwan content-creator platform)", "Mar 2025 – Oct 2025", "Sr. Backend Engineer", "Taipei, Taiwan",
  "Go (Gin), MongoDB, Redis, Qdrant, AWS, GCP", (
  [Cut p95 latency by 80% on hot endpoints of a \~3M-weekly-call API by replacing MongoDB `$lookup` joins with concurrent application-layer joins in Go],
  [Took card data off company servers for 4 payment types by moving the NewebPay integration to iframe redirect, shrinking PCI-DSS scope],
))

#job("ChengChi Tech", "https://chengchitech.com.tw/", "(early-stage software startup)", "Apr 2024 – Mar 2025", "Sr. Backend Engineer", "New Taipei, Taiwan",
  "Python (FastAPI), Next.js, React, Tauri, PostgreSQL, Redis, GCP", (
  [Shipped a commercial AI meeting-summarization desktop app solo in 3 months, sold to paying customers: speech recognition with speaker diarization (WhisperX), an offline local LLM (Ollama) and a Tauri/Next.js client],
  [Joined as the only backend engineer beside one junior front-end developer and one designer; built 9 backend services from scratch, owned architecture and mentored the second backend hire as the team grew to 6],
))

#job("AI-Rider", "https://www.ai-rider.com/?lang=en", "(parking technology, ~1,000 sites)", "Mar 2022 – Nov 2023", "Backend Engineer", "New Taipei, Taiwan",
  "Node.js (Koa), Python (Flask), MariaDB, Redis, RabbitMQ", (
  [Halved SQL execution time on 4–5M parking records with EXPLAIN analysis and compound indexes, as primary backend engineer on the sites' POS system],
))

#section("Skills")
#set text(size: 10pt)
#grid(columns: (1fr, 1fr), column-gutter: 1.2em, row-gutter: 0.42em,
  [• Languages: Python, Go, TypeScript / JavaScript, Java, Dart], [• Front-end: Next.js, React, Flutter, Tauri],
  [• Back-end: FastAPI, Gin, Spring Boot, Node.js, gRPC], [• Data: PostgreSQL, MongoDB, Redis, Qdrant],
  [• Infra: Docker, Kubernetes, GitHub Actions, Grafana], [• AI: LLM agents, RAG, text-to-SQL, MCP, evals],
)
