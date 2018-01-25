import React from 'react'

import styles from './main-speaker.module.scss'

const MainSpeaker = ({ company, image, name, presentation, title }) => {
  return (
    <div className={styles.mainSpeaker}>
      <div className={styles.headshot}>
        <img alt={name} className={styles.headshot} src={image} />
      </div>

      <div>
        <h2 className={styles.name}>{name}</h2>
        <h3 className={styles.company}>{company}</h3>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.break} />
        <h4 className={styles.presentationHeader}>Presentation</h4>
        <div className={styles.presentation}>{presentation}</div>
      </div>
    </div>
  )
}

export default MainSpeaker

