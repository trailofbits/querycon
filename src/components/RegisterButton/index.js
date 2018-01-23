import React from 'react'
import classNames from 'classnames'

import styles from './register-button.module.scss'

const cx = classNames.bind(styles)

const RegisterButton = ({ className }) => {
  const linkClasses = cx(styles.registerButton, className)

  return <a href="" className={linkClasses}>Register Now</a>
}

export default RegisterButton
