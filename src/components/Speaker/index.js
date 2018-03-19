import React from 'react'

import styles from './speaker.module.scss'

const Speaker = ({
  children,
  company,
  image,
  image2x,
  image3x,
  name,
  otherDescriptor,
  presentationName,
  presentationTopic,
  title,
}) => (
  <div className={styles.wrapper}>
    <div className={styles.speaker}>
      <div className={styles.presentationTopic}>
        {presentationTopic}
      </div>

      <div className={styles.presentationName}>
        {presentationName}
      </div>

      {children}

      <div className={styles.speakerInfo}>
        <div className={styles.headshot}>
          <img
            alt={name}
            className={styles.headshotImg}
            src={image}
            srcSet={`${image2x} 2x, ${image3x} 3x`}
          />
        </div>

        <div>
          <div className={styles.name}>{name}</div>
          <div className={styles.title}>
            {title}{` `}
            <span className={styles.company}>@ {company} </span>
            <span className={styles.otherDescriptor}>{otherDescriptor ? `and ${otherDescriptor}` : ""}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Speaker
