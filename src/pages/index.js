import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Button from '../components/buttons/Button'
import FeatureTile from '../components/FeatureTile'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MainSpeaker from '../components/MainSpeaker'
import MediaCarousel from '../components/MediaCarousel'
import imgAirbnb from './airbnb.svg'
import imgExpedia from './expedia.svg'
import imgHeadshotBenHughes from './headshot-ben-hughes.jpg'
import imgHeadshotChristopherLong from './headshot-christopher-long.jpg'
import imgHeadshotLaurenPearl from './headshot-lauren-pearl.jpg'
import imgHeadshotMike from './headshot-mike.jpg'
import imgHeroLogo from './querycon-large.svg'
import imgMegaphone from './megaphone.svg'
import imgMikeStage1 from './mike-stage-1.png'
import imgOrbitz from './orbitz.svg'
import imgPalaceOfFineArtsPoster from './palace-fine-arts.png'
import imgVenue from './palace-fine-arts.svg'
import ProminentCta from '../components/ProminentCta'
import RegisterButton from '../components/RegisterButton'
import RegistrationTiles from '../components/RegistrationTiles'
import SpeakerTile from '../components/SpeakerTile'
import styles from './index.module.scss'
import videoPalaceOfFineArtsMp4 from './palace-fine-arts.mp4'

