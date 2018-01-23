import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Header from '../components/Header'
import RegisterButton from '../components/RegisterButton'
import styles from './index.module.scss'

const IndexPage = () => (
  <div>
    <Helmet>
      <title>QueryCon18</title>
      <meta name="description" content="An osquery conference" />
    </Helmet>

    <section className={styles.heroSection}>
      <Header />
      <h1 className={styles.header}>QueryCon 2018</h1>
      <h2 className={styles.subHeader}>An osquery conference</h2>
      <h3 className={styles.subSubHeader}>San Francisco | May 31 - Jun 1</h3>
    </section>

    <div className={styles.ctaBar}>
      <p className={styles.ctaBarText}>Interested in attending? Space is limited, reserve your spot!</p>
      <RegisterButton className={styles.ctaBarRegisterButton} />
    </div>
  </div>
)

export default IndexPage
