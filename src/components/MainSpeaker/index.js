import React from 'react'
import MediaQuery from 'react-responsive'

import styles from './main-speaker.module.scss'
import { MOBILE_WIDTH } from 'util/constants'

const MainSpeaker = ({ company, image, image2x, image3x, name, title }) => (
  <div className={styles.wrapper}>
    <div className={styles.mainSpeaker}>
      <MediaQuery minWidth={MOBILE_WIDTH + 1}>
        <div className={styles.headshot}>
          <img
            alt={name}
            className={styles.headshotImg}
            src={image}
            srcSet={`${image2x} 2x, ${image3x} 3x`}
          />
        </div>
      </MediaQuery>

      <div>
        <div className={styles.speaker}>
          <MediaQuery maxWidth={MOBILE_WIDTH}>
            <div className={styles.headshot}>
              <img alt={name} className={styles.headshotImg} src={image} />
            </div>
          </MediaQuery>

          <div className={styles.speakerInfo}>
            <h2 className={styles.name}>{name}</h2>
            <h3 className={styles.company}>{company}</h3>
            <h4 className={styles.title}>{title}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default MainSpeaker
