import React, { Component } from 'react'
import Link from 'gatsby-link'

import styles from './nav.module.scss'

const Nav = () => (
  <div className={styles.nav}>
    <Link className={styles.link} to="#speakers">Speakers</Link>
    <Link className={styles.link} to="#location">Location</Link>
    <Link className={styles.link} to="/conduct">Conduct</Link>
    <Link className={styles.link} to="/faq">FAQs</Link>
  </div>
)

export default Nav
