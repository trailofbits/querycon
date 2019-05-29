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
    questionLine1: 'When does the conference start on June 20th?',
    questionLine2: 'When does it end on June 21st?',
    answer:
      'On the first day, there will be check-ins and light breakfast starting at 8:30 AM. We will have a brief introduction at 9:30 AM, and the first presentation will begin around 10:00 AM. The conference portion of the day will end around 4:30 PM, when people can make their way to the after-hours event, which will begin at 5:00 PM. On June 21st, presentations will be complete at noon, and our Community Workshop will commence after lunch, and wrap up at 4:00 PM.',
  },
  {
    questionLine1: 'Is breakfast provided? What about lunch and dinner?',
    answer:
      'We will provide a coffee bar on both days from 8:30 AM until 9:00 AM. We also provide a light lunch and access to snacks throughout both conference days. Food and drink will be served at the after-hours social event at <a href="https://www.mailroomnyc.com/" target="_blank">Mailroom</a>.',
  },
  {
    questionLine1: 'Are there any ticket discounts available?',
    answer:
      'We offer several discounts, including a press pass (just choose this option when registering), an academic discount for students or faculty, and a group discount of 25% for those purchasing 5-10 tickets at once. Inquire with us at our contact email for the relevant discount codes to use when purchasing.',
  },
  {
    questionLine1: 'Can I buy a ticket for just one day?',
    answer:
      'No, tickets can only be purchased for the whole conference at once.',
  },
  {
    questionLine1: 'Will this event be recorded?',
    answer:
      'Yes. The presentations as well as portions of the community workshop will be recorded and shared after the event.',
  },
  {
    questionLine1: 'Will there be a live stream of the event?',
    answer:
      'No. There will not be a live stream of the event, but we will be posting recordings of the talks as well as interesting content from the community workshop after the event.',
  },
  {
    questionLine1: 'Will you have any tutorial or workshop-only days?',
    answer:
      'We will feature a Community Workshop that will be similar to the workshop session at QueryCon2018. This will occur in the afternoon on the second day.',
  },
  {
    questionLine1: 'Should I bring a laptop?',
    answer:
      'While you will not need a laptop during the talks, we are holding a Community Workshop in the afternoon of the second day of the conference. This time will be used for hands-on activities, learning, networking, and collaborating with folks in the community. Bring your laptop if you want to participate!',
  },
  {
    questionLine1: 'How far away is the conference venue from the airport?',
    answer:
      'Approximately 14 miles from Newark Liberty International Airport, 16 miles from JFK Airport and 15 miles from LaGuardia Airport.',
  },
  {
    questionLine1: 'Is parking available at the venue?',
    answer:
      'There is parking available at <a href="https://www.parkwhiz.com/p/new-york-parking/90-water-st/?venue_id=47752" target="_blank"> near the venue',
  },
  {
    questionLine1: 'Can I sponsor this conference?',
    answer: 'We are not accepting any additional sponsors at this time.',
  },
  {
    questionLine1: 'Can I submit a talk about a commercial product?',
    answer:
      'No, our goal is to ensure all talks center around open-source tools that attendees can easily utilize all of the available tools and software discussed in our speaker’s presentations. Please refrain from submitting talks that advertise, demo or heavily discuss any osquery commercial offerings.',
  },
  {
    questionLine1: 'Is this an official Facebook conference?',
    answer:
      'No. While members of Facebook’s osquery team are invited to attend and may be present, the conference is organized by Trail of Bits and Kolide.',
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
          <title>QueryCon19 - FAQs</title>
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
              url="mailto:mike.myers@trailofbits.com"
              className={styles.contactUsButton}
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* TODO: delete me eventually */}
        <div className={styles.heroSection}>
          <div className={styles.header}>Coming Soon!</div>
        </div>


        <div className={styles.questions}>
          {questions.map((question) => (
            <Question
              answer={question.answer}
              key={question.questionLine1.replace(/\s/g, '')}
              questionLine1={question.questionLine1}
              questionLine2={question.questionLine2}
            />
          ))}
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

          <Button url="mailto:mike.myers@trailofbits.com" className={styles.bottomButton}>
            Contact Us
          </Button>
        </div>

        <Footer />
      </div>
    )
  }
}

export default FAQ
