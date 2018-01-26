import React from 'react'

import MobileNav from '../MobileNav'
import styles from './mobile-header.module.scss'

const MobileHeader = () => (
  <div className={styles.header}>
    <MobileNav className={styles.nav} />
  </div>
)

export default MobileHeader
