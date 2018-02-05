import React from 'react'

import styles from './text-logo.module.scss'

const TextLogo = ({ dark }) => {
  const { textLogoDark, textLogoLight } = styles
  const style = dark ? textLogoDark : textLogoLight

  return (
    <a className={style} href="/">QueryCon</a>
  )
}

export default TextLogo
