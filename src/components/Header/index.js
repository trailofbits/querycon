import React from 'react'

import Nav from '../Nav'
import RegisterButton from '../RegisterButton'
import TextLogo from '../TextLogo'

import styles from './header.module.scss'

const Header = () => (
  <div className={styles.header}>
    <TextLogo />

    <div className={styles.navigation}>
      <Nav />

      <RegisterButton />
    </div>
  </div>
)

export default Header
