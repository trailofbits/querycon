import React from 'react'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>&copy; Kolide 2018</div>

      <section className={styles.openSourceLinks}>
        <h3 className={styles.header}>Open Source</h3>

        <ul>
          <li className={styles.li}>
            <a href="https://kolide.com/launcher">Kolide Launcher</a>
          </li>

          <li className={styles.li}>
            <a href="https://kolide.com/fleet">Kolide Fleet (On Prem)</a>
          </li>
        </ul>
      </section>

      <section className={styles.links}>
        <h3 className={styles.header}>Company</h3>

        <ul>
          <li className={styles.li}>
            <a href="https://kolide.com/company">About Us</a>
          </li>

          <li className={styles.li}>
            <a href="https://careers.jobscore.com/careers/kolide">Jobs</a>
          </li>

          <li className={styles.li}>
            <a href="https://blog.kolide.com">Blog</a>
          </li>
        </ul>
      </section>

      <section className={styles.links}>
        <h3 className={styles.header}>Resources</h3>

        <ul>
          <li className={styles.li}>
            <a href="mailto:support@kolide.com">Support</a>
          </li>

          <li className={styles.li}>
            <a href="https://kolide.com/contact">Contact</a>
          </li>

          <li className={styles.li}>
            <a href="https://kolide.com/privacy-policy">Privacy Policy</a>
          </li>

          <li className={styles.li}>
            <a href="https://kolide.com/terms">Terms</a>
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer
