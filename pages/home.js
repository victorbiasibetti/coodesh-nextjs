import React from 'react';
import axios from 'axios'

import Head from 'next/head'
import Link from 'next/link'
// import { Container } from './styles';


import withAnalytics from '../src/hocs/withAnalytics'

const Home = ({ posts }) => (
  <div>
    <Head>
      <title>Posts</title>
    </Head>
    <h1>Posts</h1>
    <ul>
      {
        posts.map(post => (
          <li key={post.id}>
            {post.title}
            <Link href={`/${post.id}`}><a>Acessar</a></Link>  
          </li>
          )
        )
      }
    </ul>

  </div>
);

Home.getInitialProps = async () => {
  const response = await axios.get('https://mejorconsalud.com/wp-json/mc/v1/posts')
  return {posts: response.data}
}

export default withAnalytics()(Home);
