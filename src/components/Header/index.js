import React from 'react'

import Nav from '../Nav'
import RegisterButton from '../buttons/RegisterButton'
import TextLogo from '../TextLogo'

import styles from './header.module.scss'

const Header = () => (
  <div className={styles.header}>
    <TextLogo />

    <div className={styles.navigation}>
      <Nav />

      <RegisterButton className={styles.registerButton} />
    </div>
  </div>
)

export default Header
