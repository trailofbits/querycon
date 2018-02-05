import React from 'react'
import MediaQuery from 'react-responsive'

import styles from './footer.module.scss'

const MOBILE_WIDTH = 800

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <MediaQuery minWidth={MOBILE_WIDTH + 1}>
        <a className={styles.copyright} href="https://kolide.com">
          &copy; Kolide 2018
        </a>
      </MediaQuery>

      <MediaQuery maxWidth={MOBILE_WIDTH}>
        <div className={styles.footerBranding}>QueryCon18</div>
      </MediaQuery>

      <section className={styles.links}>
        <ul>
          <li className={styles.li}>
            <a
              className={styles.registerLink}
              href="https://www.eventbrite.com/edit?eid=42317323253#"
            >
              Register Now
            </a>
          </li>
        </ul>
      </section>

      <section className={styles.links}>
        <ul>
          <li className={styles.li}>
            <a href="#speakers">Speakers</a>
          </li>

          <li className={styles.li}>
            <a href="#location">Venue</a>
          </li>

          <li className={styles.li}>
            <a href="#learning">Learning</a>
          </li>
        </ul>
      </section>

      <MediaQuery maxWidth={MOBILE_WIDTH}>
        <a className={styles.copyright} href="https://kolide.com">
          &copy; Kolide 2018
        </a>
      </MediaQuery>
    </footer>
  )
}

export default Footer
