import React, { Component } from 'react'
import Helmet from 'react-helmet'
import MediaQuery from 'react-responsive'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import MobileHeader from '../../components/MobileHeader'
import Schedule from '../../components/Schedule'
import Social from '../../components/Social'
import Speakers from '../../components/Speakers'
import Tab from '../../components/Tab'
import Workshop from '../../components/Workshop'
import styles from './program.module.scss'
import { DESKTOP_MIN_WIDTH, MOBILE_WIDTH } from 'util/constants'

const SCHEDULE = 'schedule'
const SPEAKERS = 'speakers'
const WORKSHOP = 'workshop'
const SOCIAL = 'social'

class ProgramPage extends Component {
  componentWillMount() {
    this.setState({ activeTab: this.activeTab })
  }

  get activeTab() {
    const hashLocation = this.props.location.hash.replace('#', '')

    if (hashLocation === SPEAKERS || hashLocation === WORKSHOP || hashLocation === SOCIAL) {
      return hashLocation
    } else {
      return SCHEDULE
    }
  }

  showContent = tabName => () => {
    window.location.hash = tabName
    this.setState({ activeTab: tabName })
  }

  render() {
    const { activeTab } = this.state

    return (
      <div className={styles.content}>
        <Helmet>
          <title>QueryCon19 - Program</title>
          <meta name="description" content="Program" />
        </Helmet>

        <MediaQuery minWidth={DESKTOP_MIN_WIDTH}>
          <Header dark />
        </MediaQuery>

        <MediaQuery maxWidth={MOBILE_WIDTH}>
          <MobileHeader />
        </MediaQuery>

        <h2 className={styles.h2}>Program</h2>

        <div className={styles.tabs}>
          <Tab
            active={activeTab === SCHEDULE}
            onClick={this.showContent(SCHEDULE)}
            size="large"
            text="Schedule"
          />
          <Tab
            active={activeTab === SPEAKERS}
            onClick={this.showContent(SPEAKERS)}
            size="large"
            text="Speakers"
          />

          <Tab
            active={activeTab === WORKSHOP}
            onClick={this.showContent(WORKSHOP)}
            size="large"
            text="Workshop"
          />

          <Tab
            active={activeTab === SOCIAL}
            onClick={this.showContent(SOCIAL)}
            size="large"
            text="Social"
          />          
        </div>

        <div className={styles.sectionBreak} />

        <ProgramSections activeTab={activeTab} />
        

        <Footer />
      </div>
    )
  }
}

const ProgramSections = ({ activeTab }) => {
  if (activeTab === WORKSHOP) {
    return <Workshop id={WORKSHOP} />
  } else if (activeTab === SPEAKERS) {
    return <Speakers id={SPEAKERS} />
  } else if (activeTab === SOCIAL) {
    return <Social id={SOCIAL} />
  } else {
    return <Schedule id={SCHEDULE} />
  }
}

export default ProgramPage
