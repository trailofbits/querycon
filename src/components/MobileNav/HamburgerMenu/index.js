import React from 'react'
import classNames from 'classnames'

import styles from './hamburger-menu.module.scss'

const HamburgerMenu = ({ className, onClick }) => {
  const cx = classNames.bind(styles)
  const menuClasses = cx(styles.hamburgerMenu, className)

  return (
    <button className={menuClasses} onClick={onClick}>
      <span className={styles.bar} />
      <span className={styles.bar} />
    </button>
  )
}

export default HamburgerMenu
