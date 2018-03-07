import React from 'react'

import imgHeadshotNickAnderson from '../../pages/headshot-nick-anderson.png'
import imgHeadshotNickAnderson2x from '../../pages/headshot-nick-anderson-2x.png'
import imgHeadshotNickAnderson3x from '../../pages/headshot-nick-anderson-3x.png'
import imgHeadshotRobFry from '../../pages/headshot-rob-fry.jpg'
import imgHeadshotRobFry2x from '../../pages/headshot-rob-fry-2x.jpg'
import imgHeadshotRobFry3x from '../../pages/headshot-rob-fry-3x.jpg'
import imgHeadshotTeddyReed from '../../pages/headshot-ted-reed.jpg'
import imgHeadshotTeddyReed2x from '../../pages/headshot-ted-reed-2x.jpg'
import imgHeadshotTeddyReed3x from '../../pages/headshot-ted-reed-3x.jpg'
import Keynote from '../Keynote'
import styles from './keynotes.module.scss'

const Keynotes = ({ id }) => (
  <section className={styles.keynotes} id={id}>
    <Keynote
      company="Facebook"
      image={imgHeadshotNickAnderson}
      image2x={imgHeadshotNickAnderson2x}
      image3x={imgHeadshotNickAnderson3x}
      name="Nick Anderson"
      title="Osquery: From humble origins, a revolution was born."
    >
      <p>
        Listen as Nick discusses how the Osquery project got started and what
        future lies ahead for the popular open-source project.
      </p>

      <p>
        Nick is {`Facebook's`} Osquery project lead, lives in Seattle where she is
        a Developer Advocate at Google and a member of the Seattle Ruby Brigade.
        Her favorite languages are Ruby and Prolog. In the last three years she
        has become a developer happiness crusader.
      </p>
    </Keynote>

    <div className={styles.separator} />

    <Keynote
      company="Stackrox, Netflix"
      image={imgHeadshotRobFry}
      image2x={imgHeadshotRobFry2x}
      image3x={imgHeadshotRobFry3x}
      name="Rob Fry"
      title="Osquery? Never heard of it..."
    >
      <p>
        Needs new content here heyo!
      </p>

      <p>
        Nick is {`Facebook's`} Osquery project lead, lives in Seattle where she is
        a Developer Advocate at Google and a member of the Seattle Ruby Brigade.
        Her favorite languages are Ruby and Prolog. In the last three years she
        has become a developer happiness crusader.
      </p>
    </Keynote>

    <div className={styles.separator} />

    <Keynote
      company="Facebook"
      image={imgHeadshotTeddyReed}
      image2x={imgHeadshotTeddyReed2x}
      image3x={imgHeadshotTeddyReed3x}
      name="Teddy Reed"
      title="The future of osquery: To Infinity and Beyond!"
    >
      <p>
        Needs new content here heyo!
      </p>

      <p>
        Nick is {`Facebook's`} Osquery project lead, lives in Seattle where she is
        a Developer Advocate at Google and a member of the Seattle Ruby Brigade.
        Her favorite languages are Ruby and Prolog. In the last three years she
        has become a developer happiness crusader.
      </p>
    </Keynote>
  </section>
)

export default Keynotes
