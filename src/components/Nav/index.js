import React from 'react'

import styles from './nav.module.scss'

const Nav = () => (
  <div className={styles.nav}>
    <a className={styles.link} href="#topics">Topics</a>
    <a className={styles.link} href="#speakers">Speakers</a>
    <a className={styles.link} href="#agenda">Agenda</a>
    <a className={styles.link} href="#location">Location</a>
  </div>
)

export default Nav
