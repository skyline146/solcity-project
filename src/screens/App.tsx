import React from 'react';
import { MainPage } from './main-page';
import { Navbar, Footer } from './common';

import style from './style.module.scss';

function App() {
  return (
    <div className={style.rootWrapper}>
      <Navbar/>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
