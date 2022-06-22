import React from 'react';
import {Header} from '../Header';
import {Hero} from '../Hero/Hero';

export const App = () => {


  return (
      <div className="App_css" data-testid="app">
        <Header/>
        <Hero/>

      </div>
  );
};
