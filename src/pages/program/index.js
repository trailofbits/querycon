import React, { Component } from 'react'
import classNames from 'classnames'
import Helmet from 'react-helmet'
import MediaQuery from 'react-responsive'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import MobileHeader from '../../components/MobileHeader'
import Tab from '../../components/Tab'
// import imgHeadshotBenHughes from './headshot-ben-hughes.jpg'
// import imgHeadshotBenHughes2x from './headshot-ben-hughes-2x.jpg'
// import imgHeadshotBenHughes3x from './headshot-ben-hughes-3x.jpg'
// import imgHeadshotChrisLong from './headshot-chris-long.jpg'
// import imgHeadshotChrisLong2x from './headshot-chris-long-2x.jpg'
// import imgHeadshotChrisLong3x from './headshot-chris-long-3x.jpg'
// import imgHeadshotLaurenPearl from './headshot-lauren-pearl.jpg'
// import imgHeadshotLaurenPearl2x from './headshot-lauren-pearl-2x.jpg'
// import imgHeadshotLaurenPearl3x from './headshot-lauren-pearl-3x.jpg'
// import imgHeadshotMikeArpaia from './headshot-mike-arpaia.jpg'
// import imgHeadshotMikeArpaia2x from './headshot-mike-arpaia-2x.jpg'
// import imgHeadshotMikeArpaia3x from './headshot-mike-arpaia-3x.jpg'
// import imgHeadshotMikeMyers from './headshot-mike-myers.jpg'
// import imgHeadshotMikeMyers2x from './headshot-mike-myers-2x.jpg'
// import imgHeadshotMikeMyers3x from './headshot-mike-myers-3x.jpg'
// import imgHeadshotMitchellGrenier from './headshot-mitchell-grenier.jpg'
// import imgHeadshotMitchellGrenier2x from './headshot-mitchell-grenier-2x.jpg'
// import imgHeadshotMitchellGrenier3x from './headshot-mitchell-grenier-3x.jpg'
// import imgHeadshotNickAnderson from './headshot-nick-anderson.png'
// import imgHeadshotNickAnderson2x from './headshot-nick-anderson-2x.png'
// import imgHeadshotNickAnderson3x from './headshot-nick-anderson-3x.png'
// import imgHeadshotRobFry from './headshot-rob-fry.jpg'
// import imgHeadshotRobFry2x from './headshot-rob-fry-2x.jpg'
// import imgHeadshotRobFry3x from './headshot-rob-fry-3x.jpg'
// import imgHeadshotTeddyReed from './headshot-ted-reed.jpg'
// import imgHeadshotTeddyReed2x from './headshot-ted-reed-2x.jpg'
// import imgHeadshotTeddyReed3x from './headshot-ted-reed-3x.jpg'
import Keynotes from '../../components/Keynotes'
import Speakers from '../../components/Speakers'
import Workshop from '../../components/Workshop'
import styles from './program.module.scss'
import { DESKTOP_MIN_WIDTH, MOBILE_WIDTH } from '../../util/constants'

const KEYNOTES = 'keynotes'
const SPEAKERS = 'speakers'
const WORKSHOP = 'workshop'

class ProgramPage extends Component {
  state = {
    activeTab: KEYNOTES,
  }

  componentWillMount() {
    const { hash } = this.props.location
    this.setState({ activeTab: hash.replace('#', '') })
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

        <ProgramSections activeTab={activeTab} />
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
