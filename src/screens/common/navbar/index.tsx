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
                        <div>
                            <a href="home">
                                Home
                            </a>
                        </div>
                        <div>
                            <a>
                                About
                            </a>
                        </div>
                        <div>
                            <a>
                                Launch
                            </a>
                        </div>
                        <div>
                            <a>
                                FAQ
                            </a>
                        </div>
                        <div>
                            <a>
                                Roadmap
                            </a>
                        </div>
                        <div>
                            <a>
                                Team
                            </a>
                        </div>
                        <div>
                            <a href="#collection">
                                Collection
                            </a>
                        </div>
                    </div>
                </div>
                <a>
                    <div className={style.buttonWrapper}>
                        Minting Soon
                    </div> 
                </a>
            </div>
        </nav>
    )
}