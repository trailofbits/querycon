import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import MediaQuery from 'react-responsive'

import Button from '../components/buttons/Button'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MobileHeader from '../components/MobileHeader'
import Question from '../components/Question'
import styles from './faq.module.scss'

const MOBILE_MAX_WIDTH = 800
const DESKTOP_MIN_WIDTH = 801
const questions = [
  {
    questionLine1: 'When does the conference start on May 31st?',
    questionLine2: 'When does it end on June 1st?',
    answer:
      'On the first day, there will be check-ins and breakfast starting at 9:00 AM. Open remarks begin at 10:00 AM, and the first presentation will begin around 10:30 AM. The conference portion of the day will end at 4:00 PM, when people can make their way to the after-hours event, which will begin at 5:00 PM. On June 1st, presentations will be complete at noon, and our Community Day will commence after lunch, and wrap up at 4:00 PM.',
  },
  {
    questionLine1: 'Is breakfast provided? What about lunch and dinner?',
    answer:
      'We will provide a light breakfast on both days at 9:00 AM until 9:45 AM. We also provide a full lunch and afternoon snack, but not dinner. Light appetizers and beverages will be served at the after-hours social event on Thursday. Coffee, tea, and water are served throughout both conference days.',
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
    questionLine1: 'Will you be posting more details about the talks?',
    answer:
      'Yes. Once CFP is closed, and topics have been solidified, we will be announcing more details.',
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
    ReactDOM.findDOMNode(this).scrollTop = 0
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>QueryCon18 - FAQs</title>
          <meta name="description" content="Frequently Asked Questions" />
        </Helmet>
        <MediaQuery minWidth={DESKTOP_MIN_WIDTH}>
          <Header dark />
        </MediaQuery>

        <MediaQuery maxWidth={MOBILE_MAX_WIDTH}>
          <MobileHeader />
        </MediaQuery>

        <div className={styles.heroSection}>
          <div className={styles.header}>Frequently Asked Questions</div>
          <img className={styles.heroImage} src={require('./faq-image.svg')} />
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
