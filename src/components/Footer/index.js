import React from 'react'
import Link from 'gatsby-link'
import MediaQuery from 'react-responsive'

import styles from './footer.module.scss'
import { MOBILE_WIDTH } from '../../util/constants'

const Meta = () => (
  <div className={styles.meta}>
    <a className={styles.metaText} href="https://www.trailofbits.com">
      &copy; Trail of Bits 2019
    </a>

    {/* TODO: Change with other copyrights if necessary}
    <div className={styles.metaText}>
      Drone footage used with permission from{` `}
      <a
        href="https://www.youtube.com/channel/UC2rFASLn1FmCYqyPgxinNNw"
        rel="noopener noreferrer"
        target="_blank"
      >
        Kendal Omdahl
      </a>
    </div>
    {*/}
  </div>
)

const Footer = () => (
  <footer className={styles.footer}>
    <MediaQuery minWidth={MOBILE_WIDTH + 1}>
      <Meta />
    </MediaQuery>

    <MediaQuery maxWidth={MOBILE_WIDTH}>
      <div className={styles.footerBranding}>QueryCon19</div>
    </MediaQuery>

    <section className={styles.links}>
      <ul>
        <li className={styles.li}>
          <a
            className={styles.registerLink}
            href="https://www.eventbrite.com/e/querycon-2019-tickets-59900912241"
          >
            Register Now
          </a>
        </li>
      </ul>
    </section>


    <section className={styles.links}>
      <ul>
        <li className={styles.li}>
          <Link to="/#speakers">Speakers</Link>
        </li>

        <li className={styles.li}>
          <Link to="/#location">Venue</Link>
        </li>

        <li className={styles.li}>
          <Link to="/#learning">Learning</Link>
        </li>

        <li className={styles.li}>
          <Link to="/conduct">Conduct</Link>
        </li>

        <li className={styles.li}>
          <Link to="/faq">FAQs</Link>
        </li>
      </ul>
    </section>

    <MediaQuery maxWidth={MOBILE_WIDTH}>
      <Meta />
    </MediaQuery>
  </footer>
)

export default Footer
