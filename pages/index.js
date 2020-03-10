import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import withAnalytics from '../src/hocs/withAnalytics'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <h1>Home</h1>
    <Link href="/posts">
      <a>Posts</a>
    </Link>
  </div>
)

export default withAnalytics()(Home);