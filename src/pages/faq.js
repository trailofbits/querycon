import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import MediaQuery from 'react-responsive'

import Footer from '../components/Footer'
import Header from '../components/Header'
import MobileHeader from '../components/MobileHeader'
import Question from '../components/Question'
import styles from './faq.module.scss'

const MOBILE_MAX_WIDTH = 800
const DESKTOP_MIN_WIDTH = 801
const questions = [
  {
    question: 'When does the conference start on May 31st? When does it end on June 1st?',
    answer: 'On the first day, there will be check-ins and breakfast starting at 9:00 AM. Open remarks begin at 10:00 AM, and the first presentation will begin around 10:30 AM. The conference portion of the day will end at 4:00 PM, when people can make their way to the after-hours event, which will begin at 5:00 PM. On June 1st, presentations will be complete at noon, and our Community Day will commence after lunch, and wrap up at 4:00 PM.',
  },
  {
    question: 'Is breakfast provided? What about lunch and dinner?',
    answer: 'We will provide a light breakfast on both days at 9:00 AM until 9:45 AM. We also provide a full lunch and afternoon snack, but not dinner. Light appetizers and beverages will be served at the after-hours social event on Thursday. Coffee, tea, and water are served throughout both conference days.',
  },
  {
    question: 'Are there any ticket discounts available?',
    answer: 'In addition to our Early Bird special (Ends March 31st), we offer a group discount for those purchasing 5-10 tickets at once. No code is necessary for this, just choose that option when registering.',
  },
  {
    question: 'Can I buy a ticket for just one day?',
    answer: 'No, tickets can only be purchased for the whole conference at once.',
  },
  {
    question: 'Will you have any tutorial- or workshop-only days?',
    answer: 'We will feature a Community Day that will be similar to a workshop style session at QueryCon2018. This will occur in the afternoon on the second day.',
  },
  {
    question: 'How far away is the conference venue from the airport?',
    answer: 'Approximately 20 miles from the airport, in San Francisco’s Marina/Presidio district.',
  },
  {
    question: 'Can I sponsor this conference?',
    answer: 'We are not accepting any sponsors.',
  },
  {
    question: 'Can I submit a talk about a commercial product?',
    answer: 'No, our goal is to ensure all talks center around open-source tools that attendees can easily utilize all of the available tools and software discussed in our speaker’s presentations. Please refrain from submitting talks that advertise, demo or heavily discuss any Osquery commercial offerings.',
  },
  {
    question: 'Is this an official Facebook conference?',
    answer: 'While core members of Facebook’s Osquery team are attending and giving great talks, the conference is organized by Kolide, Inc.',
  },
  {
    question: 'Do you offer refunds for tickets?',
    answer: 'No. We do not offer partial or full refunds for tickets.',
  }
]

const FAQ = () => {
  return (
    <div>
      <Helmet>
        <title>QueryCon18 - FAQs</title>
        <meta name="description" content="Frequently Asked Questions" />
      </Helmet>
      <MediaQuery minWidth={DESKTOP_MIN_WIDTH}>
        <Header />
      </MediaQuery>

      <MediaQuery maxWidth={MOBILE_MAX_WIDTH}>
        <MobileHeader />
      </MediaQuery>

      <div className={styles.heroSection}>
        <div className={styles.header}>
          Frequently Asked Questions
        </div>
        <img className={styles.heroImage} src={require('./faq-image.svg')} />
        <div className={styles.contactUsBar}>
          <span className={styles.contactUsContent}>
            Don't see your question below? Don't hesitate to reach out:
          </span>
          <a href="mailto:info@querycon.io" className={styles.contactUsButton}>Contact Us</a>
        </div>
      </div>

      <div className={styles.questions}>
        {questions.map((question, index) => (
          <Question
            answer={question.answer}
            key={index}
            question={question.question}
          />
        )
      )}
      </div>

      <div className={styles.borderBottom} />

      <div className={styles.contactUsContainer}>
        <img className={styles.bottomImage} src={require('./paper-airplane.svg')} />

        <div className={styles.bottomText}>
          <div>Still have questions about QueryCon?</div>
          <div>Don't hesitate to reach out and ask!</div>
        </div>

        <a href="mailto:info@querycon.io" className={styles.bottomButton}>Contact Us</a>
      </div>

      <Footer />
    </div>
  )
}

export default FAQ
