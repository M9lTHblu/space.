import React from 'react';

export const Post = ({post}) => {

  return (
      <article className='Post'>
        <span className='Post__date'>{post?.publishedAt}</span>
        <h2 className='Post__title'>{post?.title}</h2>
        <p className='Post__text'>{post?.description}</p>
        <a className='Post__author link' href='#'>{post?.author}</a>
      </article>
  );
};
