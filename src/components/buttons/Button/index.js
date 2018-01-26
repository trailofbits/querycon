import React from 'react'
import classNames from 'classnames'

import styles from './button.module.scss'

const cx = classNames.bind(styles)

const Button = ({ children, className, onClick, url }) => {
  const buttonClasses = cx(styles.button, className)

  if (url) {
    return (
      <a className={buttonClasses} href={url}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={buttonClasses} onClick={onClick}>
        {children}
      </button>
    )
  }
}

export default Button
