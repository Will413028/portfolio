以下是尚未完成的項目：

---
需要手動處理的部分

| 項目 | 說明 |
|------|------|
| Resume PDF 檔案 | 頁面已建立（/resume），但需要放一份實際的 `public/resume.pdf` 檔案供下載 |
| Resend API Key | Contact 表單已接好 Resend，需在 `.env` 設定 `RESEND_API_KEY` 才能實際寄信 |
| Google Analytics ID | Analytics 元件已就緒，需在 `.env` 設定 `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` |
| Testimonials 真實性 | 資料已有 5 筆雙語內容，需確認是否為真實客戶評價 |

---
架構層面的改善（非緊急）

| 項目 | 說明 |
|------|------|
| Dashboard 功能的必要性 | 有 auth + dashboard，但對作品集可能過度工程化。建議在 README 說明或移除 |
| Blog 內容管理 | 目前文章寫在 blog-posts.ts 裡，未來可考慮 MDX 或 headless CMS |
