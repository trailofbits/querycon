import React from 'react'

import afterPartyImage from 'assets/images/querycon-afterparty-web.jpg'

import styles from './index.module.scss'

const Social = ({ id }) => (
  <section id={id} className={styles.social}>
    <h1>After Party</h1>
    <p>
      Trail of Bits will be hosting an after-hours event at
      <a href="https://www.mailroomnyc.com" rel="noopener noreferrer" target="_blank" style={{marginLeft: 5}}>
        The Mailroom
      </a>.
      <img className={styles.primaryImage} src={afterPartyImage} alt="" />
    </p>
  </section>
)

export default Social
