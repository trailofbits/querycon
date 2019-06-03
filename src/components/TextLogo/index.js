import React from 'react'

import styles from './text-logo.module.scss'

const TextLogo = () => {
  const { textLogo } = styles

  return (
    <a className={textLogo} href="/">QueryCon</a>
  )
}

export default TextLogo
