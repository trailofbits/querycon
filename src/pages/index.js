import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Header from '../components/Header'
import imgMikeStage1 from './mike-stage-1.png'
import RegisterButton from '../components/RegisterButton'
import RegistrationTiles from '../components/RegistrationTiles'
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
      <p className={styles.ctaBarText}>Interested in attending? Space is limited, reserve your spot!</p>
      <RegisterButton className={styles.ctaBarRegisterButton} />
    </div>

    <p className={styles.leader}>
      <span className={styles.bigCharacter}>Q</span>
      ueryCon is a 2 day <strong>osquery</strong> conference at the <strong>Palace of Fine Arts</strong> focused on bringing security, devops, macadmins and other experts in the <strong>osquery</strong> community together. With talks from industry juggernauts and the creators of osquery, discussion will focus on emergent topics that affect the landscape &amp; development of osquery.
    </p>

    <div className={styles.leaderSub}>
      <div className={styles.leaderSub1}>
        <h3>Osquery Expertise for Big and Small</h3>
        <p>
          We&apos;ve brought together the biggest names in the osquery community to speak and discuss on a variety of use-cases and issues. No matter whether you are an osquery expert or are installing it for the first time there is something for you.
        </p>
      </div>

      <div className={styles.leaderSub2}>
        <img className={styles.responsiveImage} src={imgMikeStage1} alt="Mike Arpaia" />
      </div>
    </div>

    <div className={styles.kolideBanner}>QueryCon18 brought to you by Kolide</div>
    <h2 className={styles.reserve}>Reserve your seat for QueryCon18 now!</h2>
    <div className={styles.reserveSub}>Only 140 seats remaining</div>

    <RegistrationTiles />
  </div>
)

export default IndexPage
