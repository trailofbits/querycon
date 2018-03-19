import React, { Component } from 'react'

import HamburgerMenu from './HamburgerMenu'
import styles from './mobile-nav.module.scss'

class MobileNav extends Component {
  state = {
    open: false,
  }

  closeNav = () => {
    this.setState({ open: false })
  }

  openNav = () => {
    this.setState({ open: true })
  }

  handleClick = path => () => {
    this.closeNav()
    global.window.location = path
  }

  render() {
    const { open } = this.state
    const { className } = this.props

    if (open) {
      return (
        <div className={styles.mobileNav}>
          <button className={styles.close} onClick={this.closeNav}>
            <div className={styles.closeBarA} />
            <div className={styles.closeBarB} />
          </button>

          <div className={styles.navItems}>
            <button
              className={styles.link}
              onClick={this.handleClick('/')}
            >
              Home
            </button>

            <button
              className={styles.link}
              onClick={this.handleClick('/program')}
            >
              Program
            </button>

            <button
              className={styles.link}
              onClick={this.handleClick('/conduct')}
            >
              Conduct
            </button>

            <button
              className={styles.link}
              onClick={this.handleClick('/faq')}
            >
              FAQs
            </button>
          </div>
        </div>
      )
    } else {
      return <HamburgerMenu className={className} onClick={this.openNav} />
    }
  }
}

export default MobileNav
