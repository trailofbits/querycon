import React, { Component } from 'react'
import Helmet from 'react-helmet'
import MediaQuery from 'react-responsive'

import Button from '../components/buttons/Button'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MobileHeader from '../components/MobileHeader'
import Question from '../components/Question'
import styles from './faq.module.scss'
import { DESKTOP_MIN_WIDTH, MOBILE_WIDTH } from '../util/constants'

const questions = [
  {
    questionLine1: 'When does the conference start on May 31st?',
    questionLine2: 'When does it end on June 1st?',
    answer:
      'On the first day, there will be check-ins and breakfast starting at 8:00 AM. Open remarks begin at 9:00 AM, and the first presentation will begin around 10:00 AM. The conference portion of the day will end around 4:30 PM, when people can make their way to the after-hours event, which will begin at 5:00 PM. On June 1st, presentations will be complete at noon, and our Community Day will commence after lunch, and wrap up at 4:00 PM.',
  },
  {
    questionLine1: 'Is breakfast provided? What about lunch and dinner?',
    answer:
      'We will provide a light breakfast on both days at 8:00 AM until 9:00 AM. We also provide a full lunch and snack throughout the day. Coffee, tea, and water are served throughout both conference days. Food and drink will be served at the after-hours social event at <a href="http://www.schroederssf.com/" target="_blank">Schroder\'s Restaurant</a>.',
  },
  {
    questionLine1: 'Are there any ticket discounts available?',
    answer:
      'In addition to our Early Bird special (Ends March 31st), we offer a group discount for those purchasing 5-10 tickets at once. No code is necessary for this, just choose that option when registering.',
  },
  {
    questionLine1: 'Can I buy a ticket for just one day?',
    answer:
      'No, tickets can only be purchased for the whole conference at once.',
  },
  {
    questionLine1: 'Will this event be recorded?',
    answer:
      'Yes. The presentations as well as portions of the community day will be recorded and shared after the event.',
  },
  {
    questionLine1: 'Will there be a live stream of the event?',
    answer:
      'No. There will not be a live stream of the event, but we will be posting recordings of the talks as well as interesting content from the community day after the event.',
  },
  {
    questionLine1: 'Will you have any tutorial or workshop-only days?',
    answer:
      'We will feature a Community Day that will be similar to a workshop style session at QueryCon2018. This will occur in the afternoon on the second day.',
  },
  {
    questionLine1: 'How far away is the conference venue from the airport?',
    answer:
      'Approximately 20 miles from the airport, in San Francisco’s Marina/Presidio district.',
  },
  {
    questionLine1: 'Is parking available at the venue?',
    answer:
      'There is <a href="https://www.google.com/maps/place/Parking+Area/@37.8062268,-122.4484005,18.54z/data=!4m12!1m6!3m5!1s0x808586d4bce240b9:0x3e7cf9a5c17c2c57!2sLittle+Marina+Green+Picnic+Area!8m2!3d37.805771!4d-122.4479267!3m4!1s0x808586d35950766d:0xade0d65df8f7410!8m2!3d37.8065216!4d-122.4477419" target="_blank">a free parking lot</a> in the Little Marina Green picnic area (right next to the venue)',
  },
  {
    questionLine1: 'Can I sponsor this conference?',
    answer: 'We are not accepting any sponsors.',
  },
  {
    questionLine1: 'Can I submit a talk about a commercial product?',
    answer:
      'No, our goal is to ensure all talks center around open-source tools that attendees can easily utilize all of the available tools and software discussed in our speaker’s presentations. Please refrain from submitting talks that advertise, demo or heavily discuss any Osquery commercial offerings.',
  },
  {
    questionLine1: 'Is this an official Facebook conference?',
    answer:
      'While core members of Facebook’s Osquery team are attending and giving great talks, the conference is organized by Kolide, Inc.',
  },
  {
    questionLine1: 'Do you offer refunds for tickets?',
    answer: 'No. We do not offer partial or full refunds for tickets.',
  },
]

class FAQ extends Component {
  componentDidMount() {
    this.node.scrollTop = 0
  }

  render() {
    return (
      <div ref={node => (this.node = node)}>
        <Helmet>
          <title>QueryCon18 - FAQs</title>
          <meta name="description" content="Frequently Asked Questions" />
        </Helmet>
        <MediaQuery minWidth={DESKTOP_MIN_WIDTH}>
          <Header dark />
        </MediaQuery>

        <MediaQuery maxWidth={MOBILE_WIDTH}>
          <MobileHeader />
        </MediaQuery>

        <div className={styles.heroSection}>
          <div className={styles.header}>Frequently Asked Questions</div>
          <img alt="" className={styles.heroImage} src={require('./faq-image.svg')} />
          <div className={styles.contactUsBar}>
            <span className={styles.contactUsContent}>
              {"Don't"} see your question below? {"Don't"} hesitate to reach
              out:
            </span>
            <Button
              url="mailto:info@querycon.io"
              className={styles.contactUsButton}
            >
              Contact Us
            </Button>
          </div>
        </div>

        <div className={styles.questions}>
          {questions.map((question, index) => (
            <Question
              answer={question.answer}
              key={index}
              questionLine1={question.questionLine1}
              questionLine2={question.questionLine2}
            />
          ))}
        </div>

        <div className={styles.borderBottom} />

        <div className={styles.contactUsContainer}>
          <img
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

        <Footer />
      </div>
    )
  }
}

export default FAQ
