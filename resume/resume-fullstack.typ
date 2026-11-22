#set document(title: "Will Wu — Resume", author: "Will Wu")
#set page(paper: "us-letter", margin: (x: 0.6in, top: 0.45in, bottom: 0.4in))
#set text(font: ("Helvetica Neue", "Arial"), size: 9.5pt)
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
      [MS, Data Analytics Engineering, George Mason University (GPA 3.78/4.0)], text(fill: rgb("#777"))[2019 - 2021],
      [BS, Chemical Engineering, Tatung University], text(fill: rgb("#777"))[2013 - 2016])
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
  [Raised an investment-analysis agent from 14 to 26.7 correct answers on a 30-question financial golden set (wrong 11 → 1, mean of 3 runs) by benchmarking 7 ways of feeding it data and keeping retrieval as a tool the model calls],
  [Cut the database schema an on-prem LLM reads for text-to-SQL from 44,482 to \~3,800 characters by building a 13-table query layer and an eval-driven database guide, plus an MCP search server hardened against SQL injection],
  [Caught two security-relevant defects and a test that asserted nothing in AI-generated code by running whole-branch review and hand-run mutation tests on a 9-task subagent-built financial-ratio engine (API, UI, e2e)],
  [Moved an undocumented Next.js API layer to the Python backend with 0 diffs by recording its behavior as characterization fixtures and running old and new side by side 6–64 times per route before each cutover],
  [Fixed intermittent production timeouts by disproving three hypotheses with measurements and tracing the cause to HTTP calls without timeouts exhausting a worker thread pool; added an AST-based guard],
))

#job("dailyfresh", "https://dailyfresh.food", "(grocery marketplace: 22 microservices, web and two mobile apps)", "Jan 2026 – Sep 2026", "Sr. Full-Stack Engineer (Part-time)", "Taipei, Taiwan",
  "Next.js, React, TypeScript, TanStack Query, Flutter, Go, Java (Spring Boot), PostgreSQL, k3s", (
  [Authored \~60% of non-merge commits (7,456 of 12,406) across five repositories while owning the Next.js web front end and the backend platform],
  [Closed a cross-account private-data leak by moving server state to TanStack Query site-wide; put 25+ raw fetch calls behind one API client with a lint gate and built the AI agent's streaming chat UI over SSE],
  [Unified buyer/seller authentication across Next.js and two Flutter apps by moving to gateway-owned sessions (httpOnly cookies, CSRF, role-as-claim), guarded by Playwright e2e tests],
  [Kept 7,910 requests at 0 downtime during a live rolling restart of 21 Go/Java microservices by adding PodDisruptionBudgets, dual-replica gateways and Helm auto-rollback],
))

#job("Vocus", "https://vocus.cc/", "(Taiwan content-creator platform, ~3M weekly API calls)", "March 2025 – Oct 2025", "Sr. Backend Engineer", "Taipei, Taiwan",
  "Go (Gin), MongoDB, Redis, Qdrant, AWS, GCP", (
  [Cut MongoDB p95 latency on hotspot endpoints by 80% by replacing `$lookup` joins with single-collection reads and concurrent application-layer joins],
  [Reduced PCI-DSS scope by migrating 4 payment types to the gateway's iframe-redirect mode],
))

#job("ChengChi Tech", "https://chengchitech.com.tw/", "(early-stage software startup)", "April 2024 – March 2025", "Sr. Backend Engineer", "New Taipei, Taiwan",
  "Python (FastAPI), Next.js, React, Tauri, PostgreSQL, Redis, GCP", (
  [Shipped a commercial AI meeting-summarization app solo in 3 months (WhisperX + local LLM + Tauri/Next.js desktop), now serving paying customers],
  [First and only senior backend engineer: built 9 services from scratch, owned architecture and code review, and mentored juniors as the team grew from 4 to 7–8],
))

#job("AI-Rider", "https://www.ai-rider.com/?lang=en", "(parking technology, ~1,000 sites)", "March 2022 – Nov 2023", "Backend Engineer", "New Taipei, Taiwan",
  "Node.js (Koa), Python (Flask), MariaDB, Redis, RabbitMQ", (
  [Halved SQL execution time on 4–5M parking records with EXPLAIN analysis and compound indexes, as primary backend engineer on the sites' POS system],
))

#section("Skills")
#set text(size: 10pt)
#grid(columns: (1fr, 1fr), column-gutter: 1.2em, row-gutter: 0.42em,
  [• Languages: Python, Go, TypeScript, Java, Dart], [• Front-end: Next.js, React, Flutter, Tauri],
  [• Back-end & data: FastAPI, Gin, Spring Boot, Node.js, PostgreSQL, MongoDB, Redis], [• Infra & AI: Docker, Kubernetes, Terraform; LLM agents, RAG, MCP, evals],
)
