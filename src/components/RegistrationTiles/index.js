import React, { Component } from 'react'
import classNames from 'classnames'
import moment from 'moment'

import imgEarlyBird from './early-bird.svg'
import imgNightOwl from './night-owl.svg'
import RegisterButton from '../RegisterButton'
import styles from './registration-tiles.module.scss'

class RegistrationTiles extends Component {
  state = {
    earlyBirdAvailable: moment().isBefore('2018-04-01')
  }

  render() {
    const { earlyBirdAvailable } = this.state
    const cx = classNames.bind(styles)

    if (earlyBirdAvailable) {
      const fullPriceTileClasses = cx(styles.tile, styles.tileFullPrice)
      const fullPricePriceClasses = cx(styles.price, styles.priceFullPrice)
      const fullPriceRegisterButtonClasses = cx(styles.registerButton, styles.registerButtonFullPrice)

      return (
        <div className={styles.registrationTiles}>
          <div className={styles.registrationTile}>
            <div className={styles.tile}>
              <h3 className={styles.title}>Early Bird Pricing</h3>

              <div className={styles.price}>
                <span className={styles.dollar}>$</span>
                120
              </div>

              <RegisterButton className={styles.registerButton} />
            </div>

            <div className={styles.dates}>Now through Mar 31st</div>
          </div>

          <div className={styles.registrationTile}>
            <div className={fullPriceTileClasses}>
              <h3 className={styles.title}>Full Price</h3>

              <div className={fullPricePriceClasses}>
                <span className={styles.dollar}>$</span>
                150
              </div>

              <RegisterButton className={fullPriceRegisterButtonClasses} disabled />
            </div>

            <div className={styles.dates}>After Mar 31st</div>
          </div>
        </div>
      )
    } else {
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
                150
              </div>

              <RegisterButton className={lateRegistrationButtonClasses} />
            </div>
          </div>
        </div>
      )
    }
  }
}

export default RegistrationTiles
