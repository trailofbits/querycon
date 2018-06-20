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
import imgHeadshotBenHughes from './headshot-ben-hughes.jpg'
import imgHeadshotBenHughes2x from './headshot-ben-hughes-2x.jpg'
import imgHeadshotBenHughes3x from './headshot-ben-hughes-3x.jpg'
import imgHeadshotChrisLong from './headshot-chris-long.jpg'
import imgHeadshotChrisLong2x from './headshot-chris-long-2x.jpg'
import imgHeadshotChrisLong3x from './headshot-chris-long-3x.jpg'
import imgHeadshotLaurenPearl from './headshot-lauren-pearl.jpg'
import imgHeadshotLaurenPearl2x from './headshot-lauren-pearl-2x.jpg'
import imgHeadshotLaurenPearl3x from './headshot-lauren-pearl-3x.jpg'
import imgHeadshotMikeArpaia from './headshot-mike-arpaia.jpg'
import imgHeadshotMikeArpaia2x from './headshot-mike-arpaia-2x.jpg'
import imgHeadshotMikeArpaia3x from './headshot-mike-arpaia-3x.jpg'
import imgHeadshotMikeMyers from './headshot-mike-myers.jpg'
import imgHeadshotMikeMyers2x from './headshot-mike-myers-2x.jpg'
import imgHeadshotMikeMyers3x from './headshot-mike-myers-3x.jpg'
import imgHeadshotMitchellGrenier from './headshot-mitchell-grenier.jpg'
import imgHeadshotMitchellGrenier2x from './headshot-mitchell-grenier-2x.jpg'
import imgHeadshotMitchellGrenier3x from './headshot-mitchell-grenier-3x.jpg'
import imgHeadshotNickAnderson from './headshot-nick-anderson.png'
import imgHeadshotNickAnderson2x from './headshot-nick-anderson-2x.png'
import imgHeadshotNickAnderson3x from './headshot-nick-anderson-3x.png'
import imgHeadshotRobFry from './headshot-rob-fry.jpg'
import imgHeadshotRobFry2x from './headshot-rob-fry-2x.jpg'
import imgHeadshotRobFry3x from './headshot-rob-fry-3x.jpg'
import imgHeadshotTeddyReed from './headshot-ted-reed.jpg'
import imgHeadshotTeddyReed2x from './headshot-ted-reed-2x.jpg'
import imgHeadshotTeddyReed3x from './headshot-ted-reed-3x.jpg'
import imgHeroLogo from './querycon-large.svg'
import imgMikeStage1 from './mike-stage-1.png'
import imgOrbitz from './orbitz.svg'
import imgPalaceOfFineArtsPoster from './palace-fine-arts.jpg'
import imgPaperAirplane from './paper-airplane.svg'
import imgTwitterBird from './twitter-bird.svg'
import imgVenue from './palace-fine-arts.svg'
import rightArrow from './right-facing-arrow.svg'
import MainSpeaker from '../components/MainSpeaker'
import MediaLinks from '../components/MediaLinks'
import MobileHeader from '../components/MobileHeader'
import ProminentCta from '../components/ProminentCta'
import RegistrationTiles from '../components/RegistrationTiles'
import SpeakerTile from '../components/SpeakerTile'
import styles from './index.module.scss'
import videoPalaceOfFineArtsMp4 from './palace-fine-arts.mp4'
import videoPalaceOfFineArtsWebM from './palace-fine-arts.webm'
import Videos from '../components/Videos'
import { MOBILE_WIDTH } from '../util/constants'

const cx = classNames.bind(styles)

