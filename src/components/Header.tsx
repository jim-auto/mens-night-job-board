import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const navigation = [
  { label: 'トップ', to: '/' },
  { label: '求人一覧', to: '/jobs' },
  { label: '給与比較', to: '/compare' },
  { label: 'ガイド', to: '/guide' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)

    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} to="/" onClick={closeMenu}>
          夜職NAVI
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-label="メニューを開閉"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`.trim()
              }
              onClick={closeMenu}
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
      {menuOpen ? <button type="button" className={styles.backdrop} onClick={closeMenu} /> : null}
    </header>
  )
}

export default Header
