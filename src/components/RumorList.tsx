import styles from './RumorList.module.css'

type RumorListProps = {
  rumors: string[]
}

function RumorList({ rumors }: RumorListProps) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>ネット上で見られる声</h2>
        <p className={styles.disclaimer}>
          ※ 以下はネット上で見られる声を要約・抽象化したものです。真偽は不明であり、事実を保証するものではありません。
        </p>
      </div>

      <ul className={styles.list}>
        {rumors.map((rumor) => (
          <li key={rumor} className={styles.item}>
            {rumor}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default RumorList
