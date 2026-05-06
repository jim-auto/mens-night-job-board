# 夜職NAVI

## サイト概要

夜職NAVIは、男性向け夜職求人を見やすく整理した静的Webアプリです。ボーイ・黒服・ドライバー・スカウトなどの求人情報を、エリアや条件で絞り込みながら確認できます。各求人詳細では、募集要項に加えてネット上でよく見られる抽象化された声も掲載しています。

## 技術構成

- Vite
- React + TypeScript
- React Router v6（HashRouter）
- CSS Modules + plain CSS
- JSONベースの求人データ管理
- GitHub Actions + GitHub Pages

## ローカル開発方法

```bash
npm install
npm run dev
```

ブラウザで表示されるローカルURLを開いて確認してください。

## GitHub Pagesデプロイ方法

1. `main` ブランチへ push します。
2. GitHub Actions の `Deploy to GitHub Pages` ワークフローが実行されます。
3. `dist` 配下のビルド成果物が GitHub Pages に公開されます。

> `vite.config.ts` の `base` は `/mens-night-job-board/` に設定しています。リポジトリ名を変更する場合は合わせて修正してください。

## 求人データ(JSON)の追加方法

求人データは `src/data/jobs.json` で管理しています。1件ごとに以下の形式でオブジェクトを追加してください。

```json
{
  "id": "unique-job-id",
  "name": "STORE NAME",
  "area": "東京",
  "jobType": "ボーイ",
  "salary": "月給25万円〜35万円",
  "hours": "19:00〜翌3:00",
  "tags": ["未経験OK", "週3〜OK", "交通費支給"],
  "description": "求人の特徴や職場の雰囲気を記載します。",
  "applyUrl": "https://example.com/apply/store",
  "rumors": [
    "未経験スタートの方が多いという声があります",
    "研修が比較的丁寧だという意見も見られます"
  ],
  "featured": false
}
```

- `id` は詳細ページURLで使用するため重複不可です。
- `rumors` は断定を避け、抽象化された表現で記載してください。
- `featured` を `true` にするとトップページの注目求人に表示されます。

## ディレクトリ構成

```text
.
├── .github/workflows/deploy.yml
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── types/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```
