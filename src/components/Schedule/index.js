import React from 'react'

import { ScheduleEntry, ENTRY_TYPES } from '../ScheduleEntry'
import styles from './schedule.module.scss'

const { BREAK, HOST, KEYNOTE, MEAL, TALK, WORKSHOP } = ENTRY_TYPES

const Schedule = ({ id }) => (
  <section className={styles.schedule} id={id}>
    <div className={styles.dayHeadings}>
      <h2 className={styles.dayHeading}>June 20</h2>

      <h2 className={styles.dayHeading}>June 21</h2>
    </div>

    <div className={styles.mobileDayLinks}>
      <a className={styles.mobileDayLink} href="#day1">Day 1</a>

      <a className={styles.mobileDayLink} href="#day2">Day 2</a>
    </div>

    <div className={styles.events}>
      <div className={styles.day} id="day1">
        <h2 className={[styles.dayHeading, styles.dayHeadingMobile].join(' ')}>
          June 20{` `}
          <span className={styles.dayHeadingMobileDetail}>(Day 1)</span>
        </h2>

        <ScheduleEntry
          begin="8:30 am"
          end="9:30 am"
          speaker="Check-In / Breakfast"
          type={MEAL}
        />

        <ScheduleEntry
          begin="9:30 am"
          details="Trail of Bits"
          end="10:00 am"
          speaker="Host"
          title="Introduction"
          type={HOST}
        />

        <ScheduleEntry
          begin="10:00 am"
          category={KEYNOTE}
          details="Kolide"
          end="11:00 am"
          speaker="Jason Meller"
          title="User Focused Security & Osquery"
          type={KEYNOTE}
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
        </ScheduleEntry>

        <ScheduleEntry
          begin="11:00 am"
          category="Production osquery"
          details="Dactiv LLC"
          end="11:30 am"
          speaker="Zach Wasserman"
          title="10 Pitfalls on the Path to Osquery Bliss"
          type={TALK}
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
        </ScheduleEntry>
       
        <ScheduleEntry
          begin="11:30 am"
          category="osquery development"
          details="Trail of Bits"
          end="12:00 pm"
          speaker="Stefano Bonicatti & Mark Mossberg"
          title="osql, the community-oriented osquery fork"
          type={TALK}
        >
          <p>
            osql is a community-oriented fork of osquery. Its goals are making
            the development process more open and predictable, being responsive 
            in reviewing and accepting community contributions, and maintaining the
            {` community’s`} confidence and direct participation in the osquery project.
            In this talk, we discuss how we intend to maintain a successful community
            fork of a major open-source project.
          </p>
        </ScheduleEntry>

        <ScheduleEntry
          begin="12:00 pm"
          end="1:00 pm"
          speaker="Lunch"
          type={MEAL}
        />

        <ScheduleEntry
          begin="1:00 pm"
          category="osquery development"
          details="Facebook"
          end="1:45 pm"
          speaker="Teddy Reed & Ryan Wilson"
          title="Panel Discussion: the osquery Foundation"
          type={TALK}
        >
          <p>
          Teddy, along with Facebook colleague Ryan Wilson, will lead a panel discussion 
          and {`Q&A`} with members of the osquery community about the plans to transfer 
          stewardship of osquery from Facebook to an open-source foundation.
          </p>
        </ScheduleEntry>

        <ScheduleEntry
          begin="1:45 pm"
          end="2:00 pm"
          title="Break"
          type={BREAK}
        />

        <ScheduleEntry
          begin="02:00 pm"
          category="osquery development"
          details="Google"
          end="02:30 pm"
          speaker="Victor Vrantchan"
          title="All you can do with extensions"
          type={TALK}
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
        </ScheduleEntry>

        <ScheduleEntry
          begin="2:30 pm"
          category="Production osquery"
          details="Carbon Black"
          end="3:00 pm"
          speaker="Tania McCormack"
          title="Taking Osquery to the Mainstream to Benefit Us All"
          type={TALK}
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
        </ScheduleEntry>

        <ScheduleEntry
          begin="3:00 pm"
          category="Production osquery"
          details="Segment"
          end="3:30 pm"
          speaker="Matt Jane"
          title="Monitoring Ephemeral Infrastructure with osquery"
          type={TALK}
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
        </ScheduleEntry>

        <ScheduleEntry
          begin="3:30 pm"
          end="3:45 pm"
          title="Break"
          type={BREAK}
        />

        <ScheduleEntry
          begin="3:45 pm"
          category="osquery Internals"
          details="AlienVault"
          end="4:15 pm"
          speaker="Alex Malone"
          title="Internals: how osquery uses sqlite3 and rocksdb"
          type={TALK}
        >
          <p>
            We will walk through a query from SQL to the logged JSON results, noting the
            important interactions with sqlite3 and rocksdb. For example, the processes
            table specifies an INDEX on pid. What does that entail, and how does it impact
            how the table generate() function is called? In this talk, listeners will gain
            insight into the sqlite3 virtual table API.
          </p>
        </ScheduleEntry>

        <ScheduleEntry
          begin="4:15 pm"
          category="Production osquery"
          details="Zercurity"
          end="4:45 pm"
          speaker="Hugh Neale"
          title="Osquery across compliance, monitoring, risk and threat hunting"
          type={TALK}
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
        </ScheduleEntry>

        <ScheduleEntry
          begin="5:00 pm"
          category="After-hours event"
          details="Mailroom"
          end="8:00 pm"
          speaker=""
          title="Off-Site Dinner & Drinks"
          type={WORKSHOP}
        />
      </div>

      <div className={styles.divider} />

      <div className={styles.day} id="day2">
        <h2 className={[styles.dayHeading, styles.dayHeadingMobile].join(' ')}>
          June 21{` `}
          <span className={styles.dayHeadingMobileDetail}>(Day 2)</span>
        </h2>

        <ScheduleEntry
          begin="8:30 am"
          day={2}
          end="9:30 am"
          speaker="Check-In / Breakfast"
          type={MEAL}
        />

        <ScheduleEntry
          begin="9:30 am"
          category="Production osquery"
          day={2}
          details="Carbon Black"
          end="10:00 am"
          speaker="Jon Nelson"
          title="Queries as Building Blocks for Your Security Framework"
          type={TALK}
        >
          <p>
            Teams often lean on standardized third-party security frameworks as the
            blueprint to ensure the thoroughness of their coverage and efficient use
            of their limited resources. In this session, {`we’ll`} walk through our
            process for identifying and grouping specific osquery tables to fill in
            the gaps within the frameworks your organization subscribes to, whether
            {` that’s`} NIST, MITRE {`ATT&CK`}, or industry-based regulations.
          </p>
        </ScheduleEntry>


        <ScheduleEntry
          begin="10:00 am"
          category="osquery development"
          day={2}
          details="Trail of Bits"
          end="10:30 am"
          speaker="Alessandro Gario"
          title="Linux security event monitoring with osquery"
          type={TALK}
        >
          <p>
            This talk introduces security event monitoring on Linux, and our lessons
            learned from attempts to implement it within osquery. Our first experience
            with osquery event monitoring was rewriting its use of Auditd. In order to
            capture events within containers, we next implemented an event publisher
            based on eBPF. We discovered what works, what {`doesn’t`}, and some paths
            forward.
          </p>
        </ScheduleEntry>


        <ScheduleEntry
          begin="10:30 am"
          category="Production osquery"
          details="Kolide"
          end="11:00 am"
          speaker="Fritz Ifert-Miller"
          title="Using macOS Spotlight and Osquery to Prevent Data Breaches"
          type={TALK}
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
        </ScheduleEntry>


        <ScheduleEntry
          begin="11:00 am"
          category="osquery Development"
          day={2}
          details="Kolide"
          end="11:30 am"
          speaker="Joseph Sokol-Margolis"
          title="Building and Distribution: The Kolide Launcher for Osquery"
          type={TALK}
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
        </ScheduleEntry>


        <ScheduleEntry
          begin="11:30 am"
          category="osquery Development"
          details="PolyLogyx"
          end="12:00 pm"
          speaker="Atul Kabra"
          title="Enriching osquery with 'event-driven' extensions"
          type={TALK}
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
        </ScheduleEntry>


        <ScheduleEntry
          begin="12:00 pm"
          day={2}
          end="1:00 pm"
          speaker="Lunch"
          type={MEAL}
        />

        <ScheduleEntry
          begin="1:00 pm"
          category={WORKSHOP}
          day={2}
          end="4:00 pm"
          speaker="Various osquery leaders"
          title="Community Workshop"
          type={WORKSHOP}
        />

        <ScheduleEntry
          begin="4:00 pm"
          day={2}
          details="Trail of Bits"
          end="4:30 pm"
          speaker="Host"
          title="Wrap-Up & Thank You"
          type={HOST}
        />
      </div>
    </div>
  </section>
)

export default Schedule
