import React from 'react'
import axios from 'axios'

import Link from 'next/link'
import withAnalytics from '../src/hocs/withAnalytics'

const Detail = ({post}) => (
  <div>
    <h1>{post.title}</h1>
    <p>{post.headline}</p>
    <p>outra informação</p>
    <Link href='/'><a>Voltar</a></Link>
  </div>
)

Detail.getInitialProps = async ({query}) => {
  const response = await axios.get(
    `https://mejorconsalud.com/wp-json/mc/v1/posts/${query.post}`
  );
  return {post: response.data}
}

export default withAnalytics()(Detail)