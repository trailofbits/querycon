import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Button from '../components/buttons/Button'
import CarouselButton from '../components/buttons/CarouselButton'
import FeatureTile from '../components/FeatureTile'
import Header from '../components/Header'
import MainSpeaker from '../components/MainSpeaker'
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

const CAROUSEL_DISPLAY_COUNT = 5
const FORWARD = 'forward'

class IndexPage extends Component {
  state = {
    carouselIndex: 0,
    carouselItemsCount: null,
    carouselX: null,
  }

  componentDidMount() {
    this.setState({
      carouselItemsCount: document
        .getElementById('pre-conf-links')
        .getElementsByTagName('a').length,
      carouselX: this.carousel.getBoundingClientRect().left,
    })
  }

  moveCarousel = direction => () => {
    const { carouselIndex, carouselX } = this.state
    const width = this.carouselLink.getBoundingClientRect().width
    const translatePosition = direction === FORWARD ? -width : width
    const newX = carouselX + translatePosition

    this.carousel.style.setProperty('transform', `translateX(${newX}px)`)

    this.setState({
      carouselIndex:
        direction === FORWARD ? carouselIndex - 1 : carouselIndex + 1,
      carouselX: newX,
    })
  }

  render() {
    const { carouselIndex, carouselItemsCount } = this.state

    return (
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
            <h2 className={styles.subHeader}>
              An osquery conference by Kolide
            </h2>
            <h3 className={styles.subSubHeader}>
              San Francisco | May 31 - Jun 1
            </h3>
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
          <strong>Palace of Fine Arts</strong> focused on bringing security,
          devops, macadmins and other experts in the <strong>osquery</strong>{' '}
          community together. With talks from industry juggernauts and the
          creators of osquery, discussion will focus on emergent topics that
          affect the landscape &amp; development of osquery.
        </p>

        <div className={styles.leaderSub}>
          <div className={styles.leaderSub1}>
            <h3>Osquery Expertise for Big and Small</h3>
            <p>
              We&apos;ve brought together the biggest names in the osquery
              community to speak and discuss on a variety of use-cases and
              issues. No matter whether you are an osquery expert or are
              installing it for the first time there is something for you.
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
        <h2 className={styles.reserve}>
          Reserve your seat for QueryCon18 now!
        </h2>
        <div className={styles.reserveSub}>Only 140 seats remaining</div>

        <RegistrationTiles />

        <h2 className={styles.passDescription}>
          Your pass gets you all of the following:
        </h2>

        <div className={styles.passFeatures}>
          <FeatureTile title="Full Access 2 Day Conference" url="">
            Kolide provides security professionals the interface and tooling to
            deploy and manage osquery across every endpoint in your
            organization.
          </FeatureTile>

          <FeatureTile title="After Hours Cocktail Party" url="">
            Kolide utilizes the the latest standard in securing your data. We
            encourage you to look at our feature-set and see how seriously we
            take your security.
          </FeatureTile>

          <FeatureTile title="Entry to Osquery Hackathon" url="">
            At Kolide we practice what we preach. See how we handle our own
            internal security by implementing industry standard best practices.
          </FeatureTile>
        </div>

        <div className={styles.sectionBreak} />

        <h2 className={styles.sectionHeader}>The Speakers</h2>

        <div className={styles.sectionSubheader}>
          We are bringing the brightest and best of the osquery community
          together.
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

        <h2 className={styles.speakerSubmissionsHeader}>
          Interested in Speaking?
        </h2>

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
          QueryCon18 will be held at the Palace of the Fine Arts, minutes away
          from the Golden Gate Bridge. Parking will be validated for all
          conference goers.
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
          Brush up on your osquery understanding with some of the resources
          below:
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
              We've brought together the biggest names in the osquery community
              to speak and discuss on a variety of use-cases and issues. No
              matter whether you are an osquery expert or are installing it for
              the first time there is something for you. We've brought together
              the biggest names in the osquery community to speak and discuss on
              a variety of use-cases and issues. No matter whether you are an
              osquery expert or are installing it for the first time there is
              something for you:
            </p>
          </div>
        </div>

        <div className={styles.preConfLinks} id="pre-conf-links">
          <CarouselButton
            direction="back"
            displayCount={CAROUSEL_DISPLAY_COUNT}
            index={carouselIndex}
            itemsCount={carouselItemsCount}
            onClick={this.moveCarousel}
          />

          <div className={styles.preConfLinksWrapper}>
            <div
              className={styles.preConfLinksCarousel}
              ref={el => (this.carousel = el)}
            >
              <a
                className={styles.preConfLink}
                href="https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg"
                ref={el => (this.carouselLink = el)}
                target="_blank"
              >
                <img
                  alt=""
                  className={styles.preConfLinkImg}
                  src="https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg"
                />
                <h4 className={styles.preConfLinkTitle}>
                  Incidence Response and Threat Hunting with Osquery
                </h4>
              </a>

              <a
                className={styles.preConfLink}
                href="http://www.catster.com/wp-content/uploads/2017/06/small-kitten-meowing.jpg"
                target="_blank"
              >
                <img
                  alt=""
                  className={styles.preConfLinkImg}
                  src="http://www.catster.com/wp-content/uploads/2017/06/small-kitten-meowing.jpg"
                />
                <h4 className={styles.preConfLinkTitle}>
                  Incidence Response and Threat Hunting with Osquery
                </h4>
              </a>

              <a
                className={styles.preConfLink}
                href="http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg"
                target="_blank"
              >
                <img
                  alt=""
                  className={styles.preConfLinkImg}
                  src="http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg"
                />
                <h4 className={styles.preConfLinkTitle}>
                  Incidence Response and Threat Hunting with Osquery
                </h4>
              </a>

              <a
                className={styles.preConfLink}
                href="http://www.petsworld.in/blog/wp-content/uploads/2014/09/cute-kittens.jpg"
                target="_blank"
              >
                <img
                  alt=""
                  className={styles.preConfLinkImg}
                  src="http://www.petsworld.in/blog/wp-content/uploads/2014/09/cute-kittens.jpg"
                />
                <h4 className={styles.preConfLinkTitle}>
                  Incidence Response and Threat Hunting with Osquery
                </h4>
              </a>

              <a
                className={styles.preConfLink}
                href="https://vetstreet.brightspotcdn.com/dims4/default/beb5999/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F00%2Fea%2F576b21fc4f1482d5ff121dc34623%2FNorwegian-Forest-Cat-AP-ZYVRVP-645sm3614.jpg"
                target="_blank"
              >
                <img
                  alt=""
                  className={styles.preConfLinkImg}
                  src="https://vetstreet.brightspotcdn.com/dims4/default/beb5999/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F00%2Fea%2F576b21fc4f1482d5ff121dc34623%2FNorwegian-Forest-Cat-AP-ZYVRVP-645sm3614.jpg"
                />
                <h4 className={styles.preConfLinkTitle}>
                  Incidence Response and Threat Hunting with Osquery
                </h4>
              </a>

              <a
                className={styles.preConfLink}
                href="http://www.catster.com/wp-content/uploads/2017/05/cat-eating-food-dish-shutterstock_361821539.jpg"
                target="_blank"
              >
                <img
                  alt=""
                  className={styles.preConfLinkImg}
                  src="http://www.catster.com/wp-content/uploads/2017/05/cat-eating-food-dish-shutterstock_361821539.jpg"
                />
                <h4 className={styles.preConfLinkTitle}>
                  Incidence Response and Threat Hunting with Osquery
                </h4>
              </a>
            </div>
          </div>

          <CarouselButton
            direction="forward"
            displayCount={CAROUSEL_DISPLAY_COUNT}
            index={carouselIndex}
            itemsCount={carouselItemsCount}
            onClick={this.moveCarousel}
          />
        </div>
      </div>
    )
  }
}

export default IndexPage
