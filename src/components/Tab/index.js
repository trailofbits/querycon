import React from 'react'
import classnames from 'classnames'

import styles from './tab.module.scss'

const Tab = (props) => {
  const { active, className, onClick, size, text } = props
  const classes = classnames(styles.tab, className, {
    [styles.activeTab]: active,
    [styles.smallTab]: size === 'small',
    [styles.largeTab]: size === 'large',
  })

  return (
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  )
}

export default Tab
