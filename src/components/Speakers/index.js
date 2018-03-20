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
import imgHeadshotMichaelLynn from '../../pages/headshot-michael-lynn.jpg'
import imgHeadshotMichaelLynn2x from '../../pages/headshot-michael-lynn-2x.jpg'
import imgHeadshotMichaelLynn3x from '../../pages/headshot-michael-lynn-3x.jpg'
import imgHeadshotHenryStamerjohan from '../../pages/headshot-henry-stamerjohan.jpg'
import imgHeadshotHenryStamerjohan2x from '../../pages/headshot-henry-stamerjohan-2x.jpg'
import imgHeadshotHenryStamerjohan3x from '../../pages/headshot-henry-stamerjohan-3x.jpg'
import imgHeadshotMikeArpaia from '../../pages/headshot-mike-arpaia.jpg'
import imgHeadshotMikeArpaia2x from '../../pages/headshot-mike-arpaia-2x.jpg'
import imgHeadshotMikeArpaia3x from '../../pages/headshot-mike-arpaia-3x.jpg'
import imgHeadshotMikeMyers from '../../pages/headshot-mike-myers.jpg'
import imgHeadshotMikeMyers2x from '../../pages/headshot-mike-myers-2x.jpg'
import imgHeadshotMikeMyers3x from '../../pages/headshot-mike-myers-3x.jpg'
import imgHeadshotMitchellGrenier from '../../pages/headshot-mitchell-grenier.jpg'
import imgHeadshotMitchellGrenier2x from '../../pages/headshot-mitchell-grenier-2x.jpg'
import imgHeadshotMitchellGrenier3x from '../../pages/headshot-mitchell-grenier-3x.jpg'
import imgHeadshotTeddyReed from '../../pages/headshot-ted-reed.jpg'
import imgHeadshotTeddyReed2x from '../../pages/headshot-ted-reed-2x.jpg'
import imgHeadshotTeddyReed3x from '../../pages/headshot-ted-reed-3x.jpg'

import styles from '../../pages/program/program.module.scss'


import Speaker from '../Speaker'

