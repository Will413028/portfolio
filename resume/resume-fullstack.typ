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

#let job(company, url, dates, role, place, stack, bullets) = block(above: 0.75em, below: 0pt)[
  #grid(columns: (1fr, auto), row-gutter: 0.42em, align: (left, right),
    text(weight: "bold", size: 11pt)[#ul(url, company)], emph(dates),
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
#text(size: 10pt)[4+ years building and operating production full-stack systems in Python, Go, TypeScript, Java and Dart, from Next.js/React and Flutter clients through APIs, auth and databases to Kubernetes. Comfortable taking over unfamiliar codebases, debugging across browser, API and database layers, and measuring LLM features with golden-set evals before shipping them.]

#section("Work Experience")

#job("APMIC", "https://www.apmic.ai/", "Nov 2025 – Present", "Sr. Backend Engineer", "Taipei, Taiwan",
  "Python (FastAPI), Next.js, PostgreSQL, LiteLLM, MCP, Gemma 4 (on-prem), RabbitMQ", (
  [Raised a VC investment-analysis agent's accuracy on a 30-question financial golden set from 14 to 26.7 correct (wrong answers 11 → 1, mean of 3 runs) on an on-prem Gemma 4 26B, after benchmarking 7 ways of feeding data and keeping retrieval as a tool the model calls],
  [Made text-to-SQL usable for a government agency's on-prem LLM: built a 13-table query layer and an eval-driven database guide that shrank the schema the model sees from 44,482 to \~3,800 characters, plus an MCP search server hardened against SQL injection],
  [Moved the investment product's Next.js API routes to the Python backend route by route, switching only after old and new ran side by side with 0 diffs; merged \~40 PRs in two days and deleted \~57,000 lines of retired code],
  [Root-caused intermittent production timeouts after disproving three hypotheses by measurement: HTTP calls without timeouts exhausted a worker thread pool; added an AST-based guard so the class cannot return],
))

#job("dailyfresh", "https://dailyfresh.food", "Jan 2026 – Sep 2026", "Sr. Full-Stack Engineer (Part-time)", "Taipei, Taiwan",
  "Next.js, TypeScript, TanStack Query, Flutter, Go, Java (Spring Boot), PostgreSQL, k3s", (
  [Owned the Next.js web front end: moved server state to TanStack Query site-wide, fixing a cross-account private-data leak in a two-layer cache; put 25+ raw fetch calls behind one API client with a lint gate; built the AI agent's streaming chat panels over SSE],
  [Re-architected web auth to a gateway-owned session model (httpOnly cookies, CSRF, role-as-claim) across Next.js and two Flutter apps, guarded by Playwright e2e tests],
  [Delivered a merchant-governance epic end to end in one day (\~16,000 lines across Go, protobuf, SQL and Next.js); took both iOS apps through their first App Store submission],
  [Delivered zero-downtime Kubernetes rollout across 21 Go/Java microservices, proven by a live rolling restart (7,910 requests, 0 downtime); migrated the production database within an 11-minute window],
))

#job("Vocus", "https://vocus.cc/", "March 2025 – Oct 2025", "Sr. Backend Engineer", "Taipei, Taiwan",
  "Go (Gin), MongoDB, Redis, Qdrant, AWS, GCP", (
  [Cut MongoDB p95 latency by 80% on hotspot endpoints of a content platform serving \~3M weekly API calls],
  [Owned the payment-gateway migration to iframe-redirect mode across 4 payment types, reducing PCI-DSS scope],
))

#job("ChengChi Tech", "https://chengchitech.com.tw/", "April 2024 – March 2025", "Sr. Backend Engineer", "New Taipei, Taiwan",
  "Python (FastAPI), Next.js, React, Tauri, PostgreSQL, Redis, GCP", (
  [Shipped a commercial AI meeting-summarization app solo in 3 months (WhisperX + local LLM + Tauri/Next.js desktop), now serving paying customers],
  [Built 9 backend services from scratch and shipped a cloud POS and an EV-rental system, each in 2 months],
))

#job("AI-Rider", "https://www.ai-rider.com/?lang=en", "March 2022 – Nov 2023", "Backend Engineer", "New Taipei, Taiwan",
  "Node.js (Koa), Python (Flask), MariaDB, Redis, RabbitMQ", (
  [Primary backend engineer on a POS system running \~1,000 parking sites, including billing and on-site device integration],
  [Optimized SQL queries on 4–5M parking records, reducing execution time by 50%],
))

#section("Skills and Technical Competencies")
#set text(size: 10pt)
#grid(columns: (1fr, 1fr), column-gutter: 1.2em, row-gutter: 0.42em,
  [• Languages: Python, Go, TypeScript, Java, Dart], [• Front-end: Next.js, React, Flutter, Tauri],
  [• Back-end: FastAPI, Gin, Spring Boot, Node.js, gRPC], [• Data: PostgreSQL, MongoDB, Redis, Qdrant],
  [• Infra: Docker, Kubernetes, Terraform, GitHub Actions], [• AI: LLM agents, RAG, text-to-SQL, MCP, evals],
)
