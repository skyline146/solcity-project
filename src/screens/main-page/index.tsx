import { Carousel, AboutSection, LaunchSection, FAQSection, RoadmapSection, TeamSection, DonationSection } from './components';
import { ImagesEnum } from '../../helpers/themes';

import style from './style.module.scss';

interface IMainPageProps {
    screenSize: number;
    screenSizeText: string;
}

export const MainPage = ({screenSize, screenSizeText}:IMainPageProps) => {
    const carouselItems = () => {
        const arr: Array<any> = [];
        for(let i = 0; i < 12; i++) {
            arr.push(ImagesEnum.CAROUSEL_ITEM);
        }

        return arr;
    }

    return (
        <section id='home' className={style.rootWrapper}>
            <div className={style.mainPageHeaderWrapper}>
                <div className={style.mainPageHeader}>
                    <div className={style.headerText}>
                        <p>First <span className={style.textGradient}>Crypto NFT City</span> that<br/>give you ability to earn</p>
                    </div>
                    <button className={style.buttonWrapper}>
                        Minting Soon
                    </button>
                </div>
            </div>
            <Carousel dataPictures={carouselItems()} screenSize={screenSize} screenSizeText={screenSizeText}/>
            <AboutSection/>
            <LaunchSection/>
            <FAQSection/>
            <RoadmapSection screenSize={screenSize}/>
            <TeamSection screenSize={screenSize}/>
            <DonationSection/>
        </section>
    )
}