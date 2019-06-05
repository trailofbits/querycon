import React from 'react'

import imgHeadshotStefanoBonicatti from 'assets/headshots/headshot-stefano-bonicatti.png'
import imgHeadshotStefanoBonicatti2x from 'assets/headshots/headshot-stefano-bonicatti-2x.png'
import imgHeadshotStefanoBonicatti3x from 'assets/headshots/headshot-stefano-bonicatti-3x.png'
import imgHeadshotAlessandroGario from 'assets/headshots/headshot-alessandro-gario.jpg'
import imgHeadshotAlessandroGario2x from 'assets/headshots/headshot-alessandro-gario-2x.jpg'
import imgHeadshotAlessandroGario3x from 'assets/headshots/headshot-alessandro-gario-3x.jpg'
import imgHeadshotZachWasserman from 'assets/headshots/headshot-zach-wasserman.jpg'
import imgHeadshotZachWasserman2x from 'assets/headshots/headshot-zach-wasserman-2x.jpg'
import imgHeadshotZachWasserman3x from 'assets/headshots/headshot-zach-wasserman-3x.jpg'
import imgHeadshotVictorVrantchan from 'assets/headshots/headshot-victor-vrantchan.jpg'
import imgHeadshotVictorVrantchan2x from 'assets/headshots/headshot-victor-vrantchan-2x.jpg'
import imgHeadshotVictorVrantchan3x from 'assets/headshots/headshot-victor-vrantchan-3x.jpg'
import imgHeadshotJasonMeller from 'assets/headshots/headshot-jason-meller.png'
import imgHeadshotJasonMeller2x from 'assets/headshots/headshot-jason-meller-2x.png'
import imgHeadshotJasonMeller3x from 'assets/headshots/headshot-jason-meller-3x.png'
import imgHeadshotFritzIfertMiller from 'assets/headshots/headshot-fritz-ifert-miller.png'
import imgHeadshotFritzIfertMiller2x from 'assets/headshots/headshot-fritz-ifert-miller-2x.png'
import imgHeadshotFritzIfertMiller3x from 'assets/headshots/headshot-fritz-ifert-miller-3x.png'
import imgHeadshotTaniaMcCormack from 'assets/headshots/headshot-tania-mccormack.png'
import imgHeadshotTaniaMcCormack2x from 'assets/headshots/headshot-tania-mccormack-2x.png'
import imgHeadshotTaniaMcCormack3x from 'assets/headshots/headshot-tania-mccormack-3x.png'
import imgHeadshotJonNelson from 'assets/headshots/headshot-jon-nelson.png'
import imgHeadshotJonNelson2x from 'assets/headshots/headshot-jon-nelson-2x.png'
import imgHeadshotJonNelson3x from 'assets/headshots/headshot-jon-nelson-3x.png'
import imgHeadshotJosephSokolMargolis from 'assets/headshots/headshot-joseph-sokol-margolis.png'
import imgHeadshotJosephSokolMargolis2x from 'assets/headshots/headshot-joseph-sokol-margolis-2x.png'
import imgHeadshotJosephSokolMargolis3x from 'assets/headshots/headshot-joseph-sokol-margolis-3x.png'
import imgHeadshotAtulKabra from 'assets/headshots/headshot-atul-kabra.png'
import imgHeadshotAtulKabra2x from 'assets/headshots/headshot-atul-kabra-2x.png'
import imgHeadshotAtulKabra3x from 'assets/headshots/headshot-atul-kabra-3x.png'
import imgHeadshotAlexMalone from 'assets/headshots/headshot-alex-malone.png'
import imgHeadshotAlexMalone2x from 'assets/headshots/headshot-alex-malone-2x.png'
import imgHeadshotAlexMalone3x from 'assets/headshots/headshot-alex-malone-3x.png'
import imgHeadshotMattJane from 'assets/headshots/headshot-matt-jane.png'
import imgHeadshotMattJane2x from 'assets/headshots/headshot-matt-jane-2x.png'
import imgHeadshotMattJane3x from 'assets/headshots/headshot-matt-jane-3x.png'
import imgHeadshotHughNeale from 'assets/headshots/headshot-hugh-neale.png'
import imgHeadshotHughNeale2x from 'assets/headshots/headshot-hugh-neale-2x.png'
import imgHeadshotHughNeale3x from 'assets/headshots/headshot-hugh-neale-3x.png'
import imgHeadshotPlaceholder from 'assets/headshots/headshot-placeholder.jpg'
import imgHeadshotPlaceholder2x from 'assets/headshots/headshot-placeholder-2x.jpg'
import imgHeadshotPlaceholder3x from 'assets/headshots/headshot-placeholder-3x.jpg'

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
        {` Spotlight's`} advanced search syntax, and surprise you with the breadth
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
        {` that’s`} NIST, MITRE {`ATT&CK`}, or industry-based regulations.
      </p>
    </Speaker>

    <Speaker
      company="PolyLogyx"
      image={imgHeadshotAtulKabra}
      image2x={imgHeadshotAtulKabra2x}
      image3x={imgHeadshotAtulKabra3x}
      name="Atul Kabra"
      presentationName="Enriching osquery with 'event-driven' extensions"
      presentationTopic="osquery Development"
      title="Co-Founder, CTO and Architect"
    >
      <p>
        Osquery has a mechanism for extending its core via extensions, but it {`doesn’t `}
        allow an extension to participate in {`osquery's`} event framework. In this talk,
        we will describe how we overcame some of the design constraints in the osquery
        extension model, in order to create event-driven tables in an extension. As
        well, we will share our wishlist for how the extension ecosystem for osquery
        could be improved to enable some exciting potential use-cases for the
        endpoint agent.
      </p>
    </Speaker>

    <Speaker
      company="AlienVault"
      image={imgHeadshotAlexMalone}
      image2x={imgHeadshotAlexMalone2x}
      image3x={imgHeadshotAlexMalone3x}
      name="Alex Malone"
      presentationName="Internals: how osquery uses sqlite3 and rocksdb"
      presentationTopic="osquery Internals"
      title="Senior Software Engineer"
    >
      <p>
        We will walk through a query from SQL to the logged JSON results, noting the
        important interactions with sqlite3 and rocksdb. For example, the processes
        table specifies an INDEX on pid. What does that entail, and how does it impact
        how the table generate() function is called? In this talk, listeners will gain
        insight into the sqlite3 virtual table API.
      </p>
    </Speaker>

    <Speaker
      company="Segment"
      image={imgHeadshotMattJane}
      image2x={imgHeadshotMattJane2x}
      image3x={imgHeadshotMattJane3x}
      name="Matt Jane"
      presentationName="Monitoring Ephemeral Infrastructure with osquery"
      presentationTopic="Production osquery"
      title="Cloud Security Engineer"
    >
      <p>
        Modern infrastructure and deployment methods, as well as web-scale infrastructure
        have brought about a new paradigm in infrastructure management. Short lived and
        ephemeral resources allow applications to scale up and down on demand.

        Unfortunately this means that one of the primary information gather methods of
        osquery, scheduled queries, becomes far less useful if queries are scheduled for
        a longer interval than the infrastructure will exist.

        This {`doesn’t`} mean osquery and scheduled queries are no longer useful, far
        from it. It simply means that we need to adjust our way of thinking a bit and
        adapt our methods of information gathering to overcome these new issues.
      </p>
    </Speaker>

    <Speaker
      company="Zercurity"
      image={imgHeadshotHughNeale}
      image2x={imgHeadshotHughNeale2x}
      image3x={imgHeadshotHughNeale3x}
      name="Hugh Neale"
      presentationName="Osquery across compliance, monitoring, risk and threat hunting"
      presentationTopic="Production osquery"
      title="Director"
    >
      <p>
        Stories, use cases and lessons learnt from the front line: Hugh will
        demonstrate how powerful osquery is across compliance,
        monitoring, risk IAM and threat hunting. The goal is to help build a
        complete picture of your IT estate and security posture. This talk is
        aimed at IT and Security operations.

        Zercurity has been using osquery in production workloads from startups
        to listed companies. They use osquery for inventory management, monitoring,
        compliance, risk, vulnerability management and IAM to name a few. Hugh will
        share some of their takeaways over the last few years and tell you
        about some of the things you can build atop osquery.
      </p>
    </Speaker>

  </section>
)

export default Speakers
