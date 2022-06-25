import React from 'react';
import useFetchData from '../../hooks/useFetchData';
import {Form} from '../Form';
import {Post} from '../Post';
import './Posts.scss';

export const Posts = () => {
  const {loading, data, error} = useFetchData();

  return (
      <section className='Posts'>
        <div className='filters'>
          <Form />
        </div>
        <div className='main-container'>
          {loading && <h2>Loading...</h2>}
          {error && <h2>Oops, something went wrong! :(</h2>}
          {data && data?.articles?.map((post, i) =>
              <li key={`${post}_${i}`}>
                <Post post={post} />
              </li>)}
        </div>
      </section>
  );
};
