import React from 'react'
import Link from 'gatsby-link'

import rightArrowImage from 'assets/images/right-arrow.svg'

import styles from './feature-tile.module.scss'


const FeatureTile = ({ children, title, url }) => (
  <div className={styles.featureTile}>
    <h3 className={styles.title}>{title}</h3>
    <p>{children}</p>
    {url && (
      <Link to={url} className={styles.learnMoreLink}>
        Learn More <img src={rightArrowImage} alt="Right Arrow" />
      </Link>
    )}
  </div>
)

export default FeatureTile
