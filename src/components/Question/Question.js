import React from 'react'

import styles from './question.module.scss'

const Question = props => {
  const { answer, questionLine1, questionLine2 } = props

  return (
    <div className={styles.questionContainer}>
      <div className={styles.question}>
        {questionLine1}
      </div>

      {questionLine2 &&
        <div className={styles.question}>
          {questionLine2}
        </div>
      }

      <div className={styles.answer} dangerouslySetInnerHTML={{__html: answer}}></div>
    </div>
  )
}

export default Question
