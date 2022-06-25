import React from 'react';
import {DataContextProvider} from '../../Context';
import {Footer} from '../Footer';
import {Header} from '../Header';
import {Hero} from '../Hero';
import {Posts} from '../Posts';
import './App.scss';

export const App = () => {

  return (
      <div className='App' data-testid='app'>
        <DataContextProvider>
          <Header />
          <Hero />
          <Posts />
          <Footer />
        </DataContextProvider>
      </div>
  );
};
