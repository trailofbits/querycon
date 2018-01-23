import React from 'react'

import styles from './text-logo.module.scss'

const TextLogo = () => (
  <div className={styles.textLogo}>
    <img className={styles.img} />

    <span className={styles.text}>QueryCon</span>
  </div>
)

export default TextLogo
