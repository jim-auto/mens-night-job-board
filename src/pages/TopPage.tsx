import { Link } from 'react-router-dom'
import jobsData from '../data/jobs.json'
import JobCard from '../components/JobCard'
import type { Job, JobType } from '../types'
import styles from './TopPage.module.css'

const jobs = jobsData as Job[]

const categories: Array<{ type: JobType; title: string; copy: string }> = [
  {
    type: 'ボーイ',
    title: 'ボーイ',
    copy: 'ホール補助や接客サポートを中心に、未経験から入りやすい職種です。',
  },
  {
    type: '黒服',
    title: '黒服',
    copy: 'フロア全体の進行やスタッフ連携を担い、経験が活きやすい職種です。',
  },
  {
    type: 'ドライバー',
    title: 'ドライバー',
    copy: '終業後の送迎やルート対応など、安全運転と時間管理が求められます。',
  },
  {
    type: 'スカウト',
    title: 'スカウト',
    copy: '案内力や提案力を活かしやすく、歩合を含む求人も見つけやすいです。',
  },
  {
    type: 'ホスト',
    title: 'ホスト',
    copy: '接客・会話力を活かす職種。未経験からスタートできる研修体制のある店舗も多いです。',
  },
]

const areas = ['東京', '大阪', '名古屋', '福岡']

const trends = [
  '未経験歓迎でも、接客マナーや段取りの基本を重視する募集が多く見られます。',
  'ドライバーやスカウトは、副業相談や歩合制度に触れている求人が比較的目立ちます。',
  '黒服系は昇給・役職アップに関する訴求が多く、経験者向けの求人も見られます。',
]

function TopPage() {
  const featuredJobs = jobs.filter((job) => job.featured).slice(0, 4)

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.kicker}>MEN&apos;S NIGHT JOB BOARD</p>
        <h1 className={styles.title}>夜職NAVI</h1>
        <p className={styles.copy}>
          男性向け夜職求人を、エリア・職種・条件から見やすく整理。ネット上でよく見られる傾向も合わせて把握できます。
        </p>
        <div className={styles.actions}>
          <Link className={styles.primaryAction} to="/jobs">
            求人を探す
          </Link>
          <a className={styles.secondaryAction} href="#industry-trends">
            業界の傾向を見る
          </a>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>職種から探す</h2>
          <p>気になる仕事内容から一覧ページへ移動し、そのまま絞り込みできます。</p>
        </div>
        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <Link
              key={category.type}
              className={styles.categoryCard}
              to={`/jobs?jobType=${encodeURIComponent(category.type)}`}
            >
              <span className={styles.categoryLabel}>{category.title}</span>
              <p>{category.copy}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>エリア別クイックリンク</h2>
          <p>主要エリアをワンタップで絞り込み表示できます。</p>
        </div>
        <div className={styles.areaLinks}>
          {areas.map((area) => (
            <Link key={area} className={styles.areaLink} to={`/jobs?area=${encodeURIComponent(area)}`}>
              {area}
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>注目求人</h2>
          <p>サイト内でピックアップしている求人をチェックできます。</p>
        </div>
        <div className={styles.featuredGrid}>
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      <section id="industry-trends" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>ネット上でよく見られる傾向</h2>
          <p>求人文や口コミ風情報から、よく語られるポイントを抽象化して整理しています。</p>
        </div>
        <div className={styles.trendPanel}>
          {trends.map((trend) => (
            <div key={trend} className={styles.trendItem}>
              {trend}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div>
          <p className={styles.ctaTitle}>条件を比較しながら、自分に合う夜職求人を見つける。</p>
          <p className={styles.ctaCopy}>
            フィルターで条件を整理し、気になる求人は詳細ページでチェックしてください。
          </p>
        </div>
        <Link className={styles.ctaButton} to="/jobs">
          求人一覧へ
        </Link>
      </section>
    </div>
  )
}

export default TopPage
