import React from 'react'

import imgHeadshotStefanoBonicatti from '../../pages/headshot-stefano-bonicatti.jpg'
import imgHeadshotStefanoBonicatti2x from '../../pages/headshot-stefano-bonicatti-2x.jpg'
import imgHeadshotStefanoBonicatti3x from '../../pages/headshot-stefano-bonicatti-3x.jpg'
import imgHeadshotAlessandroGario from '../../pages/headshot-alessandro-gario.jpg'
import imgHeadshotAlessandroGario2x from '../../pages/headshot-alessandro-gario-2x.jpg'
import imgHeadshotAlessandroGario3x from '../../pages/headshot-alessandro-gario-3x.jpg'
import imgHeadshotZachWasserman from '../../pages/headshot-zach-wasserman.jpg'
import imgHeadshotZachWasserman2x from '../../pages/headshot-zach-wasserman-2x.jpg'
import imgHeadshotZachWasserman3x from '../../pages/headshot-zach-wasserman-3x.jpg'
import imgHeadshotVictorVrantchan from '../../pages/headshot-victor-vrantchan.jpg'
import imgHeadshotVictorVrantchan2x from '../../pages/headshot-victor-vrantchan-2x.jpg'
import imgHeadshotVictorVrantchan3x from '../../pages/headshot-victor-vrantchan-3x.jpg'
import imgHeadshotJasonMeller from '../../pages/headshot-jason-meller.png'
import imgHeadshotJasonMeller2x from '../../pages/headshot-jason-meller-2x.png'
import imgHeadshotJasonMeller3x from '../../pages/headshot-jason-meller-3x.png'
import imgHeadshotFritzIfertMiller from '../../pages/headshot-fritz-ifert-miller.jpg'
import imgHeadshotFritzIfertMiller2x from '../../pages/headshot-fritz-ifert-miller-2x.jpg'
import imgHeadshotFritzIfertMiller3x from '../../pages/headshot-fritz-ifert-miller-3x.jpg'
import imgHeadshotTaniaMcCormack from '../../pages/headshot-tania-mccormack.png'
import imgHeadshotTaniaMcCormack2x from '../../pages/headshot-tania-mccormack-2x.png'
import imgHeadshotTaniaMcCormack3x from '../../pages/headshot-tania-mccormack-3x.png'
import imgHeadshotJonNelson from '../../pages/headshot-jon-nelson.jpg'
import imgHeadshotJonNelson2x from '../../pages/headshot-jon-nelson-2x.jpg'
import imgHeadshotJonNelson3x from '../../pages/headshot-jon-nelson-3x.jpg'
import imgHeadshotJosephSokolMargolis from '../../pages/headshot-joseph-sokol-margolis.jpg'
import imgHeadshotJosephSokolMargolis2x from '../../pages/headshot-joseph-sokol-margolis-2x.jpg'
import imgHeadshotJosephSokolMargolis3x from '../../pages/headshot-joseph-sokol-margolis-3x.jpg'
{/* TODO: Update as more of 2019's speakers become known}
Ben Hughes hasn't worked in the osquery space any longer and is not attending
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
Mike Arpaia wanted out of the osquery project and is not attending
import imgHeadshotMikeMyers from '../../pages/headshot-mike-myers.jpg'
import imgHeadshotMikeMyers2x from '../../pages/headshot-mike-myers-2x.jpg'
import imgHeadshotMikeMyers3x from '../../pages/headshot-mike-myers-3x.jpg'
import imgHeadshotMitchellGrenier from '../../pages/headshot-mitchell-grenier.jpg'
import imgHeadshotMitchellGrenier2x from '../../pages/headshot-mitchell-grenier-2x.jpg'
import imgHeadshotMitchellGrenier3x from '../../pages/headshot-mitchell-grenier-3x.jpg'
Nick Anderson can't attend this year because of a conflict
Teddy Reed no longer works on the project, he says
import imgHeadshotSamuelKeeley from '../../pages/headshot-samuel-keeley.jpg'
import imgHeadshotSamuelKeeley2x from '../../pages/headshot-samuel-keeley-2x.jpg'
import imgHeadshotSamuelKeeley3x from '../../pages/headshot-samuel-keeley-3x.jpg'
import imgHeadshotScottLundgren from '../../pages/headshot-scott-lundgren.jpg'
import imgHeadshotScottLundgren2x from '../../pages/headshot-scott-lundgren-2x.jpg'
import imgHeadshotScottLundgren3x from '../../pages/headshot-scott-lundgren-3x.jpg'
Milan Shah is blacklisted
import imgHeadshotForestMonsen from '../../pages/headshot-forest-monsen.jpg'
import imgHeadshotForestMonsen2x from '../../pages/headshot-forest-monsen-2x.jpg'
import imgHeadshotForestMonsen3x from '../../pages/headshot-forest-monsen-3x.jpg'
import imgHeadshotSteffanHaas from '../../pages/headshot-steffan-haas.jpg'
import imgHeadshotSteffanHaas2x from '../../pages/headshot-steffan-haas-2x.jpg'
import imgHeadshotSteffanHaas3x from '../../pages/headshot-steffan-haas-3x.jpg'
import imgHeadshotRobFry from '../../pages/headshot-rob-fry.jpg'
import imgHeadshotRobFry2x from '../../pages/headshot-rob-fry-2x.jpg'
import imgHeadshotRobFry3x from '../../pages/headshot-rob-fry-3x.jpg'
{*/}

