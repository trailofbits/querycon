import React from 'react'
import Link from 'gatsby-link'

import styles from './nav.module.scss'

const Nav = ({ dark }) => {
  const { linkDark, linkLight } = styles
  const linkStyle = dark ? linkDark : linkLight

  return (
    <div className={styles.nav}>
      <Link className={linkStyle} to="/program">Program</Link>
      <Link className={linkStyle} to="/conduct">Conduct</Link>
      <Link className={linkStyle} to="/faq">FAQs</Link>
    </div>
  )
}

export default Nav
