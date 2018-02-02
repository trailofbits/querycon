import React from 'react'

import styles from './speaker-tile.module.scss'

const SpeakerTile = ({ company, image, name, title }) => {
  return (
    <div className={styles.speakerTile}>
      <div className={styles.headshot}>
        <img alt={name} className={styles.headshotImg} src={image} />
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.company}>{company}</div>
      <div className={styles.title}>{title}</div>
    </div>
  )
}

export default SpeakerTile
