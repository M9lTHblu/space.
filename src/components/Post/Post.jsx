export const Post = () => {
  return (
      <article className='Post'>
        <span className='Post__date'>12 июня 2022</span>
        <h2 className='Post__title'>Заголовок статьи</h2>
        <p className='Post__text'>
          Краткое описание статьи или ее начало. Может занимать больше трех
          строк в высоту. В таком случае предложение заканчивается
          многоточием...
        </p>
        <a className='Post__author-link' href='#'>Иван Иванов</a>
      </article>
  );
};
