import React from 'react';
import axios from 'axios'

import styled from 'styled-components'

import Head from 'next/head'
import Link from 'next/link'
// import { Container } from './styles';

const ButtonSearch = styled.button`
  background-color: #ccc;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;

  :hover {
    background-color: RoyalBlue;
  }
`;

const SearchBar = styled.div`
  width: 100%;
  padding: 10px 5%;
  background: #069;
  
  input {
    width: 30%;
    margin: 0 20%;
    margin-right: 5%;
    padding-left: 20%;
    font-size:17px;
  }

  button {
    background-color: #ccc;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
    :hover {
      background-color: #f4f4;
    }
  }
`;



import withAnalytics from '../src/hocs/withAnalytics'

const Home = ({ posts }) => (
  <div>
    <Head>
      <title>Posts</title>
    </Head>
    <SearchBar>
      <input id="search" name="search"/>
      <button onClick={() => {
        handleSearch();
      }}
      > <i className="fa fa-search"></i> Buscar</button>
    </SearchBar>
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

function handleSearch(){
  Home.searchPost({postTitle: 'titulo-do-post'})
}

Home.getInitialProps = async () => {
  const response = await axios.get('https://mejorconsalud.com/wp-json/mc/v1/posts')
  return {posts: response.data}
}

Home.searchPost = async ({ postTitle }) => {
  
  const response = await axios.get(
    `https://mejorconsalud.com/wp-json/mc/v1/posts?search=${postTitle}`
    )
  return {posts: response.data}
}

export default withAnalytics()(Home);
