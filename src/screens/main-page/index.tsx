import { Carousel, AboutSection, LaunchSection, FAQSection, RoadmapSection } from './components';
import { ImagesEnum } from '../../helpers/themes';

import style from './style.module.scss';

export const MainPage = () => {
    const renderCarouselItems = () => {
        const arr: Array<any> = [];
        for(let i = 0; i < 20; i++) {
            arr.push(ImagesEnum.CAROUSEL_ITEM);
        }

        return arr;
    }

    return (
        <section id='home' className={style.rootWrapper}>
            <div className={style.mainPageHeaderWrapper}>
                <div className={style.mainPageHeader}>
                    <div className={style.headerText}>
                        <p>First <span className={style.textGradient}>Crypto NFT City</span> that</p> 
                        <p>give you ability to earn</p>
                    </div>
                    <button className={style.buttonWrapper}>
                        Minting Soon
                    </button>
                </div>
            </div>
            <Carousel dataPictures={renderCarouselItems()}/>
            <AboutSection/>
            <LaunchSection/>
            <FAQSection/>
            <RoadmapSection/>
        </section>
    )
}