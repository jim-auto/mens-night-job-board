import styles from './FilterBar.module.css'

type Filters = {
  area: string
  jobType: string
  tags: string[]
  salaryMin: string
}

type FilterBarProps = {
  filters: Filters
  areaOptions: string[]
  jobTypeOptions: string[]
  tagOptions: string[]
  salaryOptions: Array<{ value: string; label: string }>
  onAreaChange: (value: string) => void
  onJobTypeChange: (value: string) => void
  onSalaryChange: (value: string) => void
  onTagToggle: (value: string) => void
  onClear: () => void
}

function FilterBar({
  filters,
  areaOptions,
  jobTypeOptions,
  tagOptions,
  salaryOptions,
  onAreaChange,
  onJobTypeChange,
  onSalaryChange,
  onTagToggle,
  onClear,
}: FilterBarProps) {
  const activeIndicators = [
    filters.area ? `エリア: ${filters.area}` : null,
    filters.jobType ? `職種: ${filters.jobType}` : null,
    filters.salaryMin
      ? salaryOptions.find((option) => option.value === filters.salaryMin)?.label ?? null
      : null,
    ...filters.tags.map((tag) => `タグ: ${tag}`),
  ].filter(Boolean)

  return (
    <section className={styles.wrapper} aria-label="求人フィルター">
      <div className={styles.controls}>
        <label className={styles.field}>
          <span>エリア</span>
          <select value={filters.area} onChange={(event) => onAreaChange(event.target.value)}>
            <option value="">すべて</option>
            {areaOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.field}>
          <span>職種</span>
          <select value={filters.jobType} onChange={(event) => onJobTypeChange(event.target.value)}>
            <option value="">すべて</option>
            {jobTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.field}>
          <span>給与目安</span>
          <select value={filters.salaryMin} onChange={(event) => onSalaryChange(event.target.value)}>
            {salaryOptions.map((option) => (
              <option key={option.value || 'all'} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles.tagArea}>
        <p className={styles.tagLabel}>人気タグ</p>
        <div className={styles.tags}>
          {tagOptions.map((tag) => {
            const active = filters.tags.includes(tag)

            return (
              <button
                key={tag}
                type="button"
                className={`${styles.tagButton} ${active ? styles.activeTag : ''}`}
                onClick={() => onTagToggle(tag)}
              >
                {tag}
              </button>
            )
          })}
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.indicators}>
          {activeIndicators.length > 0 ? (
            activeIndicators.map((indicator) => (
              <span key={indicator} className={styles.indicator}>
                {indicator}
              </span>
            ))
          ) : (
            <span className={styles.placeholder}>現在はフィルター未指定です。</span>
          )}
        </div>

        <button type="button" className={styles.clearButton} onClick={onClear}>
          条件をクリア
        </button>
      </div>
    </section>
  )
}

export default FilterBar
