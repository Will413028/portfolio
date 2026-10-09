// Headline numbers on the home page. Each one is Will's own result and links
// to the entry that documents it (a résumé anchor or a case study). `evidence`
// is a verbatim excerpt of that entry; the test asserts the linked entry
// still contains it, so a number cannot outlive its source.

type Localized = { en: string; "zh-TW": string };

interface HighlightRecord {
  id: string;
  value: Localized;
  label: Localized;
  context: Localized;
  href: string;
  evidence: Localized;
}

export interface Highlight {
  id: string;
  value: string;
  label: string;
  context: string;
  href: string;
  evidence: string;
}

const highlights: HighlightRecord[] = [
  {
    id: "report-qa-latency",
    value: { en: "80s → 7s", "zh-TW": "80 → 7 秒" },
    label: {
      en: "AI report Q&A response time",
      "zh-TW": "AI 季報問答的回應時間",
    },
    context: { en: "APMIC", "zh-TW": "APMIC" },
    href: "/resume#apmic",
    evidence: { en: "from ~80s to ~7s", "zh-TW": "從約 80 秒降到約 7 秒" },
  },
  {
    id: "mongodb-latency",
    value: { en: "−80%", "zh-TW": "−80%" },
    label: {
      en: "API response time on hot MongoDB queries",
      "zh-TW": "熱點 MongoDB 查詢的 API 回應時間",
    },
    context: { en: "Vocus", "zh-TW": "Vocus 方格子" },
    href: "/resume#vocus",
    evidence: {
      en: "reducing API response time by 80%",
      "zh-TW": "將 API 回應時間降低 80%",
    },
  },
  {
    id: "rolling-deploy",
    value: { en: "7,910 / 0", "zh-TW": "7,910 / 0" },
    label: {
      en: "requests / failures during a live rolling restart of 21 services",
      "zh-TW": "21 個服務滾動重啟時的請求數／失敗數",
    },
    context: { en: "DailyFresh", "zh-TW": "日日生鮮" },
    href: "/work/dailyfresh",
    evidence: { en: "7,910 requests", "zh-TW": "7,910 次請求" },
  },
  {
    id: "cold-start-quoting",
    value: { en: "60m → <30s", "zh-TW": "60 分 → 30 秒內" },
    label: {
      en: "cold-start quoting time of a live trading bot",
      "zh-TW": "真錢交易機器人的冷啟動報價時間",
    },
    context: { en: "bfx-funding-bot", "zh-TW": "bfx-funding-bot" },
    href: "/work/bfx-funding-bot",
    evidence: {
      en: "cold-start quoting 60 min → 14–27s",
      "zh-TW": "冷啟動報價 60 分鐘 → 14–27 秒",
    },
  },
];

export function getHighlights(locale: string = "en"): Highlight[] {
  const lang: keyof Localized = locale === "zh-TW" ? "zh-TW" : "en";
  return highlights.map((h) => ({
    id: h.id,
    value: h.value[lang],
    label: h.label[lang],
    context: h.context[lang],
    href: h.href,
    evidence: h.evidence[lang],
  }));
}
