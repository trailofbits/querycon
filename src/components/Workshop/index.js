import React from 'react'
import styles from './index.module.scss';

const Workshop = ({ id }) => (
  <section id={id}>
    <p className={styles.description}>
     <h1>Community Workshop</h1>
     <p className={styles.workshopDescription}>
        Many of us who attend conferences know that the “hallway track” is
        often the most rewarding part of going to a conference in person.
        Talks are often recorded, and anyone can watch them online, but the
        hallway track is a chance to make once-in-a-lifetime connections, share
        your ideas for a side project with someone else, or get help on a
        hard-to-debug issue from just the right person. It’s where you build
        meaningful relationships, and grow your network. We’re taking the
        hallway track and making it official.
      </p>

      <p className={styles.workshopDescription}>
        Our community workshop will be a half-day event, right after the talks,
        on day two of QueryCon. During the workshop, we’ll form expertly lead
        groups to dive into topics that you’re interested in. Feel free to jump
        around between topics, and enjoy beer and wine with the community while
        you learn.
      </p>

      <p className={styles.workshopDescription}>
        Suggested Topics:
        <ul className={styles.bullets}>
          <li>Logging Pipelines: Using osquery with ELK</li>
          <li>Getting started with TLS</li>
          <li>SQL: Writing your queries to return the right results</li>
          <li>SQL: Writing performant pipelines</li>
          <li>Contributing to osquery: Your first table</li>
          <li>Writing osquery plugins</li>
        </ul>
        Have a topic you’d be interested in? Want to facilitate one of the
        groups? <a className={styles.contactLink} href="mailto:info@querycon.io">Drop us a line!</a>
      </p>
    </p>
  </section>
)

export default Workshop
