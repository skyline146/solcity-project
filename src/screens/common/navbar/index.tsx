import { useState } from 'react';
import {stylesJoint} from '../../../helpers/utils';

import { IconsEnum } from '../../../helpers/themes';

import style from './style.module.scss';

export const Navbar = () => {
    const [active, setActive] = useState(false);

    return (
        <nav id="header" className={style.rootWrapper}>
            <div className={style.navbarWrapper}>
                <div>
                    <div className={style.menuButtonWrapper} onClick={() => setActive(!active)}>
                        <div className={active ? style.activeBar1 : ''}></div>
                        <div className={active ? style.activeBar2 : ''}></div>
                        <div className={active ? style.activeBar3 : ''}></div>
                    </div>
                    <a href="#header">
                        <img className={style.logo} src={IconsEnum.LOGO_ICON} alt='logo icon'/>
                    </a>
                    <div className={active ? stylesJoint(style.navigationWrapper, style.showNavigation) : style.navigationWrapper}>
                        <div className={style.linkWrapper} onClick={() => setActive(false)}>
                            <a href="#home">
                                Home
                            </a>
                            <div/>
                        </div>
                        <div className={style.linkWrapper} onClick={() => setActive(false)}>
                            <a href='#about'>
                                About
                            </a>
                            <div/>
                        </div>
                        <div className={style.linkWrapper} onClick={() => setActive(false)}>
                            <a href='#launch'>
                                Launch
                            </a>
                            <div/>
                        </div>
                        <div className={style.linkWrapper} onClick={() => setActive(false)}>
                            <a href='#faq'>
                                FAQ
                            </a>
                            <div/>
                        </div>
                        <div className={style.linkWrapper} onClick={() => setActive(false)}>
                            <a href='#roadmap'>
                                Roadmap
                            </a>
                            <div/>
                        </div>
                        <div className={style.linkWrapper} onClick={() => setActive(false)}>
                            <a href='#team'>
                                Team
                            </a>
                            <div/>
                        </div>
                        <div className={style.linkWrapper} onClick={() => setActive(false)}>
                            <a href="#collection">
                                Collection
                            </a>
                            <div/>
                        </div>
                    </div>
                </div>
                <button className={style.buttonWrapper}>
                    Minting Soon
                </button>
            </div>
        </nav>
    )
}