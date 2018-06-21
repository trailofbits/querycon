import React, { Component } from 'react'

import imgBenHughes from './ben-hughes@2x.jpg'
import imgChrisLong from './chris-long@2x.jpg'
import imgHenryStamerjohan from './henry-stamerjohan@2x.jpg'
import imgLaurenPearl from './lauren-pearl@2x.jpg'
import imgMichaelLynn from './michael-lynn@2x.jpg'
import imgMikeMyers from './mike-myers@2x.jpg'
import imgMilanShah from './milan-shah@2x.jpg'
import imgMitchellGrenier from './mitchell-grenier@2x.jpg'
import _imgSamuelKeeley from './samuel-keeley@2x.jpg'
import imgScottLundgren from './scott-lundgren@2x.jpg'
import imgTeddyReed from './teddy-reed@2x.jpg'
import styles from './videos.module.scss'
import { MOBILE_WIDTH } from '../../util/constants'

class Videos extends Component {
  render() {
    return (
      <div
        className={styles.preConfLinksCarousel}
        ref={el => (this.carousel = el)}
      >
        <a
          className={styles.preConfLink}
          href="https://www.youtube.com/watch?v=gSauI5U_Wmc"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="" className={styles.preConfLinkImg} src={imgTeddyReed} />

          <h4 className={styles.preConfLinkTitle}>
            Teddy Reed
            <span className={styles.org}>{` `}(Facebook)</span>
            <span className={styles.title}>The Scary Parts of Osquery</span>
          </h4>
        </a>

        <a
          className={styles.preConfLink}
          href="https://www.youtube.com/watch?v=dzcM7KQZqP8"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="" className={styles.preConfLinkImg} src={imgScottLundgren} />

          <h4 className={styles.preConfLinkTitle}>
            Scott Lundgren
            <span className={styles.org}>{` `}(Carbon Black)</span>
            <span className={styles.title}>
              An {`Outsider's`} Journey to Join the Osquery Community
            </span>
          </h4>
        </a>

        <a
          className={styles.preConfLink}
          href="https://www.youtube.com/watch?v=yFfWv9wAhyA"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="" className={styles.preConfLinkImg} src={imgMitchellGrenier} />

          <h4 className={styles.preConfLinkTitle}>
            Mitchell Grenier
            <span className={styles.org}>{` `}(Facebook)</span>
            <span className={styles.title}>
              Catching Everything with Osquery Events
            </span>
          </h4>
        </a>

        <a
          className={styles.preConfLink}
          href="https://www.youtube.com/watch?v=TG4GzGn7_XI"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="" className={styles.preConfLinkImg} src={imgMilanShah} />

          <h4 className={styles.preConfLinkTitle}>
            Milan Shah
            <span className={styles.org}>{` `}(UpTycs)</span>
            <span className={styles.title}>Osquery and Docker Containers</span>
          </h4>
        </a>

        <a
          className={styles.preConfLink}
          href="https://www.youtube.com/watch?v=g46rjoP18EE"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="" className={styles.preConfLinkImg} src={imgMikeMyers} />

          <h4 className={styles.preConfLinkTitle}>
            Mike Myers
            <span className={styles.org}>{` `}(Trail of Bits)</span>
            <span className={styles.title}>
              Extensions Skunkworks: Unconventional Uses for Osquery
            </span>
          </h4>
        </a>

        <a
          className={styles.preConfLink}
          href="https://www.youtube.com/watch?v=BUClsxF1t3o"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="" className={styles.preConfLinkImg} src={imgMichaelLynn} />

          <h4 className={styles.preConfLinkTitle}>
            Michael Lynn
            <span className={styles.org}>{` `}(Facebook)</span>
            <span className={styles.title}>Fact Finding</span>
          </h4>
        </a>

        <a
          className={styles.preConfLink}
          href="https://www.youtube.com/watch?v=BV6stTyU8gw"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="" className={styles.preConfLinkImg} src={imgLaurenPearl} />

          <h4 className={styles.preConfLinkTitle}>
            Lauren Pearl
            <span className={styles.org}>{` `}(Trail of Bits)</span>
            <span className={styles.title}>
              Three Super Features That Could Transform Osquery
            </span>
          </h4>
        </a>

        <a
          className={styles.preConfLink}
          href="https://www.youtube.com/watch?v=tlvTl6zATe8"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="" className={styles.preConfLinkImg} src={imgHenryStamerjohan} />

          <h4 className={styles.preConfLinkTitle}>
            Henry Stamerjohan
            <span className={styles.org}>{` `}(Zentral)</span>
            <span className={styles.title}>
              Osquery {`&`} Event Stream Processing Into ElasticStack
            </span>
          </h4>
        </a>

        <a
          className={styles.preConfLink}
          href="https://www.youtube.com/watch?v=AIO7mgVt4O8"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="" className={styles.preConfLinkImg} src={imgChrisLong} />

          <h4 className={styles.preConfLinkTitle}>
            Chris Long
            <span className={styles.org}>{` `}(Palantir)</span>
            <span className={styles.title}>
              Practical System Auditing with Osquery
            </span>
          </h4>
        </a>

        <a
          className={styles.preConfLink}
          href="https://www.youtube.com/watch?v=sHWlbHeDaR0"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="" className={styles.preConfLinkImg} src={imgBenHughes} />

          <h4 className={styles.preConfLinkTitle}>
            Ben Hughes
            <span className={styles.org}>{` `}(Stripe)</span>
            <span className={styles.title}>Osquery, He Knows Me</span>
          </h4>
        </a>
      </div>
    )
  }
}

export default Videos
