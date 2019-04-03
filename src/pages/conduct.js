import React from 'react'
import Helmet from 'react-helmet'

import Button from '../components/buttons/Button'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MobileHeader from '../components/MobileHeader'
import Paragraph from '../components/Paragraph'
import styles from './conduct.module.scss'

const CodeOfConduct = () => (
  <div>
    <Helmet>
      <title>QueryCon19 - Code of Conduct</title>
      <meta name="description" content="Code of Conduct" />
    </Helmet>
    <div>
      <div className={styles.desktop}>
        <Header dark />
      </div>
      <div className={styles.mobile}>
        <MobileHeader />
      </div>
    </div>

    {/* TODO: Update Conduct when ready}
    <div className={styles.heroSection}>
      <div className={styles.header}>Code of Conduct</div>
      <img
        alt=""
        className={styles.heroImage}
        src={require('./code-of-conduct.svg')}
      />
      <div className={styles.contactUsBar}>
        <span className={styles.contactUsContent}>
          Have a concern? {"Don't"} hesitate to reach out:
        </span>
        <Button
          url="mailto:info@querycon.io"
          className={styles.contactUsButton}
        >
          Contact Us
        </Button>
      </div>
    </div>
    {*/}

    {/* TODO: delete me eventually! */}
    <div className={styles.heroSection}>
      <div className={styles.header}>Coming Soon!</div>
    </div>

    {/* TODO: Update Conduct when ready}
    <div className={styles.policies}>
      <div className={styles.containerTitle}>QueryCon Code of Conduct</div>
      <div className={styles.policyContent}>
        <Paragraph>
          All delegates, speakers, sponsors and volunteers at any QueryCon or
          Kolide event are required to agree with the following code of conduct.
          Organizers will enforce this code throughout the event.
        </Paragraph>
      </div>

      <div className={styles.policiesContainer}>
        <div className={styles.policyTitle}>The Quick Version</div>
        <div className={styles.policyContent}>
          <Paragraph>
            QueryCon and Kolide are dedicated to providing a harassment-free
            conference experience for everyone, regardless of gender, gender
            identity and expression, age, sexual orientation, disability,
            physical appearance, body size, race, ethnicity, religion (or lack
            thereof), or technology choices.
          </Paragraph>
          <Paragraph>
            We do not tolerate harassment of conference participants in any
            form. Sexual language and imagery is not appropriate for any
            conference venue, including talks, workshops, parties, Twitter and
            other online media. Conference participants violating these rules
            may be sanctioned or expelled from the conference without a refund
            at the discretion of the conference organisers.
          </Paragraph>
        </div>
        <div className={styles.policyTitle}>The Less Quick Version</div>
        <div className={styles.policyContent}>
          <Paragraph>
            Harassment includes offensive verbal comments related to gender,
            gender identity and expression, age, sexual orientation, disability,
            physical appearance, body size, race, ethnicity, religion,
            technology choices, sexual images in public spaces, deliberate
            intimidation, stalking, following, harassing photography or
            recording, sustained disruption of talks or other events,
            inappropriate physical contact, and unwelcome sexual attention.
          </Paragraph>
          <Paragraph>
            Participants asked to stop any harassing behavior are expected to
            comply immediately.
          </Paragraph>
          <Paragraph>
            Sponsors are also subject to the anti-harassment policy. In
            particular, sponsors should not use sexualized images, activities,
            or other material. Booth staff (including volunteers) should not use
            sexualized clothing/uniforms/costumes, or otherwise create a
            sexualized environment.
          </Paragraph>
          <Paragraph>
            If a participant engages in harassing behavior, the conference
            organizers may take any action they deem appropriate, including
            warning the offender or expulsion from the conference with no
            refund.
          </Paragraph>
          <Paragraph>
            If you are being harassed, notice that someone else is being
            harassed, or have any other concerns, please contact a member of
            conference staff immediately.
          </Paragraph>
          <Paragraph>
            Conference staff will be happy to help participants contact
            hotel/venue security or local law enforcement, provide escorts, or
            otherwise assist those experiencing harassment to feel safe for the
            duration of the conference. We value your attendance.
          </Paragraph>
          <Paragraph>
            We expect participants to follow these rules at all conference
            venues and conference-related social events.
          </Paragraph>
          <div className={styles.contentParagraphSource}>
            Original source and credit:{' '}
            <a
              className={styles.inlineLink}
              href="http://2012.jsconf.us/#/about"
              rel="noopener noreferrer"
              target="_blank"
            >
              http://2012.jsconf.us/#/about
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.borderBottom} />

    <div className={styles.contactUsContainer}>
      <img
        alt=""
        className={styles.bottomImage}
        src={require('./paper-airplane.svg')}
      />

      <div className={styles.bottomText}>
        <div>Still have questions about QueryCon?</div>
        <div>{"Don't"} hesitate to reach out and ask!</div>
      </div>

      <Button url="mailto:info@querycon.io" className={styles.bottomButton}>
        Contact Us
      </Button>
    </div>
    {*/}

    <Footer />
  </div>
)

export default CodeOfConduct
