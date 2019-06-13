import React from 'react'

import afterPartyImage from 'assets/images/querycon-afterparty-web.jpg'

import styles from './index.module.scss'

const Social = ({ id }) => (
  <section id={id} className={styles.social}>
    <h1>After Party</h1>
    <p>
      Trail of Bits will be hosting an after-hours event at
      <a href="https://www.mailroomnyc.com" rel="noopener noreferrer" target="_blank" style={{marginLeft: 5}}>
        The Mailroom
      </a>, sponsored by <b>Carbon Black</b>.
    </p>
    <p>
      <img className={styles.primaryImage} src={afterPartyImage} alt="" />
    </p>
    <p>
      Join us after the first day of the conference for an after-party with 
      drinks and hors d'oeuvres at <a href="https://www.mailroomnyc.com/">Mailroom</a>, 
      steps away from the conference center. 
    </p>
    <p>
      Opened in 2017, the venue serves a dual purpose as a speakeasy bar and 
      nightclub, as well as an actual mailroom for 
      the <a href="https://www.welive.com/">WeLive</a> in the same building. It 
      features swanky retro decor, delicious food, and creative cocktails
      . <a href="https://www.harpersbazaar.com/culture/travel-dining/a13975550/mailroom-bar/">Harper’s Bazaar</a> is
      reportedly obsessed with it. 
    </p>
    <p>
      Any party animals who want to continue the conversation past 8pm are 
      welcome to stick around at the Mailroom or head to one of many 
      surrounding bars including close-by favorites such 
      as <a href="https://www.deadrabbitnyc.com/">The Dead Rabbit</a> 
      , <a href="https://www.porterhousebrewconyc.com/lovelace/">The Lovelace 
      Cocktail and Gin Bar</a>, or many nice spots with outdoor seating 
      on <a href="http://murphguide.com/neighborhood/stone-street-bars/">Stone Street</a>.
    </p>
  </section>
)

export default Social
