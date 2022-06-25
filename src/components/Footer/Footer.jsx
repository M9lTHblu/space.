import React from 'react';
import logo from '../../assets/shared/logo.svg';

const links = ['Готовые решения', 'О нас', 'Блог', 'Контакты'];

export const Footer = () => {
  return (
      <footer className='Footer'>
        <div className='main-container'>
          <div className='Footer__row'>
            <img src={logo} alt='logo' />
            <nav className='Footer__nav'>
              <ul className='list'>
                {links.map((l, i) =>
                    <li className='list__item' key={i}>
                      <a className='Footer__link' href='#'>{l}</a>
                    </li>,
                )}
              </ul>
            </nav>
          </div>
          <div className='Footer__row'>
            <span className='Footer__copy-writ'>
              © ООО «Лого», 2008—2022
            </span>
            <div className='Footer__icons'>
              <svg className='Footer__icon' />
              <svg className='Footer__icon' />
              <svg className='Footer__icon' />
              <svg className='Footer__icon' />
            </div>
          </div>
        </div>
      </footer>
  );
};
