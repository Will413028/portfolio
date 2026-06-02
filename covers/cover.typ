// Branded project cover image — NOT a UI screenshot (these apps are private).
// Build:  pnpm covers:gen   (-> ../public/images/projects/<slug>.png)
// Usage:  typst compile --ppi 96 --input proj=<slug> cover.typ out.png

#let data = (
  "bfx-funding-bot": (
    kicker: "SIDE PROJECT · 2026",
    title: "bfx-funding-bot",
    subtitle: "Algorithmic Crypto Funding Bot",
    tech: "Python · asyncio · PostgreSQL · Event Sourcing",
    c1: "#3b1a05",
    c2: "#7c2d12",
  ),
  "divego": (
    kicker: "SIDE PROJECT · 2026",
    title: "divego",
    subtitle: "Full-Stack Migration · strangler-fig",
    tech: "Next.js · Hono · Drizzle · TypeScript",
    c1: "#1e1b4b",
    c2: "#0c2a4d",
  ),
)

#let d = data.at(sys.inputs.at("proj"))

#set page(
  width: 1200pt,
  height: 600pt,
  margin: 0pt,
  fill: gradient.linear(rgb(d.c1), rgb(d.c2), angle: 130deg),
)
#set text(font: ("Helvetica Neue", "Arial"), fill: white)

#place(left + horizon, dx: 96pt)[
  #text(size: 25pt, fill: rgb(255, 255, 255, 160), tracking: 3pt)[#d.kicker]
  #v(16pt)
  #text(size: 84pt, weight: "bold")[#d.title]
  #v(18pt)
  #text(size: 34pt, fill: rgb(255, 255, 255, 220))[#d.subtitle]
  #v(46pt)
  #text(size: 22pt, fill: rgb(255, 255, 255, 150))[#d.tech]
]

#place(bottom + right, dx: -72pt, dy: -58pt)[
  #text(size: 30pt, weight: "bold", fill: rgb(255, 255, 255, 135))[WW]
]
