import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Button from '../components/buttons/Button'
import FeatureTile from '../components/FeatureTile'
import Header from '../components/Header'
import imgHeadshotBenHughes from './headshot-ben-hughes.jpg'
import imgHeadshotChristopherLong from './headshot-christopher-long.jpg'
import imgHeadshotLaurenPearl from './headshot-lauren-pearl.jpg'
import imgHeadshotMike from './headshot-mike.jpg'
import imgMikeStage1 from './mike-stage-1.png'
import imgMegaphone from './megaphone.svg'
import imgVenue from './palace-fine-arts.svg'
import MainSpeaker from '../components/MainSpeaker'
import RegisterButton from '../components/RegisterButton'
import RegistrationTiles from '../components/RegistrationTiles'
import SpeakerTile from '../components/SpeakerTile'
import styles from './index.module.scss'

const IndexPage = () => (
  <div>
    <Helmet>
      <title>QueryCon18</title>
      <meta name="description" content="An osquery conference" />
    </Helmet>

    <section className={styles.heroSection}>
      <Header />
      <h1 className={styles.header}>QueryCon 2018</h1>
      <h2 className={styles.subHeader}>An osquery conference</h2>
      <h3 className={styles.subSubHeader}>San Francisco | May 31 - Jun 1</h3>
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
          We&apos;ve brought together the biggest names in the osquery community
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

    <div className={styles.venueMap} />

    <div className={styles.genericBanner}>Not sure where to stay?</div>
  </div>
)

export default IndexPage
