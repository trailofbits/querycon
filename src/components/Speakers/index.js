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
import imgHeadshotSamuelKeeley from '../../pages/headshot-samuel-keeley.jpg'
import imgHeadshotSamuelKeeley2x from '../../pages/headshot-samuel-keeley-2x.jpg'
import imgHeadshotSamuelKeeley3x from '../../pages/headshot-samuel-keeley-3x.jpg'
import imgHeadshotScottLundgren from '../../pages/headshot-scott-lundgren.jpg'
import imgHeadshotScottLundgren2x from '../../pages/headshot-scott-lundgren-2x.jpg'
import imgHeadshotScottLundgren3x from '../../pages/headshot-scott-lundgren-3x.jpg'
import imgHeadshotMilanShah from '../../pages/headshot-milan-shah.jpg'
import imgHeadshotMilanShah2x from '../../pages/headshot-milan-shah-2x.jpg'
import imgHeadshotMilanShah3x from '../../pages/headshot-milan-shah-3x.jpg'
import imgHeadshotForestMonsen from '../../pages/headshot-forest-monsen.jpg'
import imgHeadshotForestMonsen2x from '../../pages/headshot-forest-monsen-2x.jpg'
import imgHeadshotForestMonsen3x from '../../pages/headshot-forest-monsen-3x.jpg'
import imgHeadshotSteffanHaas from '../../pages/headshot-steffan-haas.jpg'
import imgHeadshotSteffanHaas2x from '../../pages/headshot-steffan-haas-2x.jpg'
import imgHeadshotSteffanHaas3x from '../../pages/headshot-steffan-haas-3x.jpg'
import imgHeadshotRobFry from '../../pages/headshot-rob-fry.jpg'
import imgHeadshotRobFry2x from '../../pages/headshot-rob-fry-2x.jpg'
import imgHeadshotRobFry3x from '../../pages/headshot-rob-fry-3x.jpg'

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
      presentationName="The Scary Parts of Osquery"
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
      presentationName="Three Super Features That Could Transform Osquery"
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
        plans for making these osquery Super Features a reality.
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
      presentationName="Catching Everything With Osquery Events"
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
        to the same details. This talk will focus on using tools like Hopper
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
      presentationName="The Osquery Extensions Skunkworks Project: Unconventional Uses for Osquery"
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
        Zentral is a open source hub to process event streams from osquery and
        other sources into the ElasticStack. Besides support for distinct osquery
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
      presentationName="Practical System Auditing with Osquery"
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
          <li>A basic overview of the audit framework</li>
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

    <Speaker
      company="Carbon Black"
      image={imgHeadshotScottLundgren}
      image2x={imgHeadshotScottLundgren2x}
      image3x={imgHeadshotScottLundgren3x}
      name="Scott Lundgren"
      presentationName="An Outsider's Journey to Join the Osquery Community"
      presentationTopic="Osquery Development"
      title="Chief Architect"
    >
      <p>
        Imagine this: You discover osquery and find love at first sight. You have
        experience writing native systems code and ideas about new queries and want to
        do the right thing. A documented journey of an outside dev attempt to
        find his way in the community and make a meaningful contribution.
      </p>
    </Speaker>

    <Speaker
      company="Airbnb"
      image={imgHeadshotSamuelKeeley}
      image2x={imgHeadshotSamuelKeeley2x}
      image3x={imgHeadshotSamuelKeeley3x}
      name="Samuel Keeley"
      presentationName="How I Wrote Crazy Queries to Find Crazy Software Vulnerabilities"
      presentationTopic="Osquery Development"
      title="Security Engineer"
    >
      <p>
        Sometimes you discover an issue with software on your Mac which should
        be considered a vulnerability and want to know more about it.
        Does it affect other software? Does it affect other Macs in my fleet?
        How serious is this problem? How can I fix it?
      </p>

      <p>
        In this case, the issue is a vulnerability which is common to a large
        number of third party software packages for the Mac. osquery’s stock
        packs might give us some information, but to truly find all of the
        cases we must craft a complex query to run locally. There will be JOINs.
        There will be ORs. There will be substations.
      </p>
    </Speaker>

    <Speaker
      company="Uptycs"
      image={imgHeadshotMilanShah}
      image2x={imgHeadshotMilanShah2x}
      image3x={imgHeadshotMilanShah3x}
      name="Milan Shah"
      presentationName="Osquery and Docker Containers"
      presentationTopic="Production Osquery"
      title="Co-Founder and CTO"
    >
      <p>
        In the past, osquery had major limitations in support for providing
        visibility into Docker containers. With the recent addition of 14
        Docker related tables in osquery, new opportunities exist to address
        major use cases around resource optimization, intrusion detection
        and compliance for Docker environments. Combined with information
        from Kubernetes and SWARM – osquery can now help provide visibility
        across a containerized application.
      </p>

      <p>
        In this talk, we will explore
        the recent Docker table additions to osquery, expose existing
        limitations to help guide future osquery developments and discuss the
        growing implications of osquery in a serverless world. Attendees will
        leave this session with an understanding of whether or not osquery can
        meet their needs for securing and monitoring a Docker container
        environment.
      </p>
    </Speaker>

    <Speaker
      company="Netflix"
      image={imgHeadshotForestMonsen}
      image2x={imgHeadshotForestMonsen2x}
      image3x={imgHeadshotForestMonsen3x}
      name="Forest Monsen"
      presentationName="An Osquery-Based Differencing Engine for Incident Response"
      presentationTopic="Osquery Tools"
      title="Senior Security Engineer"
    >
      <p>
        During a security incident on your cloud architecture, how far have
        attackers penetrated? How many instances have they touched, and
        what have they done there? Diffy will help. Using osquery, and
        a selection of simple differencing and more sophisticated clustering
        methods, Diffy will quickly point you to those instances requiring
        further digital forensics actions.
      </p>
    </Speaker>

    <Speaker
      company="University of Hamburg"
      image={imgHeadshotSteffanHaas}
      image2x={imgHeadshotSteffanHaas2x}
      image3x={imgHeadshotSteffanHaas3x}
      name="Steffen Haas"
      presentationName="Bro-Osquery"
      presentationTopic="Osquery Tools"
      title="Security Researcher and PhD Student"
    >
      <p>
        Osquery comes with a powerful SQL abstractions layer to query hosts for
        various information that can be leveraged e.g. for network security.
        In standard deployment however, the hosts simply execute a statically
        defined schedule of queries, whose results might be useful for later
        analysis. Logs are forwarded to a central storage and can then be processed
        via arbitrary additional tools. With bro-osquery, we go beyond
        his standard use case with respect to several aspects.
      </p>

      <p>
        The intention of bro-osquery is to collect host and network data by a common
        platform and to provide the ability to correlate them for network monitoring
        and intrusion detection. When monitoring either hosts or the network alone,
        the other one is a blind spot in your monitoring. But when monitoring both,
        information from hosts and network can perfectly complement each other.
        With their correlation, you gain more detailed knowledge about the
        activities of hosts and achieve a better visibility on the complete
        network infrastructure. The principle of correlation is to link host
        information for processes that emit traffic with network information
        for the corresponding packets.
      </p>

      <p>
        In bro-osquery we implement this concept for the host monitor osquery and
        the Bro network IDS. By establishing a bi-directional publish-subscribe
        communication between osquery hosts and Bro, they can directly exchange
        data, i.e., SQL queries and their results. We provide a framework of Bro
        scripts that allows to run custom queries against all, individuals,
        or specific groups of hosts. Bro dynamically controls the query schedule
        of the hosts, retrieves and processes the corresponding data, and it
        can even asynchronously query hosts on demand for additional data.
      </p>
    </Speaker>

    <Speaker
      company="Stripe"
      image={imgHeadshotBenHughes}
      image2x={imgHeadshotBenHughes2x}
      image3x={imgHeadshotBenHughes3x}
      name="Ben Hughes"
      presentationName="Osquery, He Knows Me"
      presentationTopic="Production Osquery"
      title="Security Engineer"
    >
      <p>
        This talk, aimed at everyone, highlights the journey from before
        Osquery in my time with the Etsy security team, and some of the
        tooling and problems we faced. The wrong decisions I've made, so you
        can learn from my foolish hubris. To a number of thousand deployment
        of Osquery (and fleet and some not so fleet) at Stripe.
      </p>
    </Speaker>

    <Speaker
      company="JASK"
      image={imgHeadshotRobFry}
      image2x={imgHeadshotRobFry2x}
      image3x={imgHeadshotRobFry3x}
      name="Rob Fry"
      presentationName="SOC, aka Throw More People at the Problem"
      presentationTopic="People vs Tools"
      title="VP of Engineering"
    >
      <p>
        The 'age of the API', security orchestration, big data & ML have all
        come and gone, but SOCs are still outmanned and outgunned. There is
        now an ability to integrate systems, store large amounts of data
        and leverage algorithms to do what a SOC analyst does with machine
        speed, but how does a company leverage this data and these
        capabilities? Come see a history of these technologies applied
        to security and lessons learned on how to apply them.
      </p>
    </Speaker>


  </section>
)

export default Speakers