import styles from '../../pages/program/program.module.scss'

import Speaker from '../Speaker'

const Speakers = ({ id }) => (
  <section id={id}>
     <Speaker
      company="Trail of Bits"
      image={imgHeadshotStefanoBonicatti}
      image2x={imgHeadshotStefanoBonicatti2x}
      image3x={imgHeadshotStefanoBonicatti3x}
      name="Stefano Bonicatti"
      presentationName="osql, the community-oriented osquery fork"
      presentationTopic="osquery development"
    >
      <p>
      osql is a community-oriented fork of osquery. Its goals are making 
      the development process more open and predictable, reviewing and 
      accepting community contributions more quickly, and restoring the
      {` community’s`} confidence and direct participation in the osquery project. 
      In this talk, we discuss how we intend to maintain a successful community 
      fork of a major open-source project.
      </p>
    </Speaker>
    <Speaker
      company="Trail of Bits"
      image={imgHeadshotAlessandroGario}
      image2x={imgHeadshotAlessandroGario2x}
      image3x={imgHeadshotAlessandroGario3x}
      name="Alessandro Gario"
      presentationName="The history of Linux security event monitoring with osquery"
      presentationTopic="osquery development"
    >
      <p>
      This talk introduces security event monitoring on Linux, and our lessons 
      learned from attempts to implement it within osquery. Our first experience 
      with osquery event monitoring was rewriting its use of Auditd. In order to 
      capture events within containers, we next implemented an event publisher 
      based on eBPF. We discovered what works, what {`doesn’t`}, and some paths 
      forward.
      </p>
    </Speaker>


    <Speaker
      company="Dactiv LLC"
      image={imgHeadshotZachWasserman}
      image2x={imgHeadshotZachWasserman2x}
      image3x={imgHeadshotZachWasserman3x}
      name="Zach Wasserman"
      presentationName="10 Pitfalls on the Path to Osquery Bliss"
      presentationTopic="Production osquery"
    >
      <p>
      Osquery is a powerful and intuitive tool, but everything is not always as 
      it seems. In this talk we will demonstrate 10 gotchas that can lead to 
      unexpected results, and explain how to avoid them. If you have used osquery, 
      you have likely stumbled upon some of these. If not yet, you will.

      This talk will dive into 10 common issues that new (and experienced) osquery 
      users run into. In the format of interactive demos, we will explore these 
      problems and the technical explanations underlying them. All osquery users 
      will benefit from a greater understanding of how to work with the osquery 
      internals to retrieve accurate, timely results.
      <ul className={styles.bullets}>
        <li>Where did my results go (1)? Running queries as user vs. root.</li>
        <li>Where did my results go (2)? The effect of table order on JOINs.</li>
        <li>Dude, {`where’s`} my SHA1? Hashing big files with read_max flag.</li>
        <li>Why does this query work in osqueryd but not osqueryi? JSON escaping and queries.</li>
        <li>Why {`isn’t`} my config respected? CLI flags vs. config options.</li>
        <li>Why {`didn’t`} the query run? Understanding schedule intervals in osquery.</li>
        <li>Where are my events (1)? Osqueryd and osqueryi independence.</li>
        <li>Where are my events (2)? Tuning event expiration flags.</li>
        <li>Where are my events (3)? Checking event publisher status with osquery_events.</li>
        <li>Why is osquery eating my CPU? Identifying expensive queries.</li>
      </ul>
      </p>
    </Speaker>

    <Speaker
      company="Google"
      image={imgHeadshotVictorVrantchan}
      image2x={imgHeadshotVictorVrantchan2x}
      image3x={imgHeadshotVictorVrantchan3x}
      name="Victor Vrantchan"
      presentationName="All you can do with extensions"
      presentationTopic="osquery development"
    >
      <p>
      Do you need to send your osquery logs to a custom backend? Is your current 
      data pipeline a mess? Need to add a new table? Intimidated by C++? {`Let’s `}
      write an osquery extension! Find out how to take advantage of {`osquery’s `}
      powerful plugin interface to make osquery work in your environment.
      </p>
      <p>
      In this talk, we will teach advanced users how they can utilize plugins 
      to integrate osquery with their existing logging infrastructure, and 
      add any missing features. We will target the Go SDK mostly, but will 
      describe the other supported languages and differences in the talk.
      </p>
    </Speaker>

    <Speaker
      company="Kolide"
      image={imgHeadshotJasonMeller}
      image2x={imgHeadshotJasonMeller2x}
      image3x={imgHeadshotJasonMeller3x}
      name="Jason Meller"
      presentationName="User Focused Security & Osquery"
      presentationTopic="Keynote"
      title="Co-Founder & CEO"
    >
      <p>
      User-Focused Security is an IT/Security methodology that is being rapidly 
      adopted by {`today's`} fastest growing companies and technical teams. The 
      term, coined by Netflix in 2017, describes a program that discourages 
      locking-down devices in favor of transparently communicating your 
      security policy to your users and giving them the tools to ensure they 
      are compliant.

      With a little bit of ingenuity and time, Osquery is the perfect tool to 
      build your own User-Focused Security program. In this talk, Jason Meller 
      will discuss both the technical and human lessons Kolide learned building 
      User-Focused experience on top of Osquery and Slack. After this talk, 
      you should have all the information you need to build and test-pilot your 
      own User-Focused security program and empower your users to take a more 
      active role in the security of their organization.
      </p>
    </Speaker>

    <Speaker
      company="Kolide"
      image={imgHeadshotFritzIfertMiller}
      image2x={imgHeadshotFritzIfertMiller2x}
      image3x={imgHeadshotFritzIfertMiller3x}
      name="Fritz Ifert-Miller"
      presentationName="Using macOS Spotlight and Osquery to Prevent Data Breaches"
      presentationTopic="Production osquery"
      title="UX"
    >
      <p>
      For those of us on Macs, Spotlight is a critical operating system feature 
      we rely on daily to find the files we need littered throughout our hard 
      drives. Despite its usefulness in our daily lives, very few security 
      products take advantage of this incredible index of information to find 
      security risks across our device fleet. In this talk, Fritz Ifert-Miller 
      will walk you through {`Osquery's`} mdfind virtual table, teach you 
      {`Spotlight's`} advanced search syntax, and surprise you with the breadth 
      and depth of information you can uncover. The talk will cover practical 
      use-cases and features Kolide has built on top of this table to help our 
      users discover and eliminate potential sources of data breaches.
      </p>
    </Speaker>

    <Speaker
      company="Kolide"
      image={imgHeadshotJosephSokolMargolis}
      image2x={imgHeadshotJosephSokolMargolis2x}
      image3x={imgHeadshotJosephSokolMargolis3x}
      name="Joseph Sokol-Margolis"
      presentationName="Building and Distribution: The Kolide Launcher for Osquery"
      presentationTopic="osquery Development"
      title="Site Reliability Engineer"
    >
      <p>
      An often overlooked but necessary part of a production Osquery deployment 
      is generating platform native packages and installers. This process can 
      be incredibly challenging, as each operating system has its own idioms 
      and tooling for creating installers, different systems for maintaining 
      persistence through restarts, and distinct processes for code signing.

      To make this easier for our customers, Kolide created The Kolide Launcher 
      as an open source project aimed at removing the hurdles of installing, 
      updating, and using Osquery at scale. 

      In this talk, Joseph will describe Kolide {`Launcher’s`} build process, 
      its approach to multi-format packaging, how to build and debug a Windows 
      service, and several lessons learned after one hundred thousand builds.
      </p>
    </Speaker>

    <Speaker
      company="Carbon Black"
      image={imgHeadshotTaniaMcCormack}
      image2x={imgHeadshotTaniaMcCormack2x}
      image3x={imgHeadshotTaniaMcCormack3x}
      name="Tania McCormack"
      presentationName="Taking Osquery to the Mainstream to Benefit Us All"
      presentationTopic="Production osquery"
      title="Senior Product Manager"
    >
      <p>
      From Carbon Black to Trail of Bits to Kolide, there are now a variety of 
      security vendors interested in making Osquery more accessible for 
      security teams in corporate environments. {`We’ll`} take a look at the 
      trends {`we’ve`} come across in the last 18 months that could remove 
      some commons barriers of Osquery management, and lead a discussion around 
      what else can be done to get more people using and contributing back to 
      this project.
      </p>
    </Speaker>

    <Speaker
      company="Carbon Black"
      image={imgHeadshotJonNelson}
      image2x={imgHeadshotJonNelson2x}
      image3x={imgHeadshotJonNelson3x}
      name="Jon Nelson"
      presentationName="Using Queries as Building Blocks to Support Your Security Framework"
      presentationTopic="Production osquery"
      title="Senior Systems Engineer"
    >
      <p>
      Teams often lean on standardized third-party security frameworks as the 
      blueprint to ensure the thoroughness of their coverage and efficient use 
      of their limited resources. In this session, {`we’ll`} walk through our 
      process for identifying and grouping specific osquery tables to fill in 
      the gaps within the frameworks your organization subscribes to, whether 
      {`that’s`} NIST, MITRE {`ATT&CK`}, or industry-based regulations.
      </p>
    </Speaker>

  {/* TODO: Update as more of 2019's speakers become known}
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
        there are some common misconceptions surrounding the audit framework and
        digging through documentation on it can be quite perplexing. During this
        talk {`we'll`} cover:
      </p>

      <ul className={styles.bullets}>
        <li>A basic overview of the audit framework</li>
        <li>Building a basic osquery auditing configuration</li>
        <li>
          Fine-tune auditing configurations to minimize performance impact
          against your systems
        </li>
      </ul>

      <p>
        Palantir currently maintains an osquery deployment consisting of
        thousands of hosts with auditing enabled and collects upwards of 1
        billion process and socket events per day. Join this talk to learn how
        to gain greater visibility into high-value systems, scale an auditing
        deployment, or simply learn more about {`osquery's`} auditing features.
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
        attackers penetrated? How many instances have they touched, and what
        have they done there? Diffy will help. Using osquery, and a selection of
        simple differencing and more sophisticated clustering methods, Diffy
        will quickly point you to those instances requiring further digital
        forensics actions.
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
        every interface has a counterpart command-line tool providing access to
        the same details. This talk will focus on using tools like Hopper to
        reverse engineer the code and APIs behind information displays you see
        everyday and how to integrate access to them into your own tools.
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
        various information that can be leveraged e.g. for network security. In
        standard deployment however, the hosts simply execute a statically
        defined schedule of queries, whose results might be useful for later
        analysis. Logs are forwarded to a central storage and can then be
        processed via arbitrary additional tools. With bro-osquery, we go beyond
        his standard use case with respect to several aspects.
      </p>

      <p>
        The intention of bro-osquery is to collect host and network data by a
        common platform and to provide the ability to correlate them for network
        monitoring and intrusion detection. When monitoring either hosts or the
        network alone, the other one is a blind spot in your monitoring. But
        when monitoring both, information from hosts and network can perfectly
        complement each other. With their correlation, you gain more detailed
        knowledge about the activities of hosts and achieve a better visibility
        on the complete network infrastructure. The principle of correlation is
        to link host information for processes that emit traffic with network
        information for the corresponding packets.
      </p>

      <p>
        In bro-osquery we implement this concept for the host monitor osquery
        and the Bro network IDS. By establishing a bi-directional
        publish-subscribe communication between osquery hosts and Bro, they can
        directly exchange data, i.e., SQL queries and their results. We provide
        a framework of Bro scripts that allows to run custom queries against
        all, individuals, or specific groups of hosts. Bro dynamically controls
        the query schedule of the hosts, retrieves and processes the
        corresponding data, and it can even asynchronously query hosts on demand
        for additional data.
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
        Not all features are created equally. Most features improve
        functionality. Some features expand a tool’s ability so completely that
        the baseline product becomes something entirely new. We call these
        features Super Features.
      </p>
      <p>
        In this talk, we’ll review a user feature wishlist gathered from
        interviews with 5 Silicon Valley tech teams who use osquery. From these,
        we’ll identify the Super Features - features that, if built, would
        fundamentally change the value proposition of osquery for the better.
        We’ll explain how these developments could transform osquery’s power in
        technical organizations.
      </p>
      <p>
        Finally, we’ll walk through the steps to get there with high-level
        development plans for making these osquery Super Features a reality.
      </p>
    </Speaker>

    <Speaker
      company="Airbnb"
      image={imgHeadshotSamuelKeeley}
      image2x={imgHeadshotSamuelKeeley2x}
      image3x={imgHeadshotSamuelKeeley3x}
      name="Samuel Keeley"
      presentationName="The power of SQL: Complex queries at your fingertips"
      presentationTopic="Osquery Development"
      title="Security Engineer"
    >
      <p>
        Out of the box, osquery comes with many tables covering a wide array of
        information. When getting started, you might write queries against these
        tables to reveal specific information about services, files,
        applications, or similar that can be parsed with a tool like Zentral or
        Streamalert. However, these indvidual results might not paint the whole
        picture about the state of your fleet, especially if there are multiple
        conditions which need to be met and checked.
      </p>

      <p>
        By deeply diving into the power of SQL syntax we can make use of
        multiple tables and queries at the same time to find answers to complex
        questions, such as identifying software misconfigurations which lead to
        security vulnerabilties. Instead of relying solely on basic results and
        having to piece together data on the backend, we can use osquery to
        directly find complex state of processes, files, and other system states
        which are in need of remediation. The SQL interface for osquery is a
        unique one, but we will use it to find information which no other tool
        could give us in a simple way, and we will do it in just one (long)
        line.
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
        Learn about core functions and architecture of Zentral. Zentral is a
        open source hub to process event streams from osquery and other sources
        into the ElasticStack. Besides support for distinct osquery features
        like file carving, Zentral provides numerous integrations for inventory
        acquisition and alerting.
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
        Imagine this: You discover osquery and find love at first sight. You
        have experience writing native systems code and ideas about new queries
        and want to do the right thing. A documented journey of an outside dev
        attempt to find his way in the community and make a meaningful
        contribution.
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
        The {"age of the API"}, security orchestration, big data & ML have all
        come and gone, but SOCs are still outmanned and outgunned. There is now
        an ability to integrate systems, store large amounts of data and
        leverage algorithms to do what a SOC analyst does with machine speed,
        but how does a company leverage this data and these capabilities? Come
        see a history of these technologies applied to security and lessons
        learned on how to apply them.
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
        Facebook created osquery with certain guiding principles: {`don't`} pry into
        {`user's`} data, {`don't`} change the state of the system, {`don't`} create network
        traffic to third parties. For those that {`didn't`} want to play by these
        rules, they created the extension interface. {`We've`} begun experimenting
        with what is possible with extensions that would not be with mainline
        osquery: integrating with third-party services, writable tables,
        host-based firewall administration, malware vaccination, and more. We
        will share some of our lessons-learned on the challenges of using
        osquery — originally intended as a read-only information gatherer — as a
        control interface.
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
        This talk is designed for osquery developers and will be deep-dive into
        osquery internals. The osquery eventing tables, and the internal pubsub
        framework, make it possible to have osquery record data when it happens,
        not just when you query. We will go over what data already exists,
        queries that can be built on these for instant new detections, and how
        the framework is implemented so you can build exactly what you need.
      </p>
    </Speaker>

  {*/}
  </section>
)

export default Speakers
