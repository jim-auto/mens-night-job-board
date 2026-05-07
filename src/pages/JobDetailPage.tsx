import { Link, useParams } from 'react-router-dom'
import RumorList from '../components/RumorList'
import TagBadge from '../components/TagBadge'
import jobsData from '../data/jobs.json'
import type { Job } from '../types'
import styles from './JobDetailPage.module.css'

const jobs = jobsData as Job[]

function JobDetailPage() {
  const { id } = useParams()
  const job = jobs.find((item) => item.id === id)

  if (!job) {
    return (
      <section className={styles.notFound}>
        <h1>求人が見つかりませんでした</h1>
        <p>URLが異なるか、掲載が終了している可能性があります。</p>
        <Link className={styles.backLink} to="/jobs">
          求人一覧へ戻る
        </Link>
      </section>
    )
  }

  return (
    <div className={styles.page}>
      <Link className={styles.backLink} to="/jobs">
        ← 求人一覧へ戻る
      </Link>

      <section className={styles.card}>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>{job.area}</p>
            <h1 className={styles.title}>{job.name}</h1>
          </div>
          {job.featured ? <span className={styles.featured}>FEATURED</span> : null}
        </div>

        <div className={styles.badges}>
          <TagBadge label={job.area} />
          <TagBadge label={job.jobType} />
          {job.tags.map((tag) => (
            <TagBadge key={tag} label={tag} />
          ))}
        </div>

        <div className={styles.metaGrid}>
          <div className={styles.metaCard}>
            <span>給与</span>
            <strong>{job.salary}</strong>
          </div>
          <div className={styles.metaCard}>
            <span>勤務時間</span>
            <strong>{job.hours}</strong>
          </div>
          <div className={styles.metaCard}>
            <span>職種</span>
            <strong>{job.jobType}</strong>
          </div>
        </div>

        <section className={styles.section}>
          <h2>仕事内容・特徴</h2>
          <p>{job.description}</p>
        </section>

        {job.careerPath && job.careerPath.length > 0 && (
          <section className={styles.section}>
            <h2>キャリアパス</h2>
            <div className={styles.careerPath}>
              {job.careerPath.map((step, idx) => (
                <div key={idx} className={styles.careerStep}>
                  <div className={styles.stepYear}>Year {step.year}</div>
                  <div className={styles.stepContent}>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <a
          className={styles.applyButton}
          href={job.applyUrl}
          target="_blank"
          rel="noreferrer"
        >
          応募ページへ進む
        </a>
      </section>

      <RumorList rumors={job.rumors} />
    </div>
  )
}

export default JobDetailPage
