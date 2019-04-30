import React from 'react'
import styles from './index.module.scss';
import DiningImage from '../../pages/dining.jpg';

const Social = ({ id }) => (
  <section id={id} className={styles.social}
  >
  <h1>Social Event info: Coming Soon!</h1>
  {/* TODO: Update when we firm up the 2019 afterparty plan}
    <h1>Social Event at {`Schroeder's`}</h1>
    <p>
      <a href="http://www.schroederssf.com/" rel="noopener noreferrer" target="_blank">
        <img alt="" src={DiningImage} className={styles.primaryImage} />
      </a>
      Trail of Bits will be hosting an after-hours event at {" "}
      <a href="http://www.schroederssf.com/" rel="noopener noreferrer" target="_blank">{`Schroeder's`} Restaurant</a> {" "}
      , sponsored by Carbon Black, from 5:00pm-8:00pm after the first day of QueryCon, on June 20th.
    </p>
    <p className={styles.socialDescription}>
      Food and beverages will be provided, so come grab a drink, enjoy some hearty
      German-style fare, and hang out with your fellow osquery community.
      Lyft codes will be provided to help get you from the conference venue
      to the restaurant!
    </p>
  {*/}
  </section>
)

export default Social
