import React from 'react'
import classNames from 'classnames'
import Helmet from 'react-helmet'
import MediaQuery from 'react-responsive'
import Link from 'gatsby-link'

import FeatureTile from '../components/FeatureTile'
import Footer from '../components/Footer'
import Header from '../components/Header'
import imgAirbnb from './airbnb.svg'
import imgExpedia from './expedia.svg'
import imgFAQ from './faq.svg'
/* TODO: To substitute with new speakers
import imgHeadshotBenHughes from './headshot-ben-hughes.jpg'
import imgHeadshotBenHughes2x from './headshot-ben-hughes-2x.jpg'
import imgHeadshotBenHughes3x from './headshot-ben-hughes-3x.jpg'*/
import imgHeroLogo from './querycon-large.svg'
import imgMikeStage1 from './mike-stage-1.png'
import imgOrbitz from './orbitz.svg'
import imgPalaceOfFineArtsPoster from './palace-fine-arts.jpg'
import imgPaperAirplane from './paper-airplane.svg'
import imgTwitterBird from './twitter-bird.svg'
import imgVenue from './palace-fine-arts.svg'
import MainSpeaker from '../components/MainSpeaker'
import MediaLinks from '../components/MediaLinks'
import MobileHeader from '../components/MobileHeader'
import ProminentCta from '../components/ProminentCta'
import RegistrationTiles from '../components/RegistrationTiles'
import rightArrow from './right-facing-arrow.svg'
import rightArrowPink from '../components/common/arrow-right-pink.svg'
import SpeakerTile from '../components/SpeakerTile'
import styles from './index.module.scss'
/* TODO: Substitute with another video of NY?
import videoPalaceOfFineArtsMp4 from './palace-fine-arts.mp4'
import videoPalaceOfFineArtsWebM from './palace-fine-arts.webm'*/
import Videos from '../components/Videos'
import { MOBILE_WIDTH } from '../util/constants'

const cx = classNames.bind(styles)

