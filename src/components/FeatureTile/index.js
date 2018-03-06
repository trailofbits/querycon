import React from 'react'

import styles from './feature-tile.module.scss'

const FeatureTile = ({ children, title, _url }) => (
  <div className={styles.featureTile}>
    <h3 className={styles.title}>{title}</h3>
    <p>{children}</p>
  </div>
)

export default FeatureTile
