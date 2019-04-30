import React from 'react'

import { ScheduleEntry, ENTRY_TYPES } from '../ScheduleEntry'
import styles from './schedule.module.scss'

const { BREAK, HOST, KEYNOTE, MEAL, TALK, WORKSHOP } = ENTRY_TYPES

const Schedule = ({ id }) => (
  <section className={styles.schedule} id={id}>
    <div className={styles.dayHeadings}>
      <h2 className={styles.dayHeading}>June 20</h2>

      <h2 className={styles.dayHeading}>June 21</h2>
    </div>

    <div className={styles.mobileDayLinks}>
      <a className={styles.mobileDayLink} href="#day1">Day 1</a>

      <a className={styles.mobileDayLink} href="#day2">Day 2</a>
    </div>

    <div className={styles.events}>
      <div className={styles.day} id="day1">
        <h2 className={[styles.dayHeading, styles.dayHeadingMobile].join(' ')}>
          June 20{` `}
          <span className={styles.dayHeadingMobileDetail}>(Day 1)</span>
        </h2>

        <ScheduleEntry
          begin="8:30 am"
          end="9:30 am"
          title="Check-In / Breakfast"
          type={MEAL}
        />

        <ScheduleEntry
          begin="9:30 am"
          details="Trail of Bits"
          end="10:00 am"
          speaker="Host"
          title="Introduction"
          type={HOST}
        />

        <ScheduleEntry
          begin="10:00 am"
          category={KEYNOTE}
          details="TBA"
          end="10:30 am"
          speaker="TBA"
          title="TBA"
          type={KEYNOTE}
        >
          <p>
            (Coming Soon)
          </p>
        </ScheduleEntry>

        <ScheduleEntry
          begin="10:30 am"
          category="TBA"
          details="TBA"
          end="11:00 am"
          speaker="TBA"
          title="TBA"
          type={TALK}
        >
          <p>
            (Coming Soon)
          </p>
        </ScheduleEntry>

        <ScheduleEntry
          begin="11:00 am"
          category="TBA"
          details="TBA"
          end="11:30 am"
          speaker="TBA"
          title="TBA"
          type={TALK}
        >
          <p>
            (Coming Soon)
          </p>
        </ScheduleEntry>

        <ScheduleEntry
          begin="11:30 am"
          category="TBA"
          details="TBA"
          end="12:00 pm"
          speaker="TBA"
          title="TBA"
          type={TALK}
        >
          <p>
            (Coming Soon)
          </p>
        </ScheduleEntry>

        <ScheduleEntry
          begin="12:00 pm"
          end="1:00 pm"
          title="Lunch"
          type={MEAL}
        />

        <ScheduleEntry
          begin="1:00 pm"
          category="osquery development"
          details="Trail of Bits"
          end="1:30 pm"
          speaker="Stefano Bonicatti"
          title="osql, the community-oriented osquery fork"
          type={TALK}
        >
          <p>
          osql is a community-oriented fork of osquery. Its goals are making 
          the development process more open and predictable, reviewing and 
          accepting community contributions more quickly, and restoring the
          {` community’s`} confidence and direct participation in the osquery project. 
          In this talk, we discuss how we intend to maintain a successful community 
          fork of a major open-source project.
          </p>
        </ScheduleEntry>

        <ScheduleEntry
          begin="1:30 pm"
          category="TBA"
          details="TBA"
          end="2:00 pm"
          speaker="TBA"
          title="TBA"
          type={TALK}
        >
          <p>
            (Coming Soon)
          </p>
        </ScheduleEntry>

        <ScheduleEntry
          begin="2:00 pm"
          category="TBA"
          details="TBA"
          end="2:30 pm"
          speaker="TBA"
          title="TBA"
          type={TALK}
        >
          <p>
            (Coming Soon)
          </p>
        </ScheduleEntry>

        <ScheduleEntry
          begin="2:30 pm"
          end="2:40 pm"
          title="Break"
          type={BREAK}
        />

        <ScheduleEntry
          begin="2:45 pm"
          category="TBA"
          details="TBA"
          end="3:15 pm"
          speaker="TBA"
          title="TBA"
          type={TALK}
        >
          <p>
            (Coming Soon)
          </p>
        </ScheduleEntry>

        <ScheduleEntry
          begin="3:15 pm"
          category="TBA"
          details="TBA"
          end="3:45 pm"
          speaker="TBA"
          title="TBA"
          type={TALK}
        >
          <p>
            (Coming Soon)
          </p>
        </ScheduleEntry>

        <ScheduleEntry
          begin="3:45 pm"
          category="TBA"
          details="TBA"
          end="4:15 pm"
          speaker="TBA"
          title="TBA"
          type={TALK}
        >
          <p>
            (Coming Soon)
          </p>
        </ScheduleEntry>

        <ScheduleEntry
          begin="4:15 pm"
          category="TBA"
          details="TBA"
          end="4:45 pm"
          speaker="TBA"
          title="TBA"
          type={TALK}
        >
          <p>
            (Coming Soon)
          </p>
        </ScheduleEntry>

        <ScheduleEntry
          begin="5:00 pm"
          category="After-hours event"
          details="TBA"
          end="8:00 pm"
          speaker="TBA"
          title="Off-Site Dinner & Drinks"
          type={WORKSHOP}
        />
      </div>

      <div className={styles.divider} />

      <div className={styles.day} id="day2">
        <h2 className={[styles.dayHeading, styles.dayHeadingMobile].join(' ')}>
          June 21{` `}
          <span className={styles.dayHeadingMobileDetail}>(Day 2)</span>
        </h2>

        <ScheduleEntry
          begin="8:30 am"
          day={2}
          end="9:30 am"
          title="Check-In / Breakfast"
          type={MEAL}
        />

        <ScheduleEntry
          begin="9:30 am"
          category="TBA"
          day={2}
          details="TBA"
          end="10:00 am"
          speaker="TBA"
          title="TBA"
          type={TALK}
        >
          <p>
            (Coming Soon)
          </p>
        </ScheduleEntry>


        <ScheduleEntry
          begin="10:00 am"
          category="osquery development"
          day={2}
          details="Trail of Bits"
          end="10:30 am"
          speaker="Alessandro Gario"
          title="The history of Linux security event monitoring with osquery"
          type={TALK}
        >
          <p>
          This talk introduces security event monitoring on Linux, and our lessons 
          learned from attempts to implement it within osquery. Our first experience 
          with osquery event monitoring was rewriting its use of Auditd. In order to 
          capture events within containers, we next implemented an event publisher 
          based on eBPF. We discovered what works, what {`doesn’t`}, and some paths 
          forward.
          </p>
        </ScheduleEntry>


        <ScheduleEntry
          begin="10:30 am"
          category="TBA"
          day={2}
          details="TBA"
          end="11:00 am"
          speaker="TBA"
          title="TBA"
          type={TALK}
        >
          <p>
          (Coming Soon)
          </p>
        </ScheduleEntry>


        <ScheduleEntry
          begin="11:00 am"
          category="TBA"
          day={2}
          details="TBA"
          end="11:30 am"
          speaker="TBA"
          title="TBA"
          type={TALK}
        >
          <p>
          (Coming Soon)
          </p>
        </ScheduleEntry>


        <ScheduleEntry
          begin="11:30 am"
          category="TBA"
          day={2}
          details="TBA"
          end="12:00 pm"
          speaker="TBA"
          title="TBA"
          type={TALK}
        >
          <p>
          (Coming Soon)
          </p>
        </ScheduleEntry>


        <ScheduleEntry
          begin="12:00 pm"
          day={2}
          end="1:00 pm"
          title="Lunch"
          type={MEAL}
        />

        <ScheduleEntry
          begin="1:00 pm"
          category={WORKSHOP}
          day={2}
          end="4:00 pm"
          speaker="Various osquery leaders"
          title="Community Workshop"
          type={WORKSHOP}
        />

        <ScheduleEntry
          begin="4:00 pm"
          day={2}
          details="Trail of Bits"
          end="4:30 pm"
          speaker="Host"
          title="Wrap-Up & Thank You"
          type={HOST}
        />
      </div>
    </div>
  </section>
)

export default Schedule
