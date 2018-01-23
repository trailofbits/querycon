import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Header from '../components/Header'
import styles from './index.module.scss'

const IndexPage = () => (
  <div>
    <Helmet
      title="QueryCon18"
      meta={[
        { name: 'description', content: 'An osquery conference' },
      ]}
    />

    <Header />

    <div>
      <h1 className={styles.myClass}>QueryCon 2018</h1>
    </div>
  </div>
)

export default IndexPage