const IndexPage = () => (
  <div className={styles.pageWrapper}>
    <Helmet>
      <title>QueryCon18</title>
      <meta name="description" content="An osquery conference" />
    </Helmet>

    <section className={styles.heroSection}>
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

      <div className={styles.heroContent}>
        <MediaQuery minWidth={MOBILE_WIDTH + 1}>
          <Header />
        </MediaQuery>

        <MediaQuery maxWidth={MOBILE_WIDTH}>
          <MobileHeader />
        </MediaQuery>

        <h1 className={styles.header}>QueryCon 2018</h1>
        <div className={styles.heroLogo}>
          <img alt="" src={imgHeroLogo} />
        </div>
        <h2 className={styles.subHeader}>An osquery conference by Kolide</h2>
        <h3 className={styles.subSubHeader}>San Francisco | May 31 - Jun 1</h3>
      </div>
    </section>

    <div className={styles.ctaBar}>
      <MediaQuery minWidth={MOBILE_WIDTH + 1}>
        <p className={styles.ctaBarText}>
          QueryCon 2018 was an awesome success! We {`can't`} wait for next year.
        </p>
      </MediaQuery>
    </div>

    <MediaQuery maxWidth={MOBILE_WIDTH}>
      <h2 className={styles.supplementaryHeader}>QueryCon18</h2>
    </MediaQuery>

    <h2 className={cx(styles.sectionHeader, styles.sectionHeaderExtraRoom)}>
      QueryCon 2018 Videos
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
        src="https://www.youtube.com/watch?v=RVNEUqgwv5A"
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

    <Videos />

    <div className={styles.sectionBreak} />

    <p className={styles.leader}>
      Join us for a 2-day <strong>Osquery</strong> conference at the{' '}
      <strong>Palace of Fine Arts Innovation Hangar</strong> focused on bringing
      security, devops, macadmins, and other experts in the Osquery community
      together. With talks from industry juggernauts and the{' '}
      <strong>creators of Osquery</strong>, discussion will focus on emergent
      topics that affect the landscape {`&`} development of Osquery.
    </p>

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

    <div className={styles.kolideBanner}>
      <span className={styles.kolideBannerText}>
        QueryCon18 brought to you by Kolide
      </span>
    </div>

    <h2 className={styles.reserve}>Reserve your seat for QueryCon18 now!</h2>
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

    <div className={styles.sectionBreak} id="speakers" />

    <h2 className={styles.sectionHeader}>Featured Speakers</h2>

    <div className={styles.sectionSubheader}>
      We are bringing the brightest and best of the Osquery community together.
    </div>

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

      <SpeakerTile
        company="Trail of Bits"
        image={imgHeadshotLaurenPearl}
        image2x={imgHeadshotLaurenPearl2x}
        image3x={imgHeadshotLaurenPearl3x}
        name="Lauren Pearl"
        title="Head of Strategy and Ops"
      />

      <SpeakerTile
        company="JASK"
        image={imgHeadshotRobFry}
        image2x={imgHeadshotRobFry2x}
        image3x={imgHeadshotRobFry3x}
        name="Rob Fry"
        title="Security Leader"
      />

      <SpeakerTile
        company="Palantir"
        image={imgHeadshotChrisLong}
        image2x={imgHeadshotChrisLong2x}
        image3x={imgHeadshotChrisLong3x}
        name="Chris Long"
        title="Security Engineer"
      />

      <SpeakerTile
        company="Facebook"
        image={imgHeadshotTeddyReed}
        image2x={imgHeadshotTeddyReed2x}
        image3x={imgHeadshotTeddyReed3x}
        name="Teddy Reed"
        title="Security Engineering Manager"
      />

      <SpeakerTile
        company="Stripe"
        image={imgHeadshotBenHughes}
        image2x={imgHeadshotBenHughes2x}
        image3x={imgHeadshotBenHughes3x}
        name="Ben Hughes"
        title="Security Engineer"
      />

      <SpeakerTile
        company="Trail of Bits"
        image={imgHeadshotMikeMyers}
        image2x={imgHeadshotMikeMyers2x}
        image3x={imgHeadshotMikeMyers3x}
        name="Mike Myers"
        title="Security Researcher"
      />

      <SpeakerTile
        company="Facebook"
        image={imgHeadshotMitchellGrenier}
        image2x={imgHeadshotMitchellGrenier2x}
        image3x={imgHeadshotMitchellGrenier3x}
        name="Mitchell Grenier"
        title="Security Engineer"
      />
    </div>

    <div className={styles.genericBanner}>
      <Link to="/program#speakers">
        See The Full Program <img src={rightArrow} />
      </Link>
    </div>

    <h2 id="location" className={styles.sectionHeader}>
      The Venue
    </h2>

    <div className={styles.sectionSubheader}>
      Palace of the Fine Arts Innovation Hangar - San Francisco, CA
    </div>

    <div className={styles.venueImage}>
      <img alt="" className={styles.responsiveImage} src={imgVenue} />
    </div>

    <p className={styles.venueDescription}>
      QueryCon18 will be held at the Palace of the Fine Arts Innovation Hangar,
      minutes away from the Golden Gate Bridge. Parking will be validated for
      all conference goers.
    </p>

    <a href="https://goo.gl/maps/jbcmsmERrUJ2">
      <div className={styles.venueMap} />
    </a>

    <div className={styles.genericBanner}>Not sure where to stay?</div>

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
        href="http://www.twitter.com/queryconf"
      />

      <ProminentCta
        heading="Contact Us"
        icon={imgPaperAirplane}
        href="mailto:info@querycon.io"
      />
    </div>

    <Footer />
  </div>
)

export default IndexPage
