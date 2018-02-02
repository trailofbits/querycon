import React, { Component } from 'react'
import MediaQuery from 'react-responsive'

import styles from './media-links.module.scss'

const MOBILE_WIDTH = 800

class MediaLinks extends Component {
  render() {
    return (
      <div
        className={styles.preConfLinksCarousel}
        ref={el => (this.carousel = el)}
      >
        <a
          className={styles.preConfLink}
          href="http://www.catster.com/wp-content/uploads/2017/06/small-kitten-meowing.jpg"
          target="_blank"
        >
          <img
            alt=""
            className={styles.preConfLinkImg}
            src="http://www.catster.com/wp-content/uploads/2017/06/small-kitten-meowing.jpg"
          />
          <h4 className={styles.preConfLinkTitle}>
            Incidence Response and Threat Hunting with Osquery
          </h4>
        </a>

        <a
          className={styles.preConfLink}
          href="http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg"
          target="_blank"
        >
          <img
            alt=""
            className={styles.preConfLinkImg}
            src="http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg"
          />
          <h4 className={styles.preConfLinkTitle}>
            Incidence Response and Threat Hunting with Osquery
          </h4>
        </a>

        <a
          className={styles.preConfLink}
          href="http://www.petsworld.in/blog/wp-content/uploads/2014/09/cute-kittens.jpg"
          target="_blank"
        >
          <img
            alt=""
            className={styles.preConfLinkImg}
            src="http://www.petsworld.in/blog/wp-content/uploads/2014/09/cute-kittens.jpg"
          />
          <h4 className={styles.preConfLinkTitle}>
            Incidence Response and Threat Hunting with Osquery
          </h4>
        </a>

        <a
          className={styles.preConfLink}
          href="https://vetstreet.brightspotcdn.com/dims4/default/beb5999/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F00%2Fea%2F576b21fc4f1482d5ff121dc34623%2FNorwegian-Forest-Cat-AP-ZYVRVP-645sm3614.jpg"
          target="_blank"
        >
          <img
            alt=""
            className={styles.preConfLinkImg}
            src="https://vetstreet.brightspotcdn.com/dims4/default/beb5999/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F00%2Fea%2F576b21fc4f1482d5ff121dc34623%2FNorwegian-Forest-Cat-AP-ZYVRVP-645sm3614.jpg"
          />
          <h4 className={styles.preConfLinkTitle}>
            Incidence Response and Threat Hunting with Osquery
          </h4>
        </a>

        <a
          className={styles.preConfLink}
          href="http://www.catster.com/wp-content/uploads/2017/05/cat-eating-food-dish-shutterstock_361821539.jpg"
          target="_blank"
        >
          <img
            alt=""
            className={styles.preConfLinkImg}
            src="http://www.catster.com/wp-content/uploads/2017/05/cat-eating-food-dish-shutterstock_361821539.jpg"
          />
          <h4 className={styles.preConfLinkTitle}>
            Incidence Response and Threat Hunting with Osquery
          </h4>
        </a>
      </div>
    )
  }
}

export default MediaLinks
