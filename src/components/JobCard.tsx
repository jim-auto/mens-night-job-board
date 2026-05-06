import { Link } from 'react-router-dom'
import type { Job } from '../types'
import TagBadge from './TagBadge'
import styles from './JobCard.module.css'

type JobCardProps = {
  job: Job
}

function JobCard({ job }: JobCardProps) {
  const visibleTags = job.tags.slice(0, 3)
  const hiddenTagCount = Math.max(job.tags.length - visibleTags.length, 0)

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>{job.area}</p>
          <h3 className={styles.name}>{job.name}</h3>
        </div>
        {job.featured ? <span className={styles.featured}>PICK UP</span> : null}
      </div>

      <div className={styles.badges}>
        <TagBadge label={job.area} />
        <TagBadge label={job.jobType} />
      </div>

      <p className={styles.salary}>{job.salary}</p>
      <p className={styles.hours}>勤務時間: {job.hours}</p>

      <div className={styles.tags}>
        {visibleTags.map((tag) => (
          <TagBadge key={tag} label={tag} />
        ))}
        {hiddenTagCount > 0 ? <span className={styles.more}>+{hiddenTagCount} more</span> : null}
      </div>

      <p className={styles.description}>{job.description}</p>

      <Link className={styles.button} to={`/jobs/${job.id}`}>
        詳細を見る
      </Link>
    </article>
  )
}

export default JobCard
