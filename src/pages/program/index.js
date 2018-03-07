import React, { Component } from 'react'
import Helmet from 'react-helmet'
import MediaQuery from 'react-responsive'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import MobileHeader from '../../components/MobileHeader'
import Tab from '../../components/Tab'
import Keynotes from '../../components/Keynotes'
import Speakers from '../../components/Speakers'
import Workshop from '../../components/Workshop'
import styles from './program.module.scss'
import { DESKTOP_MIN_WIDTH, MOBILE_WIDTH } from '../../util/constants'

const KEYNOTES = 'keynotes'
const SPEAKERS = 'speakers'
const WORKSHOP = 'workshop'

class ProgramPage extends Component {
  componentWillMount() {
    this.setState({ activeTab: this.activeTab })
  }

  get activeTab() {
    const hashLocation = this.props.location.hash.replace('#', '')

    if (hashLocation === SPEAKERS || hashLocation === WORKSHOP) {
      return hashLocation
    } else {
      return KEYNOTES
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
          <title>QueryCon18 - Program</title>
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
            active={activeTab === KEYNOTES}
            onClick={this.showContent(KEYNOTES)}
            size="large"
            text="Keynotes"
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
  } else {
    return <Keynotes id={KEYNOTES} />
  }
}

export default ProgramPage
