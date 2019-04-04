import React, { Component } from 'react'
import classNames from 'classnames'

import RegisterButton from '../buttons/RegisterButton'
import styles from './registration-tiles.module.scss'

class RegistrationTiles extends Component {
  render() {
    const cx = classNames.bind(styles)

    const lateRegistrationTilesClasses = cx(styles.registrationTiles, styles.lateRegistrationTiles)
    const lateRegistrationTileClasses = cx(styles.tile, styles.lateRegistrationTile)
    const lateRegistrationButtonClasses = cx(styles.registerButton, styles.lateRegistrationButton)

    return (
      <div className={lateRegistrationTilesClasses}>
        <div className={styles.lanyard} />

        <div className={lateRegistrationTileClasses}>
          <div className={styles.title}>
            <h3 className={styles.title}>2 Day QueryCon Pass</h3>

            <div className={styles.price}>
              <span className={styles.dollar}>$</span>
              300
            </div>
            <div className={styles.priceFee}>+ processing fee</div>

            <RegisterButton className={lateRegistrationButtonClasses} />
          </div>
        </div>
      </div>
    )
  }
}

export default RegistrationTiles
