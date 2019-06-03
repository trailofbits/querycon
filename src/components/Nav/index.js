import React from 'react'
import Link from 'gatsby-link'

import styles from './nav.module.scss'

const Nav = () => {
  const { link } = styles

  return (
    <div className={styles.nav}>
      <Link className={link} to="/program">Program</Link>
      <Link className={link} to="/conduct">Conduct</Link>
      <Link className={link} to="/faq">FAQs</Link>
    </div>
  )
}

export default Nav
