import React from 'react';
import useFetchData from '../../hooks/useFetchData';
import {Post} from '../Post';

export const Posts = () => {
  const {loading, data, error} = useFetchData()


    return (
      <section className='Posts'>
        <div className='main-container'>
          {loading && <h2>Loading...</h2>}
          {error && <h2>Ой, что то пошло не так! :(</h2>}
          {data && data?.articles?.map((post, i) =>
              <li key={`${post}_${i}`}>
                <Post post={post} />
              </li>)}
        </div>
      </section>
  );
};
