# 夜職NAVI

## サイト概要

夜職NAVIは、男性向けナイトワーク求人情報を見やすく整理した静的Webアプリです。ボーイ・黒服・ホスト・ドライバー・スカウトなどの求人情報を、エリアや条件で検索できます。

**単なる求人サイトではなく「求人情報 + 業界実態の整理」を目的**としています。

- 📋 26+ リアルな求人掲載（東京・大阪・名古屋など）
- 💰 給与比較機能（エリア×職種分析）
- 🎓 初心者向けガイド（職種解説・FAQ）
- 📈 キャリアパス情報（各職場別進路図）
- 🌙 ネオン・ダークテーマで実装

## 🚀 主な機能

### 1. 求人一覧・詳細ページ
- エリア・職種・給与・タグでフィルタ可能
- 各求人に業界の声（rumors）を掲載
- キャリアパス情報で将来像を提示
- 外部求人サイトへの応募リンク

### 2. 給与比較ページ (`/compare`)
- エリア別給与相場（最低・平均・最高）
- 職種別給与相場
- エリア×職種クロス集計
- 時給・月給の自動換算

### 3. ビギナーガイド (`/guide`)
- 5職種の詳細解説（ボーイ・黒服・ホスト・ドライバー・スカウト）
- キャリアプログレッション図（Year 0-5+）
- よくある質問 7項目
- 成功のコツ・健康管理アドバイス
- 参考リソースへのリンク

### 4. 業界実態の声
- 「〜という声があります」形式で抽象化
- 体育会系度・未経験継続率・昇進速度・深夜体力消耗・客層の質・福利厚生
- 断定表現なし、誹謗中傷なし

## 技術構成

- **フレームワーク**: Vite + React 18 + TypeScript
- **ルーティング**: React Router v6（HashRouter を使用）
- **スタイリング**: CSS Modules + plain CSS
- **データ**: JSONベースの静的管理
- **デプロイ**: GitHub Actions + GitHub Pages

> HashRouter を採用理由：GitHub Pages は静的ホスティングのため、サーバー側ルーティングが不可。URL フラグメント（#）を使用して SPA を実現。

## 🔧 ローカル開発方法

```bash
# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev
```

ブラウザで表示されるローカルURL（通常 http://localhost:5173）を開いて確認してください。

## 📦 ビルド・デプロイ方法

### ローカルビルド
```bash
npm run build
npm run lint
```

### GitHub Pages への自動デプロイ

1. `main` ブランチへ push する
2. GitHub Actions の `Deploy to GitHub Pages` ワークフローが自動実行
3. `dist` 配下のビルド成果物が gh-pages ブランチへデプロイ
4. https://jim-auto.github.io/mens-night-job-board/ で公開

> `vite.config.ts` の `base` は `/mens-night-job-board/` に設定しています。リポジトリ名を変更する場合は合わせて修正してください。

## 📊 求人データ(JSON)の追加・編集方法

求人データは `src/data/jobs.json` で一元管理しています。

