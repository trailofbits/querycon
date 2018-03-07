import React from 'react'

import imgHeadshotBenHughes from '../../pages/headshot-ben-hughes.jpg'
import imgHeadshotBenHughes2x from '../../pages/headshot-ben-hughes-2x.jpg'
import imgHeadshotBenHughes3x from '../../pages/headshot-ben-hughes-3x.jpg'
import imgHeadshotChrisLong from '../../pages/headshot-chris-long.jpg'
import imgHeadshotChrisLong2x from '../../pages/headshot-chris-long-2x.jpg'
import imgHeadshotChrisLong3x from '../../pages/headshot-chris-long-3x.jpg'
import imgHeadshotLaurenPearl from '../../pages/headshot-lauren-pearl.jpg'
import imgHeadshotLaurenPearl2x from '../../pages/headshot-lauren-pearl-2x.jpg'
import imgHeadshotLaurenPearl3x from '../../pages/headshot-lauren-pearl-3x.jpg'
import imgHeadshotMikeArpaia from '../../pages/headshot-mike-arpaia.jpg'
import imgHeadshotMikeArpaia2x from '../../pages/headshot-mike-arpaia-2x.jpg'
import imgHeadshotMikeArpaia3x from '../../pages/headshot-mike-arpaia-3x.jpg'
import imgHeadshotMikeMyers from '../../pages/headshot-mike-myers.jpg'
import imgHeadshotMikeMyers2x from '../../pages/headshot-mike-myers-2x.jpg'
import imgHeadshotMikeMyers3x from '../../pages/headshot-mike-myers-3x.jpg'
import imgHeadshotMitchellGrenier from '../../pages/headshot-mitchell-grenier.jpg'
import imgHeadshotMitchellGrenier2x from '../../pages/headshot-mitchell-grenier-2x.jpg'
import imgHeadshotMitchellGrenier3x from '../../pages/headshot-mitchell-grenier-3x.jpg'
import Speaker from '../Speaker'

const Speakers = ({ id }) => (
  <section id={id}>
    <Speaker
      company="Trail of Bits"
      image={imgHeadshotLaurenPearl}
      image2x={imgHeadshotLaurenPearl2x}
      image3x={imgHeadshotLaurenPearl3x}
      name="Lauren Pearl"
      otherDescriptor="avid yoga poser"
      presentationName="This is an example of the speaker's talk title"
      presentationTopic="Topic name"
      title="Lead Security Engineer"
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

    <Speaker
      company="Palantir"
      image={imgHeadshotChrisLong}
      image2x={imgHeadshotChrisLong2x}
      image3x={imgHeadshotChrisLong3x}
      name="Chris Long"
      otherDescriptor="avid yoga poser"
      presentationName="This is an example of the speaker's talk title"
      presentationTopic="Topic name"
      title="Security Engineer"
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

    <Speaker
      company="Stripe"
      image={imgHeadshotBenHughes}
      image2x={imgHeadshotBenHughes2x}
      image3x={imgHeadshotBenHughes3x}
      name="Ben Hughes"
      otherDescriptor="avid yoga poser"
      presentationName="This is an example of the speaker's talk title"
      presentationTopic="Topic name"
      title="Security Engineer"
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

    <Speaker
      company="Trail of Bits"
      image={imgHeadshotMikeMyers}
      image2x={imgHeadshotMikeMyers2x}
      image3x={imgHeadshotMikeMyers3x}
      name="Mike Myers"
      otherDescriptor="avid yoga poser"
      presentationName="This is an example of the speaker's talk title"
      presentationTopic="Topic name"
      title="Security Researcher"
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

    <Speaker
      company="Facebook"
      image={imgHeadshotMitchellGrenier}
      image2x={imgHeadshotMitchellGrenier2x}
      image3x={imgHeadshotMitchellGrenier3x}
      name="Mitchell Grenier"
      otherDescriptor="avid yoga poser"
      presentationName="This is an example of the speaker's talk title"
      presentationTopic="Topic name"
      title="Security Engineer"
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

export default Speakers
