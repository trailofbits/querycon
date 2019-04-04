import React from 'react'
import classNames from 'classnames'

import styles from './register-button.module.scss'

const cx = classNames.bind(styles)

const RegisterButton = ({ className, disabled }) => {
  const linkClasses = cx(styles.registerButton, className)

  if (disabled) {
    return <div className={linkClasses}>Register</div>
  } else {
    return <a href="https://www.eventbrite.com/e/querycon-2019-tickets-59900912241" className={linkClasses}>Register Now</a>
  }
}

export default RegisterButton
