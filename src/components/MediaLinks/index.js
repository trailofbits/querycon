import React, { Component } from 'react'
import MediaQuery from 'react-responsive'

import imgChrisLongCode from './chris-long-code.png'
import imgMikeSpeaking from './mike-speaking.png'
import imgTelescopeMan from './telescope-man.png'
import imgTrailOfBitsPage from './trail-of-bits-page.png'
import styles from './media-links.module.scss'
import { MOBILE_WIDTH } from '../../util/constants'

class MediaLinks extends Component {
  render() {
    return (
      <div
        className={styles.preConfLinksCarousel}
        ref={el => (this.carousel = el)}
      >
        <a
          className={styles.preConfLink}
          href="https://www.youtube.com/watch?v=bcfg4VLyIHw"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt=""
            className={styles.preConfLinkImg}
            src={imgMikeSpeaking}
          />
          <h4 className={styles.preConfLinkTitle}>
            Introduction to Osquery - Mike Arpaia
          </h4>
        </a>

        <a
          className={styles.preConfLink}
          href="https://blog.kolide.com/monitoring-macos-hosts-with-osquery-ba5dcc83122d"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt=""
            className={styles.preConfLinkImg}
            src={imgTelescopeMan}
          />
          <h4 className={styles.preConfLinkTitle}>
            Monitoring macOS Hosts with Osquery - Zach Wasserman
          </h4>
        </a>

        <a
          className={styles.preConfLink}
          href="https://medium.com/@palantir/osquery-across-the-enterprise-3c3c9d13ec55"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt=""
            className={styles.preConfLinkImg}
            src={imgChrisLongCode}
          />
          <h4 className={styles.preConfLinkTitle}>
            Osquery Across The Enterprise - Chris Long
          </h4>
        </a>

        <a
          className={styles.preConfLink}
          href="https://blog.trailofbits.com/2017/11/09/how-are-teams-currently-using-osquery/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt=""
            className={styles.preConfLinkImg}
            src={imgTrailOfBitsPage}
          />
          <h4 className={styles.preConfLinkTitle}>
            How Are Teams Using Osquery? - Trail of Bits
          </h4>
        </a>
      </div>
    )
  }
}

export default MediaLinks
