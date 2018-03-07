import React from 'react'

import styles from './keynote.module.scss'

const Keynote = ({
  children,
  company,
  image,
  image2x,
  image3x,
  name,
  title,
}) => (
  <div className={styles.wrapper}>
    <div className={styles.keynote}>
      <div className={styles.headshot}>
        <img
          alt={name}
          className={styles.headshotImg}
          src={image}
          srcSet={`${image2x} 2x, ${image3x} 3x`}
        />
      </div>

      <div className={styles.info}>
        <div className={styles.name}>
          {name}
          <span className={styles.company}> ({company})</span>
        </div>

        <div className={styles.break} />

        <div className={styles.title}>{title}</div>

        {children}
      </div>
    </div>
  </div>
)

export default Keynote