const IndexPage = () => (
  <div className={styles.pageWrapper}>
    <Helmet>
      <title>QueryCon18</title>
      <meta name="description" content="An osquery conference" />
    </Helmet>

    <section className={styles.heroSection}>
      <div className={styles.videoBackground}>
        <video
          loop
          muted
          autoPlay
          className={styles.video}
          poster={imgPalaceOfFineArtsPoster}
        >
          <source src={videoPalaceOfFineArtsMp4} type="video/mp4" />
        </video>
      </div>

      <div className={styles.heroContent}>
        <Header />
        <h1 className={styles.header}>QueryCon 2018</h1>
        <div className={styles.heroLogo}>
          <img alt="" src={imgHeroLogo} />
        </div>
        <h2 className={styles.subHeader}>An osquery conference by Kolide</h2>
        <h3 className={styles.subSubHeader}>San Francisco | May 31 - Jun 1</h3>
      </div>
    </section>

    <div className={styles.ctaBar}>
      <p className={styles.ctaBarText}>
        Interested in attending? Space is limited, reserve your spot!
      </p>
      <RegisterButton className={styles.ctaBarRegisterButton} />
    </div>

    <p className={styles.leader}>
      <span className={styles.bigCharacter}>Q</span>
      ueryCon is a 2 day <strong>osquery</strong> conference at the{' '}
      <strong>Palace of Fine Arts</strong> focused on bringing security, devops,
      macadmins and other experts in the <strong>osquery</strong> community
      together. With talks from industry juggernauts and the creators of
      osquery, discussion will focus on emergent topics that affect the
      landscape &amp; development of osquery.
    </p>

    <div className={styles.leaderSub}>
      <div className={styles.leaderSub1}>
        <h3>Osquery Expertise for Big and Small</h3>
        <p>
          {`We've`} brought together the biggest names in the osquery community
          to speak and discuss on a variety of use-cases and issues. No matter
          whether you are an osquery expert or are installing it for the first
          time there is something for you.
        </p>
      </div>

      <div className={styles.leaderSub2}>
        <img
          className={styles.responsiveImage}
          src={imgMikeStage1}
          alt="Mike Arpaia"
        />
      </div>
    </div>

    <div className={styles.kolideBanner}>
      QueryCon18 brought to you by Kolide
    </div>
    <h2 className={styles.reserve}>Reserve your seat for QueryCon18 now!</h2>
    <div className={styles.reserveSub}>Only 140 seats remaining</div>

    <RegistrationTiles />

    <h2 className={styles.passDescription}>
      Your pass gets you all of the following:
    </h2>

    <div className={styles.passFeatures}>
      <FeatureTile title="Full Access 2 Day Conference" url="">
        Kolide provides security professionals the interface and tooling to
        deploy and manage osquery across every endpoint in your organization.
      </FeatureTile>

      <FeatureTile title="After Hours Cocktail Party" url="">
        Kolide utilizes the the latest standard in securing your data. We
        encourage you to look at our feature-set and see how seriously we take
        your security.
      </FeatureTile>

      <FeatureTile title="Entry to Osquery Hackathon" url="">
        At Kolide we practice what we preach. See how we handle our own internal
        security by implementing industry standard best practices.
      </FeatureTile>
    </div>

    <div className={styles.sectionBreak} />

    <h2 className={styles.sectionHeader}>The Speakers</h2>

    <div className={styles.sectionSubheader}>
      We are bringing the brightest and best of the osquery community together.
    </div>

    <MainSpeaker
      company="Facebook"
      image="https://www.kepplerspeakers.com/carter-j.jpg"
      name="Nick Anderson"
      presentation="Deploying osquery at scale in massive production environments"
      title="Senior Security Engineer"
    />

    <div className={styles.speakers}>
      <SpeakerTile
        company="Stripe"
        image={imgHeadshotBenHughes}
        name="Ben Hughes"
        title="Co-Founder & CTO"
      />

      <SpeakerTile
        company="Kolide"
        image={imgHeadshotMike}
        name="Mike Arpaia"
        title="Co-Founder & CTO"
      />

      <SpeakerTile
        company="Trail of Bits"
        image={imgHeadshotLaurenPearl}
        name="Lauren Pearl"
        title="Security Engineer"
      />

      <SpeakerTile
        company="Palantir"
        image={imgHeadshotChristopherLong}
        name="Christoper Long"
        title="Chief Security Specialist"
      />
    </div>

    <div className={styles.genericBanner}>And many more!</div>

    <h2 className={styles.speakerSubmissionsHeader}>Interested in Speaking?</h2>

    <div className={styles.megaphoneImage}>
      <img alt="" className={styles.responsiveImage} src={imgMegaphone} />
    </div>

    <p className={styles.speakerSubmissionsDescription}>
      There is limited space remaining for speakers. Apply below to speak at
      <strong> QueryCon18</strong>
    </p>

    <Button className={styles.speakerSubmissionButton} url="#">
      Apply Now
    </Button>

    <div className={styles.sectionBreak} />

    <h2 className={styles.sectionHeader}>The Venue</h2>

    <div className={styles.sectionSubheader}>
      Palace of the Fine Arts - San Francisco, CA
    </div>

    <div className={styles.venueImage}>
      <img alt="" className={styles.responsiveImage} src={imgVenue} />
    </div>

    <p className={styles.venueDescription}>
      QueryCon18 will be held at the Palace of the Fine Arts, minutes away from
      the Golden Gate Bridge. Parking will be validated for all conference
      goers.
    </p>

    <a href="https://goo.gl/maps/jbcmsmERrUJ2">
      <div className={styles.venueMap} />
    </a>

    <div className={styles.genericBanner}>Not sure where to stay?</div>

    <div className={styles.lodgingOptions}>
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

    <div className={styles.sectionBreak} />

    <h2 className={styles.sectionHeader}>Pre-Conference Learning</h2>

    <div className={styles.sectionSubheader}>
      Brush up on your osquery understanding with some of the resources below:
    </div>

    <div className={styles.preConfMain}>
      <video
        className={styles.preConfMainVideo}
        controls
        poster={imgPalaceOfFineArtsPoster}
      >
        <source src={videoPalaceOfFineArtsMp4} type="video/mp4" />
      </video>

      <div>
        <h3 className={styles.preConfMainTitle}>
          Introduction to Using Osquery
        </h3>

        <p className={styles.preConfMainDescription}>
          {`We've`} brought together the biggest names in the osquery community to
          speak and discuss on a variety of use-cases and issues. No matter
          whether you are an osquery expert or are installing it for the first
          time there is something for you.
        </p>
      </div>
    </div>

    <MediaCarousel />

    <Footer />
  </div>
)

export default IndexPage
