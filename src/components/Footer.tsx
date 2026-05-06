import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <p className={styles.brand}>夜職NAVI</p>
          <p className={styles.copy}>
            男性向け夜職求人を、エリア・職種・条件から整理して探せる静的サイトです。
          </p>
        </div>

        <div className={styles.links}>
          <Link to="/">トップ</Link>
          <Link to="/jobs">求人一覧</Link>
        </div>
      </div>
      <p className={styles.note}>
        © 2026 夜職NAVI / 掲載情報とネット上の声は参考情報としてご利用ください。
      </p>
    </footer>
  )
}

export default Footer
