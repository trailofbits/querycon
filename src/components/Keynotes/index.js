import React from 'react'

import imgHeadshotNickAnderson from '../../pages/headshot-nick-anderson.png'
import imgHeadshotNickAnderson2x from '../../pages/headshot-nick-anderson-2x.png'
import imgHeadshotNickAnderson3x from '../../pages/headshot-nick-anderson-3x.png'
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
      title="Evolving Our Open Source Community"
    >
      <p>
        Over the past two years the Osquery community has increased
        dramatically. Not only have the number of contributions to the agent
        dramatically bumped, so has the number of platforms we support and
        richness of discussions in our community around best leveraging Osquery.
        We'll explore how our community has grown, problems we faced/still face,
        and the directions we're hoping to push the community forward.
      </p>
    </Keynote>
  </section>
)

export default Keynotes
