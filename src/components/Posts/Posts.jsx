import React from 'react';
import {Post} from '../Post';

export const Posts = () => {
  const posts = [];
  return (
      <section className='Posts'>
        <div className='main-container'>
          {posts?.map((p, i) =>
              <li key={`${p}_${i}`}>
                <Post post={p} />
              </li>)}
        </div>
      </section>
  );
};
