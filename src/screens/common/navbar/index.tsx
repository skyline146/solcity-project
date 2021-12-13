import { IconsEnum } from '../../../helpers/themes';

import style from './style.module.scss';

export const Navbar = () => {
    return (
        <nav id="header" className={style.rootWrapper}>
            <div className={style.navbarWrapper}>
                <div>
                    <a href="#header">
                        <img src={IconsEnum.LOGO_ICON} alt='logo icon'/>
                    </a>
                    <div className={style.navigationWrapper}>
                        <div className={style.linkWrapper}>
                            <a href="#home">
                                Home
                            </a>
                            <div/>
                        </div>
                        <div className={style.linkWrapper}>
                            <a href='#about'>
                                About
                            </a>
                            <div/>
                        </div>
                        <div className={style.linkWrapper}>
                            <a href='#launch'>
                                Launch
                            </a>
                            <div/>
                        </div>
                        <div className={style.linkWrapper}>
                            <a href='#faq'>
                                FAQ
                            </a>
                            <div/>
                        </div>
                        <div className={style.linkWrapper}>
                            <a href='#roadmap'>
                                Roadmap
                            </a>
                            <div/>
                        </div>
                        <div className={style.linkWrapper}>
                            <a href='#team'>
                                Team
                            </a>
                            <div/>
                        </div>
                        <div className={style.linkWrapper}>
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