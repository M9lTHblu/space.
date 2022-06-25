import React from 'react';
import phone from '../../assets/header/1.svg';
import email from '../../assets/header/2.svg';
import logo from '../../assets/shared/logo.svg';
import useMatchMedia from '../../hooks/useMatchMedia';
import './Header.scss';

export const Header = () => {
  const view = useMatchMedia();
  const phoneChild = view === 'mobile'
      ? <img src={phone} alt='Contact us by phone' />
      : '8 800 000 00 00';
  const emailChild = view === 'mobile'
      ? <img src={email} alt='Contact us by phone' />
      : 'sales@logo.ru';

  return (
      <header className='Header'>
        <div className='main-container'>
          <div className='Header__container'>
            <img className='Header__logo' src={logo} alt='logo' />
            <nav className='Header__nav'>
              <a className='Header__phone'
                 href='#'>
                {phoneChild}</a>
              <a className='Header__email'
                 href='#'>{emailChild}</a>
            </nav>
          </div>
        </div>
      </header>
  );
};
