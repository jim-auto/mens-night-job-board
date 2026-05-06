import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import FilterBar from '../components/FilterBar'
import JobCard from '../components/JobCard'
import jobsData from '../data/jobs.json'
import type { Job } from '../types'
import styles from './JobListPage.module.css'

const jobs = jobsData as Job[]

const salaryOptions = [
  { value: '', label: 'すべての給与帯' },
  { value: '25', label: '25万円以上' },
  { value: '30', label: '30万円以上' },
  { value: '35', label: '35万円以上' },
  { value: '40', label: '40万円以上' },
]

const extractSalaryNumber = (salary: string) => {
  const matched = salary.match(/(\d+)万円/)

  return matched ? Number(matched[1]) : 0
}

function JobListPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const filters = {
    area: searchParams.get('area') ?? '',
    jobType: searchParams.get('jobType') ?? '',
    tags: searchParams.getAll('tag'),
    salaryMin: searchParams.get('salaryMin') ?? '',
  }

  const areaOptions = useMemo(
    () => Array.from(new Set(jobs.map((job) => job.area))),
    [],
  )
  const jobTypeOptions = useMemo(
    () => Array.from(new Set(jobs.map((job) => job.jobType))),
    [],
  )
  const tagOptions = useMemo(
    () =>
      Array.from(new Set(jobs.flatMap((job) => job.tags))).sort((left, right) =>
        left.localeCompare(right, 'ja'),
      ),
    [],
  )

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesArea = !filters.area || job.area === filters.area
      const matchesJobType = !filters.jobType || job.jobType === filters.jobType
      const matchesSalary =
        !filters.salaryMin || extractSalaryNumber(job.salary) >= Number(filters.salaryMin)
      const matchesTags = filters.tags.every((tag) => job.tags.includes(tag))

      return matchesArea && matchesJobType && matchesSalary && matchesTags
    })
  }, [filters.area, filters.jobType, filters.salaryMin, filters.tags])

  const updateParams = (nextFilters: Partial<typeof filters>) => {
    const params = new URLSearchParams()
    const area = nextFilters.area ?? filters.area
    const jobType = nextFilters.jobType ?? filters.jobType
    const salaryMin = nextFilters.salaryMin ?? filters.salaryMin
    const tags = nextFilters.tags ?? filters.tags

    if (area) {
      params.set('area', area)
    }

    if (jobType) {
      params.set('jobType', jobType)
    }

    if (salaryMin) {
      params.set('salaryMin', salaryMin)
    }

    tags.forEach((tag) => {
      params.append('tag', tag)
    })

    setSearchParams(params)
  }

  const handleTagToggle = (tag: string) => {
    const nextTags = filters.tags.includes(tag)
      ? filters.tags.filter((currentTag) => currentTag !== tag)
      : [...filters.tags, tag]

    updateParams({ tags: nextTags })
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.kicker}>JOB SEARCH</p>
        <h1 className={styles.title}>求人一覧</h1>
        <p className={styles.copy}>
          エリア・職種・タグ・給与目安から条件を絞り込み、気になる求人を比較できます。
        </p>
      </section>

      <FilterBar
        filters={filters}
        areaOptions={areaOptions}
        jobTypeOptions={jobTypeOptions}
        tagOptions={tagOptions}
        salaryOptions={salaryOptions}
        onAreaChange={(value) => updateParams({ area: value })}
        onJobTypeChange={(value) => updateParams({ jobType: value })}
        onSalaryChange={(value) => updateParams({ salaryMin: value })}
        onTagToggle={handleTagToggle}
        onClear={() => setSearchParams(new URLSearchParams())}
      />

      <section className={styles.resultsSection}>
        <div className={styles.summary}>
          <p className={styles.resultCount}>{filteredJobs.length}件の求人が見つかりました</p>
          <p className={styles.helper}>条件はすべてクライアントサイドで絞り込んでいます。</p>
        </div>

        {filteredJobs.length > 0 ? (
          <div className={styles.grid}>
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <h2>条件に合う求人が見つかりませんでした</h2>
            <p>エリアやタグを少し広げて、もう一度探してみてください。</p>
          </div>
        )}
      </section>
    </div>
  )
}

export default JobListPage
