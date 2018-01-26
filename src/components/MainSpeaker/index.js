import React from 'react'
import MediaQuery from 'react-responsive'

import styles from './main-speaker.module.scss'

const MOBILE_WIDTH = 800

const MainSpeaker = ({ company, image, name, presentation, title }) => {
  return (
    <div className={styles.mainSpeaker}>
      <MediaQuery minWidth={MOBILE_WIDTH + 1}>
        <div className={styles.headshot}>
          <img alt={name} className={styles.headshot} src={image} />
        </div>
      </MediaQuery>

      <div>
        <div className={styles.speaker}>
          <MediaQuery maxWidth={MOBILE_WIDTH}>
            <div className={styles.headshot}>
              <img alt={name} className={styles.headshot} src={image} />
            </div>
          </MediaQuery>

          <div className={styles.speakerInfo}>
            <h2 className={styles.name}>{name}</h2>
            <h3 className={styles.company}>{company}</h3>
            <h4 className={styles.title}>{title}</h4>
          </div>
        </div>

        <div className={styles.break} />
        <h4 className={styles.presentationHeader}>Presentation</h4>
        <div className={styles.presentation}>{presentation}</div>
      </div>
    </div>
  )
}

export default MainSpeaker

