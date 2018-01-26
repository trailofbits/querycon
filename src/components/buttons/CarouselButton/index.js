import React from 'react'
import classNames from 'classnames'

import styles from './carousel-button.module.scss'

const BACK = 'back'
const FORWARD = 'forward'

const CarouselButton = ({ onClick, direction, displayCount, index, itemsCount }) => {
  const isDisabled = (direction === BACK && index >= 0) || (direction === FORWARD && index <= (displayCount - itemsCount))
  const cx = classNames.bind(styles)
  const buttonClasses = cx(styles.carouselButton, {
    [styles.carouselButtonBack]: direction === BACK,
    [styles.carouselButtonForward]: direction === FORWARD,
    [styles.carouselButtonHidden]: isDisabled,
  })

  return <button className={buttonClasses} disabled={isDisabled} onClick={onClick(direction)} />
}

export default CarouselButton
