import React from 'react'

import styles from './paragraph.module.scss'

const Paragraph = props => (
  <div className={styles.contentParagraph}>
    {props.children}
  </div>
)

export default Paragraph
