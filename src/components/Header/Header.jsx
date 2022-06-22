import React from 'react';
import logo from '../../assets/logo.svg';

export const Header = () => {
  return (
      <header className='Header'>
        <div className='main-container'>
          <img src={logo} alt="logo" />
          <nav className='Header__nav'>
            <a className='Header__phone' href="#">8 800 000 00 00</a>
            <a className='Header__email' href="#">sales@logo.ru</a>
          </nav>
        </div>
      </header>
  )
}
