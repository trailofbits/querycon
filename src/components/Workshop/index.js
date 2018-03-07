import React from 'react'

import imgHeadshotMikeArpaia from '../../pages/headshot-mike-arpaia.jpg'
import imgHeadshotMikeArpaia2x from '../../pages/headshot-mike-arpaia-2x.jpg'
import imgHeadshotMikeArpaia3x from '../../pages/headshot-mike-arpaia-3x.jpg'
import Speaker from '../Speaker'

const Workshop = ({ id }) => (
  <section id={id}>
    <Speaker
      company="Kolide"
      image={imgHeadshotMikeArpaia}
      image2x={imgHeadshotMikeArpaia2x}
      image3x={imgHeadshotMikeArpaia3x}
      name="Mike Arpaia"
      otherDescriptor="avid yoga poser"
      presentationName="This is an example of the speaker's talk title"
      presentationTopic="Topic name"
      title="Co-Founder/CTO"
    >
      <p>
        Here is where they would include an abstract of their talk and relevant
        background information on what they will be speaking about. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
      </p>
    </Speaker>
  </section>
)

export default Workshop
