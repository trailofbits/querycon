import React from 'react'

import styles from './prominent-cta.module.scss'

const ProminentCta = ({ heading, href, icon, subheading }) => {
  return (
    <a className={styles.prominentCta} href={href} target="_blank">
      <div className={styles.circle}>
        <div className={styles.icon}>
          <img className={styles.iconImg} alt="" src={icon} />
        </div>
      </div>

      <div className={styles.heading}>{heading}</div>
      <div className={styles.subheading}>{subheading}</div>
    </a>
  )
}

export default ProminentCta
