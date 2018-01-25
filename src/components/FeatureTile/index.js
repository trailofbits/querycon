import React from 'react'

import styles from './feature-tile.module.scss'

const FeatureTile = ({ children, title, url }) => (
  <div className={styles.featureTile}>
    <h3 className={styles.title}>{title}</h3>
    <p>{children}</p>
    <a className={styles.learnMoreLink} href={url}>
      Learn More
      <span className={styles.arrow}>&#10140;</span>
    </a>
  </div>
)

export default FeatureTile
