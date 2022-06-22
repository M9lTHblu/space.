import React from 'react';
import {Filters} from '../Filters';
import {Footer} from '../Footer';
import {Form} from '../Form';
import {Header} from '../Header';
import {Hero} from '../Hero/Hero';
import {Posts} from '../Posts';

export const App = () => {


  return (
      <div className="App_css" data-testid="app">
        <Header/>
        <Hero/>
        <Filters>
          <Form/>
        </Filters>
        <Posts/>
        <Footer/>
      </div>
  );
};