const Speakers = ({ id }) => (
  <section id={id}>
      <Speaker
      company="Facebook"
      image={imgHeadshotTeddyReed}
      image2x={imgHeadshotTeddyReed2x}
      image3x={imgHeadshotTeddyReed3x}
      name="Teddy Reed"
      presentationName="The Scary Parts of osquery"
      presentationTopic="Osquery Internals"
      title="Security Engineering Manager"
    >
      <p>
        This talk is meant to be 50% comical and 50% gut-wrenching horror.
        We will cover several of the older and more fragile components within
        osquery. We will highlight several assumptions that have been working
        well but lack testing coverage or rigorous review. This includes
        several potential exceptional edge cases that could be disastrous to
        performance or data integrity. We will conclude with several examples
        of how to make all of osquery more reliable and set up for a bright
        and sunny future!
      </p>
    </Speaker>

    <Speaker
      company="Trail of Bits"
      image={imgHeadshotLaurenPearl}
      image2x={imgHeadshotLaurenPearl2x}
      image3x={imgHeadshotLaurenPearl3x}
      name="Lauren Pearl"
      presentationName="Three Super Features That Could Transform osquery"
      presentationTopic="Osquery Development"
      title="Security Engineer"
    >
      <p>
        Not all features are created equally. Most features improve functionality.
        Some features expand a tool’s ability so completely that the baseline
        product becomes something entirely new. We call these features Super Features.
      </p>
      <p>
        In this talk, we’ll review a user feature wishlist gathered from interviews
        with 5 Silicon Valley tech teams who use osquery. From these, we’ll
        identify the Super Features - features that, if built, would fundamentally
        change the value proposition of osquery for the better. We’ll explain how
        these developments could transform osquery’s power in technical organizations.
      </p>
      <p>
        Finally, we’ll walk through the steps to get there with high-level development
        plans for making these Osquery Super Features a reality.
      </p>
    </Speaker>

    <Speaker
      company="Kolide"
      image={imgHeadshotMikeArpaia}
      image2x={imgHeadshotMikeArpaia2x}
      image3x={imgHeadshotMikeArpaia3x}
      name="Mike Arpaia"
      presentationName="Instrumenting Dynamic Environments with Source Control, Peer Review, and Decentralized Intelligence Distribution"
      presentationTopic="Osquery Tools"
      title="Co-Founder & CTO"
    >
      <p>
        Osquery configurations often start simple and static, but, as the complexity
        of an osquery deployment grows, the level of dynamicism grows to where a complex server
        installation is required to group sets of hosts together and target them for analytics
        and threat hunting.
      </p>

      <p>
        This talk introduces some lessons learned from Kubernetes, a container orchestration
        platform, on how to effectively decouple and manage configurations of interrelated components.
      </p>

      <p>
        We will discuss how to reason about higher level instrumentation objectives and
        share components as decentralized, atomically distributable intelligence.
      </p>

      <p>
        Finally, the open-source ecosystem and established best practices will be
        explored so that attendees can begin implementing this way of managing and
        sharing host instrumentation capabilities and see immediate improvements to
        their instrumentation capabilities.
      </p>
    </Speaker>

    <Speaker
      company="Facebook"
      image={imgHeadshotMitchellGrenier}
      image2x={imgHeadshotMitchellGrenier2x}
      image3x={imgHeadshotMitchellGrenier3x}
      name="Mitchell Grenier"
      presentationName="Catching Everything with osquery Events"
      presentationTopic="Osquery Development"
      title="Security Engineer"
    >
      <p>
        This talk is designed for osquery developers and will be deep-dive into osquery internals.
        The osquery eventing tables, and the internal pubsub framework, make it possible to have osquery record data when
        it happens, not just when you query. We will go over what data already exists, queries that can be built on these
        for instant new detections, and how the framework is implemented so you can build exactly what you need.
      </p>
    </Speaker>

    <Speaker
      company="Facebook"
      image={imgHeadshotMichaelLynn}
      image2x={imgHeadshotMichaelLynn2x}
      image3x={imgHeadshotMichaelLynn3x}
      name="Michael Lynn"
      presentationName="Fact Finding"
      presentationTopic="Osquery Development"
      title="Client Platform Engineer"
    >
      <p>
        The macOS UI provides a large amount of device information - but not
        every interface has a counterpart command-line tool providing access
        o the same details. This talk will focus on using tools like Hopper
        to reverse engineer the code and APIs behind information displays
        you see everyday and how to integrate access to them into your own
        tools.
      </p>
    </Speaker>

    <Speaker
      company="Trail of Bits"
      image={imgHeadshotMikeMyers}
      image2x={imgHeadshotMikeMyers2x}
      image3x={imgHeadshotMikeMyers3x}
      name="Mike Myers"
      presentationName="The Osquery Extensions Skunkworks Project: Unconventional Uses for osquery"
      presentationTopic="Osquery Development"
      title="Security Researcher"
    >
      <p>
        Facebook created osquery with certain guiding principles: don't pry
        into user's data, don't change the state of the system, don't create
        network traffic to third parties. For those that didn't want to play
        by these rules, they created the extension interface. We've begun
        experimenting with what is possible with extensions that would not be
        with mainline osquery: integrating with third-party services, writable
        tables, host-based firewall administration, malware vaccination, and more.
        We will share some of our lessons-learned on the challenges of using
        osquery — originally intended as a read-only information gatherer — as a
        control interface.
      </p>
    </Speaker>

    <Speaker
      company="Apfelwerk GmbH & Co. KG"
      image={imgHeadshotHenryStamerjohan}
      image2x={imgHeadshotHenryStamerjohan2x}
      image3x={imgHeadshotHenryStamerjohan3x}
      name="Henry Stamerjohann"
      otherDescriptor="Zentral co-creator"
      presentationName="Zentral - Osquery & Event Stream Processing into the ElasticStack"
      presentationTopic="Osquery Tools"
      title="Lead Systems Engineer"
    >
      <p>
        Learn about core functions and architecture of Zentral.
        Zentral is a open source hub to process event streams from Osquery and
        other sources into the ElasticStack. Besides support for distinct Osquery
        features like file carving, Zentral provides numerous integrations for
        inventory acquisition and alerting.
      </p>

    </Speaker>

    <Speaker
      company="Palantir"
      image={imgHeadshotChrisLong}
      image2x={imgHeadshotChrisLong2x}
      image3x={imgHeadshotChrisLong3x}
      name="Chris Long"
      presentationName="Practical System Auditing with osquery"
      presentationTopic="Production Osquery"
      title="Security Engineer"
    >
      <p>
        While there are many different ways to audit process executions and
        network events on Linux-based systems, osquery provides a fairly unique
        interface for collecting and filtering audit-based events. However,
        there are some common misconceptions surrounding the audit framework
        and digging through documentation on it can be quite perplexing.
        During this talk we'll cover:
        <ul className={styles.bullets}>
          <li>A basic overview audit framework</li>
          <li>Building a basic osquery auditing configuration</li>
          <li>Fine-tune auditing configurations to minimize performance impact against your systems</li>
        </ul>
      </p>
      <p>
        Palantir currently maintains an osquery deployment consisting of
        thousands of hosts with auditing enabled and collects upwards of 1
        billion process and socket events per day. Join this talk to learn
        how to gain greater visibility into high-value systems, scale an
        auditing deployment, or simply learn more about osquery's auditing
        features.
      </p>
    </Speaker>
  </section>
)

export default Speakers
