import React from 'react';

export const Hero = () => {
  return (
      <section className='Hero'>
        <div className='main-container'>
          <div className='Hero__body'>
            <h1 className='Hero__title'>
              Как бизнесу сохранять IT-кадры на фоне кризиса
            </h1>
            <p className='Hero__text'>
              Инструменты, которые могут использовать компании для удержания
              сотрудников
            </p>
            <button className='Hero__button'>Подробнее</button>
          </div>
          <div className='Hero__slice'>
            <span className='slice-btn' />
            <span className='slice-btn' />
            <span className='slice-btn' />
          </div>
        </div>
      </section>
  );
};