const IndexPage = () => (
  <div className={styles.pageWrapper}>
    <Helmet>
      <title>QueryCon19</title>
      <meta name="description" content="An osquery conference" />
    </Helmet>

    <section className={styles.heroSection}>
      {/* TODO: Substitute with another video of NY? }
      <MediaQuery minWidth={MOBILE_WIDTH + 1}>
        <div className={styles.videoBackground}>
          <video
            loop
            muted
            autoPlay
            className={styles.video}
            poster={imgPalaceOfFineArtsPoster}
          >
            <track kind="captions" />
            <source src={videoPalaceOfFineArtsWebM} type="video/webm" />
            <source src={videoPalaceOfFineArtsMp4} type="video/mp4" />
          </video>
        </div>
      </MediaQuery>
      {*/}

      <div className={styles.heroContent}>
        <MediaQuery minWidth={MOBILE_WIDTH + 1}>
          <Header />
        </MediaQuery>

        <MediaQuery maxWidth={MOBILE_WIDTH}>
          <MobileHeader />
        </MediaQuery>

        <h1 className={styles.header}>QueryCon 2019</h1>
        <div className={styles.heroLogo}>
          <img alt="" src={imgHeroLogo} />
        </div>
        <h2 className={styles.subHeader}>An osquery conference by Trail of Bits</h2>
        <h3 className={styles.subSubHeader}>New York City | Jun 20 - Jun 21</h3>
      </div>
    </section>

    {/* TODO: Show this after the event}
    <div className={styles.ctaBar}>
      <MediaQuery minWidth={MOBILE_WIDTH + 1}>
        <p className={styles.ctaBarText}>
          QueryCon 2019 was an awesome success! We {`can't`} wait for next year.
        </p>
      </MediaQuery>
    </div>
    {*/}

    <MediaQuery maxWidth={MOBILE_WIDTH}>
      <h2 className={styles.supplementaryHeader}>QueryCon19</h2>
    </MediaQuery>

    {/* TODO: Show this after the event}
    <h2
      className={cx(styles.sectionHeader, styles.sectionHeaderExtraRoom)}
      id="videos"
    >
      QueryCon 2019 Videos
    </h2>

    <div className={styles.sectionSubheader}>
      Did you miss us this year? Do you want to watch the talks again? {`We've`}{' '}
      got you covered!
    </div>

    <div className={styles.preConfMain}>
      <iframe
        allowFullScreen
        className={styles.preConfMainVideo}
        frameBorder="0"
        height="315"
        src="https://www.youtube.com/embed/RVNEUqgwv5A?rel=0"
        title="Nick Anderson (Facebook) - Evolving Our Open Source Community"
      />

      <div className={styles.preConfMainText}>
        <h3 className={styles.preConfMainTitle}>
          Nick Anderson (Facebook) - Evolving Our Open Source Community
        </h3>

        <p className={styles.preConfMainDescription}>
          An exploration of how the osquery community has grown, problems we
          faced/still face, and the directions {`we're`} hoping to push the
          community forward. Over the past two years the osquery community has
          increased dramatically. Not only have the number of contributions to
          the agent dramatically bumped, so has the number of platforms we
          support and richness of discussions in our community around best
          leveraging osquery. Nick takes us on a tour of where osquery has been
          and where it is headed.
        </p>
      </div>
    </div>

    <MediaQuery maxWidth={MOBILE_WIDTH}>
      <div className={cx(styles.clearBanner, styles.moreResourcesBanner)}>
        More Videos:
      </div>
    </MediaQuery>

    <Videos className={styles.videos} />

    <div className={styles.sectionSubheader}>
      More videos coming soon!
    </div>

    <a
      className={styles.learnMoreLink}
      href="https://www.youtube.com/playlist?list=PLlSdCcsTOu5STvaoPlr-PJE-zbYmlAGrX"
      rel="noopener noreferrer"
      target="_blank"
    >
      Check the YouTube Playlist
      {` `}<img alt="" src={rightArrowPink} />
    </a>
    {*/}

    <div className={styles.sectionBreak} />

    <p className={styles.leader}>
      Join us for a 2-day <strong>Osquery</strong> conference at{' '}
      <strong>Convene at 32 Old Slip, New York, NY 10005</strong> focused on bringing
      security, devops, macadmins, and other experts in the Osquery community
      together.
      QueryCon is now in its second year, with new hosts Trail of Bits
      and a new location in New York City.<br />
      Following last year’s format, there will be a single speaking track,
      and a community workshop.
    </p>

    {/* TODO: Substitute with another image, text too}
    <div className={styles.leaderSub}>

      <MediaQuery maxWidth={MOBILE_WIDTH}>
        <div className={styles.leaderSub2}>
          <img
            className={styles.responsiveImage}
            src={imgMikeStage1}
            alt="Mike Arpaia"
          />
        </div>
      </MediaQuery>

      <div className={styles.leaderSub1}>
        <h3>Osquery Expertise for Big and Small</h3>
        <p>
          {`We've`} brought together the biggest names in the Osquery community
          to speak and discuss on a variety of use-cases and issues. No matter
          whether you are an Osquery expert or are installing it for the first
          time there is something for you:
        </p>
      </div>

      <MediaQuery minWidth={MOBILE_WIDTH + 1}>
        <div className={styles.leaderSub2}>
          <img
            className={styles.responsiveImage}
            src={imgMikeStage1}
            alt="Mike Arpaia"
          />
        </div>
      </MediaQuery>
    </div>
    {*/}

    {/* TODO: substitute with Trail of Bits banner}
    <div className={styles.kolideBanner}>
      <span className={styles.kolideBannerText}>
        QueryCon19 brought to you by Trail of Bits
      </span>
    </div>
    {*/}

    <h2 className={styles.reserve}>Reserve your seat for QueryCon19 now!</h2>
    {/* TODO: delete me eventually */}
    <div className={styles.reserveSub}>Coming Soon!</div>
    {/* TODO: Enter informations about registering and buying tickets}
    <div className={styles.reserveSub}>Register soon! Seating is limited!</div>

    <RegistrationTiles />

    <h2 className={styles.passDescription}>
      Your pass gets you all of the following:
    </h2>

    <div className={styles.passFeatures}>
      <FeatureTile title="Full Conference Access" url="/program">
        Registration grants you full access to our two-day single track
        conference, packed with Osquery experts ranging from the Osquery
        creators and leaders to major open-source contributors and community
        members.
      </FeatureTile>

      <FeatureTile title="After Hours Cocktail Party" url="/program#social">
        After a long day of talks, spend time imbibing with Osquery leaders,
        contributors, speakers, and other conference goers at this attendee-only
        networking event. Drinks and delicious food are on us!
      </FeatureTile>

      <FeatureTile title="Entry to Osquery Workshop" url="/program#workshop">
        Inspired by the talks? The community workshop lets you put your ideas
        into action in a communal setting where you can get hands-on experience
        guided by experts, collaborate on issues, and network with community
        members.
      </FeatureTile>
    </div>
    {*/}

    <div className={styles.sectionBreak} id="speakers" />

    <h2 className={styles.sectionHeader}>Featured Speakers</h2>

    {/* TODO: replace with another punchline? }
    <div className={styles.sectionSubheader}>
      We are bringing the brightest and best of the Osquery community together.
    </div>
    {*/}

    {/* TODO: delete me eventually */}
    <div className={styles.sectionSubheader}>
      Coming Soon!
    </div>

    {/* TODO: Add speakers when known}
    <MainSpeaker
      company="Facebook"
      image={imgHeadshotNickAnderson}
      image2x={imgHeadshotNickAnderson2x}
      image3x={imgHeadshotNickAnderson3x}
      name="Nick Anderson"
      title="Security Engineer"
    />

    <div className={styles.speakers}>
      <SpeakerTile
        company="Kolide"
        image={imgHeadshotMikeArpaia}
        image2x={imgHeadshotMikeArpaia2x}
        image3x={imgHeadshotMikeArpaia3x}
        name="Mike Arpaia"
        title="Co-Founder & CTO"
      />
    </div>

    <div className={styles.genericBanner}>
      <Link to="/program#speakers">
        See The Full Program <img alt="" src={rightArrow} />
      </Link>
    </div>
    {*/}

    {/* TODO: delete me eventually */}
    <div className={styles.sectionBreak} id="speakers" />

    <h2 id="location" className={styles.sectionHeader}>
      The Venue
    </h2>

    <div className={styles.sectionSubheader}>
      Convene at 32 Old Slip - New York, NY
    </div>

    {/* TODO: Substitute stylized venue with another image? }
    <div className={styles.venueImage}>
      <img alt="" className={styles.responsiveImage} src={imgVenue} />
    </div>
    {*/}

    {/* TODO: Update with a short description of the venue?}
    <p className={styles.venueDescription}>
      QueryCon19 will be held at the Palace of the Fine Arts Innovation Hangar,
      minutes away from the Golden Gate Bridge. Parking will be validated for
      all conference goers.
    </p>
    {*/}

    {/* TODO: Update image, link is fine}
    <a href="https://goo.gl/maps/xnbavxS1bU72">
      <div className={styles.venueMap} />
    </a>
    {*/}

    <div className={styles.genericBanner}>Not sure where to stay?</div>

    {/* TODO: delete me eventually */}
    <div className={styles.sectionSubheader}>
      Coming Soon!
    </div>

    {/* TODO: Add suggestions for place to stay}
    <div className={styles.prominentCTAs}>
      <ProminentCta
        className={styles.prominentCta}
        heading="Check AirBnB Availability"
        icon={imgAirbnb}
        subheading="May 31 - June 1"
        href="https://www.airbnb.com/s/Bay-Area--CA--United-States/homes?place_id=ChIJtdeIpqODhYARqR9GV4QbiYw&refinement_paths%5B%5D=%2Fhomes&allow_override%5B%5D=&checkin=2018-05-30&checkout=2018-06-01&s_tag=wWue7Zlm"
      />

      <ProminentCta
        className={styles.prominentCta}
        heading="See Hotels on Orbitz"
        icon={imgOrbitz}
        subheading="May 31 - June 1"
        href="https://www.orbitz.com/Hotel-Search?#&destination=Bay%20Area%2C%20California&startDate=05/30/2018&endDate=06/01/2018&regionId=6056043&latLong=37.724160,-122.270938&adults=1"
      />

      <ProminentCta
        className={styles.prominentCta}
        heading="See Hotels on Expedia"
        icon={imgExpedia}
        subheading="May 31 - June 1"
        href="https://www.expedia.com/Hotel-Search?destination=Bay+Area%2C+California&latLong=37.724160%2C-122.270938&regionId=6056043&startDate=05%2F30%2F2018&endDate=06%2F01%2F2018&_xpid=11905%7C1&adults=1&children=0"
      />
    </div>
    {*/}

    <div className={styles.sectionBreak} id="learning" />

    <h2 className={styles.sectionHeader}>Pre-Conference Learning</h2>

    <div className={styles.sectionSubheader}>
      Brush up on your Osquery understanding with some of the resources below:
    </div>

    <div className={styles.preConfMain}>
      <iframe
        allowFullScreen
        className={styles.preConfMainVideo}
        frameBorder="0"
        height="315"
        src="https://www.youtube.com/embed/yg-UeTdRRLo?rel=0"
        title="Secure DevOps is possible: How osquery is built - Teddy Reed & Javier Marcos"
      />

      <div className={styles.preConfMainText}>
        <h3 className={styles.preConfMainTitle}>
          How Osquery is Built - Teddy Reed {`&`} Javier Marcos
        </h3>

        <p className={styles.preConfMainDescription}>
          {`Facebook's`} Osquery is a Linux and OS X intrusion detection and
          response tool. It supports 10 OS flavors and is continuously built for
          8 of those. It is very important that the infrastructure used to test,
          build, and publish security software be secure itself. This discussion
          presents how our Security team has enabled any Github contributor to
          submit C/C++/bash code to our CI and build server, safely. We will
          guide the audience through our CI hardening process and the attack and
          vulnerability reports we have received through our bug bounty
          targeting CI. This includes isolating a Mac Mini fleet of build
          slaves, not trusting Jenkins as much as possible, automatically
          building, signing, and publishing packages to AWS S3, doing the same
          for OS X kernel extension code, adding 2-factor to everything.
        </p>
      </div>
    </div>

    <MediaQuery maxWidth={MOBILE_WIDTH}>
      <div className={cx(styles.clearBanner, styles.moreResourcesBanner)}>
        More Resources:
      </div>
    </MediaQuery>

    <MediaLinks />

    <div className={styles.sectionBreak} id="questions" />

    <h2 className={cx(styles.sectionHeader, styles.questionsSectionHeader)}>
      Still Have Questions?
    </h2>

    <div className={styles.sectionSubheader}>
      {`We're`} here to answer whatever you would like to know about QueryCon.
      Please see the FAQ and {`don't`} hesitate to contact us if you have
      further questions or concerns.
    </div>

    <div className={styles.prominentCTAs}>
      <ProminentCta heading="Read the FAQ" icon={imgFAQ} internal href="/faq" />

      <ProminentCta
        heading="Hit Us Up on Twitter"
        icon={imgTwitterBird}
        href="https://www.twitter.com/trailofbits"
      />

      <ProminentCta
        heading="Contact Us"
        icon={imgPaperAirplane}
        href="mailto:mike.myers@trailofbits.com"
      />
    </div>

    <Footer />
  </div>
)

export default IndexPage
