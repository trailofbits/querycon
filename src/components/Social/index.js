import React from 'react'
import styles from './index.module.scss';
import DiningImage from '../../pages/dining.jpg';

const Social = ({ id }) => (
  <section id={id} className={styles.social}>
    <h1>Social Event at Schroeder's</h1>
    <p>
      <a href="http://www.schroederssf.com/" target="_blank">
        <img src={DiningImage} className={styles.primaryImage} />
      </a>
      Kolide will be hosting an after-hours event at {" "}
      <a href="http://www.schroederssf.com/" target="_blank">Schroeder's Restaurant</a> {" "}
      from 5:00pm-8:00pm after the first day of QueryCon, on May 31st.
    </p>
    <p className={styles.socialDescription}>
      Food and beverages will be provided, so come grab a drink, enjoy some hearty
      German-style fare, and hang out with your fellow osquery community.
      Lyft codes will be provided to help get you from the conference venue
      to the restaurant!
    </p>
  </section>
)

export default Social