### JSONスキーマ

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
  "careerPath": [
    {
      "year": 0,
      "title": "ボーイ入門",
      "description": "ホール補助業務から開始。カクテル・ドリンクサービスを習得"
    },
    {
      "year": 2,
      "title": "黒服昇進",
      "description": "管理職へ昇進。スタッフマネジメント開始"
    }
  ],
  "featured": false
}
```

### フィールド説明

| フィールド | 型 | 説明 |
|-----------|-----|------|
| `id` | string | 詳細ページURLで使用。重複不可。ハイフン区切りで命名 |
| `name` | string | 求人名・店舗名 |
| `area` | string | エリア（東京・大阪・名古屋・福岡・札幌・その他） |
| `jobType` | string | 職種（ボーイ・黒服・ホスト・ドライバー・スカウト・その他） |
| `salary` | string | 給与（「時給 2,000円〜」「月給 50万円〜」など） |
| `hours` | string | 勤務時間（「18:00〜翌2:00」など） |
| `tags` | string[] | タグ（未経験OK・週3〜OK・寮あり など） |
| `description` | string | 求人の詳細説明。職場の雰囲気や業務内容 |
| `applyUrl` | string | 外部求人サイトの応募ページURL |
| `rumors` | string[] | ネット上でよく見られる業界の声。3-5個程度 |
| `careerPath` | CareerPathStep[] | キャリアプログレッション情報（オプション） |
| `featured` | boolean | `true` でトップページ注目求人に表示（デフォルト: false） |

### rumors の記載方法

✅ **推奨**：
- 「〜という声があります」形式で抽象化
- 複数のオプションを記載（「体育会系か、カジュアルか」）
- 業界実態に基づく内容

❌ **避けるべき**：
- 「実務的には〜」など断定表現
- 「最悪の職場」「ブラック」など誹謗中傷
- 匿名掲示板からの直接引用
- 店舗の誤情報

### careerPath の記載方法

各職場の昇進・キャリアパスを Year 単位で記載：

```json
"careerPath": [
  { "year": 0, "title": "入門期", "description": "..." },
  { "year": 1, "title": "成長期", "description": "..." },
  { "year": 2, "title": "昇進", "description": "..." }
]
```

- `year`：職務経過年数（0 = 入門、2.5 = 2.5年 等も可）
- `title`：その時期の職位・段階
- `description`：その段階でのキャリア内容

## 📁 ディレクトリ構成

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions デプロイ設定
├── public/
├── src/
│   ├── components/             # React コンポーネント
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── JobCard.tsx
│   │   ├── RumorList.tsx
│   │   ├── TagBadge.tsx
│   │   └── *.module.css
│   ├── data/
│   │   └── jobs.json           # 求人データ（一元管理）
│   ├── pages/                  # ページコンポーネント
│   │   ├── TopPage.tsx
│   │   ├── JobListPage.tsx
│   │   ├── JobDetailPage.tsx
│   │   ├── ComparePage.tsx     # 給与比較ページ
│   │   ├── GuidePage.tsx       # ビギナーガイド
│   │   └── *.module.css
│   ├── types/
│   │   └── index.ts            # TypeScript 型定義
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 UI/UXデザイン

### テーマ
- **背景**: ダークテーマ（#0a0e27）
- **カラー**: シアン系グラデーション（#00d4ff → #00a8e8）
- **雰囲気**: ネオン・サイバーパンク寄り
- **レスポンシブ**: モバイルファーストで実装

### コンポーネント
- **JobCard**: 求人の視覚的表現
- **TagBadge**: エリア・職種・特性の視認性
- **RumorList**: 業界の声をリスト表示
- **Header/Footer**: 全ページ共通ナビゲーション

## 📝 主な画面

| ページ | ルート | 説明 |
|--------|--------|------|
| トップページ | `/` | サイト概要・カテゴリ・新着求人 |
| 求人一覧 | `/jobs` | フィルタ可能な求人一覧 |
| 求人詳細 | `/jobs/:id` | 求人の詳細情報・キャリアパス |
| 給与比較 | `/compare` | エリア×職種別の給与相場分析 |
| ガイド | `/guide` | 職種解説・FAQ・キャリアガイド |

## 🔍 型定義 (TypeScript)

```typescript
export type JobType = 'ボーイ' | '黒服' | 'ホスト' | 'ドライバー' | 'スカウト' | 'その他'
export type Area = '東京' | '大阪' | '名古屋' | '福岡' | '札幌' | 'その他'

export interface CareerPathStep {
  year: number
  title: string
  description: string
}

export interface Job {
  id: string
  name: string
  area: Area
  jobType: JobType
  salary: string
  hours: string
  tags: string[]
  description: string
  applyUrl: string
  rumors: string[]
  careerPath?: CareerPathStep[]
  featured?: boolean
}
```

新しい職種やエリアを追加する場合は `src/types/index.ts` を修正してください。

## 🚀 パフォーマンス

- **ビルドサイズ**: ~300KB (gzip: ~90KB)
- **キャッシング**: GitHub Pages のブラウザキャッシュ活用
- **最適化**: 画像なし、軽量JSON、CSS Modules によるスコープ管理

## 📋 メンテナンス・運用

### 定期更新

1. **求人情報の更新**
   - 新求人追加：`src/data/jobs.json` に追加
   - 終了求人削除：該当エントリーを削除
   - 情報修正：JSON編集後、`main` ブランチへ push

2. **rumors の改善**
   - 業界の声を定期的に追加
   - 古い情報は段階的に削除

3. **キャリアパス の充実**
   - 新しい情報に基づき更新
   - 実際の昇進事例を参考に

### トラブルシューティング

**デプロイが失敗する場合**
- GitHub Actions ログを確認（Settings > Actions）
- `npm install` で依存関係の競合を解決
- `.github/workflows/deploy.yml` の設定を確認

**ビルドエラーが出る場合**
- TypeScript エラー：`npm run build` で詳細確認
- JSONの構文エラー：`json` ファイルの妥当性を確認

## 📜 ライセンス

このプロジェクトはオープンソースです。自由に改変・配布できます。

---

**最終更新**: 2026年5月
**ステータス**: 実装完了・運用段階
