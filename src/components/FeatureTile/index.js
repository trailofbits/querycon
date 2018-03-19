import React from 'react'
import Link from 'gatsby-link'

import styles from './feature-tile.module.scss'
import rightArrow from './arrow-right-pink.svg'


const FeatureTile = ({ children, title, url }) => (
  <div className={styles.featureTile}>
    <h3 className={styles.title}>{title}</h3>
    <p>{children}</p>
    { url && <Link to={url} className={styles.learnMoreLink}>Learn More <img src={rightArrow}/></Link>}
  </div>
)

export default FeatureTile
