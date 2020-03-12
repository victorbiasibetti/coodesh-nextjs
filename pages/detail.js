import React, {Component} from 'react'
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser'; 

import Link from 'next/link'
import withAnalytics from '../src/hocs/withAnalytics'


class Detail extends Component {
  
  static async getInitialProps ({query}) {
    const response = await axios.get(
      `https://mejorconsalud.com/wp-json/mc/v1/posts/${query.post}`
    );
    return {post: response.data}
  }

  render(){
    const { post } = this.props;
    
    return (
      <div>
        <h1>Detail</h1>
        
        {ReactHtmlParser(post.content)}
        
        <Link href='/'><a>Voltar</a></Link>
      </div>
    )
  }
}

export default withAnalytics()(Detail)