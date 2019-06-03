import React from 'react'
import classNames from 'classnames'

import styles from './schedule-entry.module.scss'

export const ENTRY_TYPES = {
  BREAK: 'break',
  KEYNOTE: 'keynote',
  MEAL: 'meal',
  TALK: 'talk',
  WORKSHOP: 'workshop',
}

const DAY_1 = 'June 20 - (Day 1)'
const DAY_2 = 'June 21 - (Day 2)'
const cx = classNames.bind(styles)

export class ScheduleEntry extends React.Component {
  state = {
    showDetails: false,
  }

  hideDetails = () => {
    this.setState({ showDetails: false })
  }

  showDetails = () => {
    this.setState({ showDetails: true })
  }

  render() {
    const {
      begin,
      category,
      children,
      day,
      details,
      end,
      speaker,
      title,
      type,
    } = this.props

    const { showDetails } = this.state

    return (
      <div
        className={cx(styles.entry, {
          [styles.break]: type === ENTRY_TYPES.BREAK,
          [styles.keynote]: type === ENTRY_TYPES.KEYNOTE,
          [styles.meal]: type === ENTRY_TYPES.MEAL,
          [styles.talk]: type === ENTRY_TYPES.TALK || type === ENTRY_TYPES.HOST,
          [styles.workshop]: type === ENTRY_TYPES.WORKSHOP,
        })}
      >
        <h3 className={styles.time}>
          {day === 2 ? (
            <span className={styles.day}>June 21 - (Day 2)</span>
          ) : (
            <span className={styles.day}>June 20 - (Day 1)</span>
          )}
          {begin} - {end}
        </h3>

        <div className={styles.entryBody}>
          {category && <div className={styles.category}>{category}</div>}

          <h2 className={styles.title}>{title}</h2>

          <h3 className={styles.speaker}>{speaker}</h3>

          <div className={styles.details}>{details}</div>

          {(type === ENTRY_TYPES.TALK || type === ENTRY_TYPES.KEYNOTE) && (
            <div className={styles.details}>
              {showDetails ? (
                <div>
                  <div>{children}</div>

                  <button className={styles.detailsToggle} onClick={this.hideDetails}>Hide Details</button>
                </div>
              ) : (
                <button className={styles.detailsToggle} onClick={this.showDetails}>Show Details</button>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
}
