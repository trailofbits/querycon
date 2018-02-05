import React from 'react'

import styles from './question.module.scss'

const Question = props => {
  const { answer, question } = props

  return (
    <div className={styles.questionContainer}>
      <div className={styles.question}>
        {question}
      </div>
      <div className={styles.answer}>
        {answer}
      </div>
    </div>
  )
}

export default Question
