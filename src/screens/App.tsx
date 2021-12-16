import { useEffect, useState } from 'react';
import { MainPage } from './main-page';
import { Navbar, Footer } from './common';

import style from './style.module.scss';

function App() {
    const [screenSize, setScreenSize] = useState(document.documentElement.clientWidth);
    const [screenSizeText, setScreenSizeText] = useState('');

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 500) {
                setScreenSizeText('500');
            } else if (window.innerWidth <= 650) {
                setScreenSizeText('650');
            } else if (window.innerWidth <= 800) {
                setScreenSizeText('800');
            } else if (window.innerWidth <= 1000) {
                setScreenSizeText('1000');
            } else if (window.innerWidth <= 1200) {
                setScreenSizeText('1200');
            } else if (window.innerWidth <= 1400) {
                setScreenSizeText('1400');
            } else if (window.innerWidth <= 1650) {
                setScreenSizeText('1650');
            } else {
                setScreenSizeText('FULL');
            }
            return setScreenSize(window.innerWidth);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
    
        return function cleanup() {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    return (
        <div className={style.rootWrapper}>
            <Navbar/>
            <MainPage screenSize={screenSize} screenSizeText={screenSizeText}/>
            <Footer/>
        </div>
    );
}

export default App;
