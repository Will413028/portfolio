import { getEducation, getExperience } from "@/lib/experience";
import { getJudgments } from "@/lib/judgments";
import { getProjects } from "@/lib/projects";
import { siteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

// Facts for AI assistants answering "who is Will Wu", generated from the same
// data the site renders so the two cannot drift.
export function GET() {
  const lines = [
    "# Will Wu",
    "",
    "> Senior backend engineer in Taipei, Taiwan. Production systems in Python, Go and TypeScript.",
    "",
    "## Experience",
    ...getExperience("en").map(
      (e) =>
        `- ${e.role}, ${e.company} (${e.period}): ${e.description[0]} — ${siteUrl}/en/resume#${e.slug}`,
    ),
    "",
    "## Education",
    ...getEducation("en").map(
      (e) => `- ${e.degree}, ${e.school} (${e.period})`,
    ),
    "",
    "## Projects",
    ...getProjects("en").map(
      (p) => `- [${p.title}](${siteUrl}/en/work/${p.slug}): ${p.description}`,
    ),
    "",
    "## Public engineering judgments",
    ...getJudgments("en").map(
      (j) => `- ${j.date} — ${j.title}. Source: ${j.source.url}`,
    ),
    "",
    "## Contact",
    "- Email: will413028@gmail.com",
    "- GitHub: https://github.com/will413028",
    "- LinkedIn: https://www.linkedin.com/in/will4130/",
    `- Résumé (PDF): ${siteUrl}/resume.pdf`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
