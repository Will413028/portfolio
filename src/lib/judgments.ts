// Public, dated engineering calls. Each entry must link to a record that was
// public on `date` (a commit, post, or talk), so a reader can check the claim
// was made before the outcome — never backfill from private notes.

type Localized = { en: string; "zh-TW": string };

interface Source {
  label: Localized;
  url: string;
}

// A call only leaves "open" with dated evidence of how it turned out.
type Outcome =
  | { status: "open" }
  | {
      status: "held" | "missed";
      resolution: { date: string; source: Source };
    };

type JudgmentRecord = {
  id: string;
  date: string; // YYYY-MM-DD, when the source record became public
  title: Localized;
  claim: Localized;
  source: Source;
} & Outcome;

export type JudgmentStatus = Outcome["status"];

export interface Judgment {
  id: string;
  date: string;
  title: string;
  claim: string;
  status: JudgmentStatus;
  source: { label: string; url: string };
  resolution?: { date: string; source: { label: string; url: string } };
}

const judgments: JudgmentRecord[] = [
  {
    id: "preregister-ai-evals",
    date: "2026-10-01",
    title: {
      en: "AI evaluations should be preregistered before they run",
      "zh-TW": "AI 評測應該在執行前先預先登記",
    },
    claim: {
      en: "RAG and agent results are easy to tune after the fact. Commit a hash of the experiment plan — datasets, model versions, metrics, planned runs — before execution, then compare disclosed results to it. A commitment proves the plan was fixed; it does not prove the results are true.",
      "zh-TW":
        "RAG 與 agent 的結果很容易事後調整。執行前先把實驗計畫（資料集、模型版本、指標、預計跑幾次）的雜湊值存證，事後再拿公開結果對照。存證能證明計畫沒被改過，但不能證明結果是真的。",
    },
    status: "open",
    source: {
      label: {
        en: "cardano-ai-preregistry · first commit",
        "zh-TW": "cardano-ai-preregistry · 首個 commit",
      },
      url: "https://github.com/Will413028/cardano-ai-preregistry/commit/1cb5d5bb08eb09b7ce4abff0c2cc1f5d3ead87e1",
    },
  },
  {
    id: "agent-memory-user-owned",
    date: "2026-09-02",
    title: {
      en: "Coding-agent memory belongs in files the user owns",
      "zh-TW": "Coding agent 的記憶應該放在使用者自己擁有的檔案裡",
    },
    claim: {
      en: "Long-running work with coding agents needs memory across sessions, but it should live in a plain Markdown vault under the user's Git history — not in a hosted memory service. Tools supply workflows and checks; the user keeps the data.",
      "zh-TW":
        "跟 coding agent 長期協作需要跨 session 的記憶，但它應該是使用者 Git 歷史裡的純 Markdown，而不是託管的記憶服務。工具提供流程與檢查，資料留在使用者手上。",
    },
    status: "open",
    source: {
      label: {
        en: "threadroot · first commit",
        "zh-TW": "threadroot · 首個 commit",
      },
      url: "https://github.com/Will413028/threadroot/commit/fd50141d13105f44612227f17f983b90e9f8160b",
    },
  },
];

export function getJudgments(locale: string = "en"): Judgment[] {
  const lang: keyof Localized = locale === "zh-TW" ? "zh-TW" : "en";
  const source = (s: Source) => ({ label: s.label[lang], url: s.url });
  return judgments
    .map((j) => ({
      id: j.id,
      date: j.date,
      title: j.title[lang],
      claim: j.claim[lang],
      status: j.status,
      source: source(j.source),
      resolution:
        j.status === "open"
          ? undefined
          : { date: j.resolution.date, source: source(j.resolution.source) },
    }))
    .sort((a, b) => b.date.localeCompare(a.date));
}
