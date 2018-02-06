import React from 'react'

import styles from './prominent-cta.module.scss'

const ProminentCta = ({ heading, href, icon, internal, subheading }) => {
  const target = internal ? '_self' : '_blank'

  return (
    <a className={styles.prominentCta} href={href} target={target}>
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
