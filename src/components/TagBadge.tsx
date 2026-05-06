import styles from './TagBadge.module.css'

type TagBadgeProps = {
  label: string
}

const getToneClassName = (label: string) => {
  if (label.includes('未経験') || label.includes('研修')) {
    return styles.cyan
  }

  if (label.includes('寮') || label.includes('昇給') || label.includes('インセンティブ')) {
    return styles.purple
  }

  if (label.includes('交通費') || label.includes('送り') || label.includes('日払い')) {
    return styles.pink
  }

  return styles.slate
}

function TagBadge({ label }: TagBadgeProps) {
  return <span className={`${styles.badge} ${getToneClassName(label)}`}>{label}</span>
}

export default TagBadge
