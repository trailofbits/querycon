import React from 'react'
import styles from './index.module.scss';

const Workshop = ({ id }) => (
  <section id={id}>
    <p className={styles.description}>
     <h1>Details Coming Soon</h1>
     Check back later for more details on our Osquery Workshop hosted by
     members of the Osquery community.
    </p>
  </section>
)

export default Workshop
