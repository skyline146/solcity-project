import { useEffect, useState } from 'react';
import { MainPage } from './main-page';
import { Navbar, Footer } from './common';

import style from './style.module.scss';

function App() {
    const [screenSize, setScreenSize] = useState(document.documentElement.clientWidth);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 426) {
                return setScreenSize(window.innerWidth);
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
            <MainPage screenSize={screenSize}/>
            <Footer/>
        </div>
    );
}

export default App;
