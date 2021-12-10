import { IconsEnum } from '../../../helpers/themes';

import style from './style.module.scss';

export const Footer = () => {
    return (
        <footer id="footer" className={style.rootWrapper}>
            <div className={style.footerWrapper}>
                <a href="#header">
                    <img src={IconsEnum.LOGO_ICON} alt='logo icon'/>
                </a>
                <div className={style.inputWrapper}>
                    <input type='email' placeholder='Enter your email'/>
                    <img src={IconsEnum.SENDEMAIL_ICON} alt='send icon'/>
                </div>
                <div className={style.socialsWrapper}>
                    <img src={IconsEnum.TELEGRAM_ICON} alt='telegram icon'/>
                    <img src={IconsEnum.TWITTER_ICON} alt='twitter icon'/>
                    <img src={IconsEnum.INSTAGRAM_ICON} alt='instagram icon'/>
                </div>
            </div>
            <div className={style.copyright}>
                2021 All Rights Reserved
            </div>
        </footer>
    )
}