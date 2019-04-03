import React from 'react'
import classNames from 'classnames'

import styles from './register-button.module.scss'

const cx = classNames.bind(styles)

const RegisterButton = ({ className, disabled }) => {
  const linkClasses = cx(styles.registerButton, className)

  if (disabled) {
    {/* TODO: Uncomment me when registration is ready}
    return <div className={linkClasses}>Register</div>
    {*/}

    {/* TODO: delete me eventually */}
    return <div className={linkClasses}>Coming Soon!</div>
  } else {
    return <a href="https://www.eventbrite.com/e/querycon-tickets-42317323253" className={linkClasses}>Register Now</a>
  }
}

export default RegisterButton
