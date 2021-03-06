import React from 'react'
import styles from './index.module.scss'

const Workshop = ({ id }) => (
  <section className={styles.workshop} id={id}>
    <h1>Community Workshop</h1>
    <p>
      Many of us who attend conferences know that the “hallway track” is often
      the most rewarding part of going to a conference in person. Talks are
      often recorded, and anyone can watch them online, but the hallway track is
      a chance to make once-in-a-lifetime connections, share your ideas for a
      side project with someone else, or get help on a hard-to-debug issue from
      just the right person. It’s where you build meaningful relationships, and
      grow your network. We’re taking the hallway track and making it official.
    </p>

    <p>
      Our community workshop will be a half-day event, right after the talks, on
      day two of QueryCon. During the workshop, we’ll form expertly lead groups
      to dive into topics that you’re interested in. Feel free to jump around
      between topics, and enjoy beer and wine with the community while you
      learn.
    </p>

    <p>Suggested Topics:</p>

    <ul className={styles.bullets}>
      <li>Contributing to osquery: your first table</li>
      <li>Writing osquery extensions</li>
      <li>Planning the roadmap for osql</li>
      <li>Security testing osquery</li>
      <li>Logging pipelines: using osquery with ELK</li>
      <li>Getting started with TLS</li>
      <li>SQL: writing your queries to return the right results</li>
      <li>SQL: writing performant pipelines</li>
    </ul>

    <p>
      Have a topic you’d be interested in? Want to facilitate one of the groups?{' '}
      <a className={styles.contactLink} href="mailto:mike.myers@trailofbits.com">
        Drop us a line!
      </a>
    </p>
  </section>
)

export default Workshop
