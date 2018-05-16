import React from 'react'

import { ScheduleEntry, ENTRY_TYPES } from '../ScheduleEntry'
import styles from './schedule.module.scss'

const { BREAK, HOST, KEYNOTE, MEAL, TALK, WORKSHOP } = ENTRY_TYPES

const Schedule = ({ id }) => (
  <section className={styles.schedule} id={id}>
    <div className={styles.dayHeadings}>
      <h2 className={styles.dayHeading}>May 31</h2>

      <h2 className={styles.dayHeading}>June 1</h2>
    </div>

    <div className={styles.mobileDayLinks}>
      <a className={styles.mobileDayLink} href="#day1">Day 1</a>

      <a className={styles.mobileDayLink} href="#day2">Day 2</a>
    </div>

    <div className={styles.events}>
      <div className={styles.day} id="day1">
        <h2 className={[styles.dayHeading, styles.dayHeadingMobile].join(' ')}>
          May 31{` `}
          <span className={styles.dayHeadingMobileDetail}>(Day 1)</span>
        </h2>

        <ScheduleEntry
          begin="8:30 am"
          end="9:30 am"
          title="Check-In / Breakfast"
          type={MEAL}
        />

        <ScheduleEntry
          begin="9:30 am"
          details="Kolide"
          end="10:00 am"
          speaker="Jason Meller"
          title="Introduction"
          type={HOST}
        />

        <ScheduleEntry
          begin="10:00 am"
          category={KEYNOTE}
          details="Facebook"
          end="10:30 am"
          speaker="Nick Anderson"
          title="Evolving Our Open Source Community"
          type={KEYNOTE}
        >
          <p>
            Over the past two years the osquery community has increased
            dramatically. Not only have the number of contributions to the agent
            dramatically bumped, so has the number of platforms we support and
            richness of discussions in our community around best leveraging osquery.
            {`We'll`} explore how our community has grown, problems we faced/still face,
            and the directions {`we're`} hoping to push the community forward.
          </p>
        </ScheduleEntry>

        <ScheduleEntry
          begin="10:30 am"
          category="production osquery"
          details="Palantir"
          end="11:00 am"
          speaker="Chris Long"
          title="Practical System Auditing with Osquery"
          type={TALK}
        >
          <p>
            While there are many different ways to audit process executions and
            network events on Linux-based systems, osquery provides a fairly unique
            interface for collecting and filtering audit-based events. However,
            there are some common misconceptions surrounding the audit framework and
            digging through documentation on it can be quite perplexing. During this
            talk {`we'll`} cover:
            <ul className={styles.bullets}>
              <li>A basic overview of the audit framework</li>
              <li>Building a basic osquery auditing configuration</li>
              <li>
                Fine-tune auditing configurations to minimize performance impact
                against your systems
              </li>
            </ul>
          </p>
          <p>
            Palantir currently maintains an osquery deployment consisting of
            thousands of hosts with auditing enabled and collects upwards of 1
            billion process and socket events per day. Join this talk to learn how
            to gain greater visibility into high-value systems, scale an auditing
            deployment, or simply learn more about {`osquery's`} auditing features.
          </p>
        </ScheduleEntry>

        <ScheduleEntry
          begin="11:00 am"
          category="osquery Tools"
          details="Netflix"
          end="11:30 am"
          speaker="Forest Monsen"
          title="An Osquery-Based Differencing Engine for Incident Response"
          type={TALK}
        >
          <p>
            During a security incident on your cloud architecture, how far have
            attackers penetrated? How many instances have they touched, and what
            have they done there? Diffy will help. Using osquery, and a selection of
            simple differencing and more sophisticated clustering methods, Diffy
            will quickly point you to those instances requiring further digital
            forensics actions.
          </p>
        </ScheduleEntry>

        <ScheduleEntry
          begin="11:30 am"
          category="Production osquery"
          details="Stripe"
          end="12:00 pm"
          speaker="Ben Hughes"
          title="Osquery, He Knows Me"
          type={TALK}
        >
          <p>
            This talk, aimed at everyone, highlights the journey from before Osquery
            in my time with the Etsy security team, and some of the tooling and
            problems we faced. The wrong decisions {`I've`} made, so you can learn from
            my foolish hubris. To a number of thousand deployment of Osquery (and
            fleet and some not so fleet) at Stripe.
          </p>
        </ScheduleEntry>

        <ScheduleEntry
          begin="12:00 pm"
          end="1:00 pm"
          title="Lunch"
          type={MEAL}
        />


        <ScheduleEntry
          begin="1:00 pm"
          category="osquery Tools"
          details="Kolide"
          end="1:30 pm"
          speaker="Mike Arpaia"
          title="Instrumenting Dynamic Environments with Source Control, Peer Review, and Decentralized Intelligence Distribution"
          type={TALK}
        >
          <p>
            Osquery configurations often start simple and static, but, as the
            complexity of an osquery deployment grows, the level of dynamicism grows
            to where a complex server installation is required to group sets of
            hosts together and target them for analytics and threat hunting.
          </p>

          <p>
            This talk introduces some lessons learned from Kubernetes, a container
            orchestration platform, on how to effectively decouple and manage
            configurations of interrelated components.
          </p>

          <p>
            We will discuss how to reason about higher level instrumentation
            objectives and share components as decentralized, atomically
            distributable intelligence.
          </p>

          <p>
            Finally, the open-source ecosystem and established best practices will
            be explored so that attendees can begin implementing this way of
            managing and sharing host instrumentation capabilities and see immediate
            improvements to their instrumentation capabilities.
          </p>
        </ScheduleEntry>


        <ScheduleEntry
          begin="1:30 pm"
          category="osquery Development"
          details="Facebook"
          end="2:00 pm"
          speaker="Michael Lynn"
          title="Fact Finding"
          type={TALK}
        >
          <p>
            The macOS UI provides a large amount of device information - but not
            every interface has a counterpart command-line tool providing access to
            the same details. This talk will focus on using tools like Hopper to
            reverse engineer the code and APIs behind information displays you see
            everyday and how to integrate access to them into your own tools.
          </p>
        </ScheduleEntry>


        <ScheduleEntry
          begin="2:00 pm"
          category="osquery Tools"
          details="University Hamburg"
          end="2:30 pm"
          speaker="Steffen Haas"
          title="Bro-Osquery"
          type={TALK}
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
        </ScheduleEntry>


        <ScheduleEntry
          begin="2:30 pm"
          end="2:40 pm"
          title="Break"
          type={BREAK}
        />

        <ScheduleEntry
          begin="2:45 pm"
          category="osquery Development"
          details="Trail of Bits"
          end="3:15 pm"
          speaker="Lauren Pearl"
          title="Three Super Features That Could Transform Osquery"
          type={TALK}
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
        </ScheduleEntry>


        <ScheduleEntry
          begin="3:15 pm"
          category="osquery Development"
          details="Airbnb"
          end="3:45 pm"
          speaker="Samuel Keeley"
          title="The Power of SQL: Complex queries at Your Fingertips"
          type={TALK}
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
        </ScheduleEntry>


        <ScheduleEntry
          begin="3:45 pm"
          category="osquery Tools"
          details="Zentral"
          end="4:15 pm"
          speaker="Henry Stamerjohann"
          title="Zentral - Osquery & Event Stream Processing Into the ElasticStack"
          type={TALK}
        >
          <p>
            Learn about core functions and architecture of Zentral. Zentral is a
            open source hub to process event streams from osquery and other sources
            into the ElasticStack. Besides support for distinct osquery features
            like file carving, Zentral provides numerous integrations for inventory
            acquisition and alerting.
          </p>
        </ScheduleEntry>


        <ScheduleEntry
          begin="4:15 pm"
          category="osquery Development"
          details="Carbon Black"
          end="4:45 pm"
          speaker="Scott Lundgren"
          title="An Outsider's Journey to Join the Osquery Community"
          type={TALK}
        >
          <p>
            Imagine this: You discover osquery and find love at first sight. You
            have experience writing native systems code and ideas about new queries
            and want to do the right thing. A documented journey of an outside dev
            attempt to find his way in the community and make a meaningful
            contribution.
          </p>
        </ScheduleEntry>


        <ScheduleEntry
          begin="5:00 pm"
          category="After-hours event"
          details="240 Front St, San Francisco, CA 94111"
          end="8:00 pm"
          speaker="Schroeder's Restaurant"
          title="Off-Site Dinner & Drinks"
          type={WORKSHOP}
        />
      </div>

      <div className={styles.divider} />

      <div className={styles.day} id="day2">
        <h2 className={[styles.dayHeading, styles.dayHeadingMobile].join(' ')}>
          June 1{` `}
          <span className={styles.dayHeadingMobileDetail}>(Day 2)</span>
        </h2>

        <ScheduleEntry
          begin="8:30 am"
          day={2}
          end="9:30 am"
          title="Check-In / Breakfast"
          type={MEAL}
        />

        <ScheduleEntry
          begin="9:30 am"
          category="People vs. Tools"
          day={2}
          details="JASK"
          end="10:00 am"
          speaker="Rob Fry"
          title="SOC, aka Throw More People at the Problem"
          type={TALK}
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
        </ScheduleEntry>


        <ScheduleEntry
          begin="10:00 am"
          category="osquery Internals"
          day={2}
          details="Facebook"
          end="10:30 am"
          speaker="Teddy Reed"
          title="The Scary Parts of Osquery"
          type={TALK}
        >
          <p>
            This talk is meant to be 50% comical and 50% gut-wrenching horror. We
            will cover several of the older and more fragile components within
            osquery. We will highlight several assumptions that have been working
            well but lack testing coverage or rigorous review. This includes several
            potential exceptional edge cases that could be disastrous to performance
            or data integrity. We will conclude with several examples of how to make
            all of osquery more reliable and set up for a bright and sunny future!
          </p>
        </ScheduleEntry>


        <ScheduleEntry
          begin="10:30 am"
          category="osquery Development"
          day={2}
          details="Trail of Bits"
          end="11:00 am"
          speaker="Mike Myers"
          title="The Osquery Extensions Skunkworks Project: Unconventional Uses for Osquery"
          type={TALK}
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
        </ScheduleEntry>


        <ScheduleEntry
          begin="11:00 am"
          category="osquery Development"
          day={2}
          details="Facebook"
          end="11:30 am"
          speaker="Mitchell Grenier"
          title="Catching Everything with Osquery Events"
          type={TALK}
        >
          <p>
            This talk is designed for osquery developers and will be deep-dive into
            osquery internals. The osquery eventing tables, and the internal pubsub
            framework, make it possible to have osquery record data when it happens,
            not just when you query. We will go over what data already exists,
            queries that can be built on these for instant new detections, and how
            the framework is implemented so you can build exactly what you need.
          </p>
        </ScheduleEntry>


        <ScheduleEntry
          begin="11:30 am"
          category="Production osquery"
          day={2}
          details="Uptycs"
          end="12:00 pm"
          speaker="Milan Shah"
          title="Osquery and Docker Containers"
          type={TALK}
        >
          <p>
            In the past, osquery had major limitations in support for providing
            visibility into Docker containers. With the recent addition of 14 Docker
            related tables in osquery, new opportunities exist to address major use
            cases around resource optimization, intrusion detection and compliance
            for Docker environments. Combined with information from Kubernetes and
            SWARM – osquery can now help provide visibility across a containerized
            application.
          </p>

          <p>
            In this talk, we will explore the recent Docker table additions to
            osquery, expose existing limitations to help guide future osquery
            developments and discuss the growing implications of osquery in a
            serverless world. Attendees will leave this session with an
            understanding of whether or not osquery can meet their needs for
            securing and monitoring a Docker container environment.
          </p>
        </ScheduleEntry>


        <ScheduleEntry
          begin="12:00 pm"
          day={2}
          end="1:00 pm"
          title="Lunch"
          type={MEAL}
        />

        <ScheduleEntry
          begin="1:00 pm"
          category={WORKSHOP}
          day={2}
          end="4:00 pm"
          speaker="Victor Vrantchan (and a few others!)"
          title="Community Workshop"
          type={WORKSHOP}
        />

        <ScheduleEntry
          begin="4:00 pm"
          day={2}
          details="Kolide"
          end="4:30 pm"
          speaker="Jason Meller"
          title="Wrap-Up & Thank You"
          type={HOST}
        />
      </div>
    </div>
  </section>
)

export default Schedule
