import React, { Component } from 'react'

import styles from './nav.module.scss'

const Nav = () => (
  <div className={styles.nav}>
    <a className={styles.link} href="#speakers">Speakers</a>
    <a className={styles.link} href="#location">Location</a>
    <a className={styles.link} href="/conduct">Conduct</a>
    <a className={styles.link} href="/faq">FAQs</a>
  </div>
)

export default Nav
