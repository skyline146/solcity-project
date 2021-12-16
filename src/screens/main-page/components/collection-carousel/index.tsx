import { memo } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react/swiper-react';

import style from './style.module.scss';
import 'swiper/swiper.scss';

interface CarouselProps {
    dataPictures: Array<any>,
    screenSize: number;
    screenSizeText: string;
}

export const Carousel = memo(({dataPictures, screenSize, screenSizeText}:CarouselProps) => {

    const renderItems = () => {
        return dataPictures.map((item, index) => {
            return (
                <SwiperSlide key={index}>
                    <img className={style.carouselItem} src={item} alt='carousel item'/>
                </SwiperSlide>
            )
        });
    }

    const slidesCount = () => {
        if (screenSizeText === '1650') {
            return 6.2
        } else if (screenSizeText === '1400') {
            return 5.2
        } else if (screenSizeText === '1200') {
            return 4.3
        } else if (screenSizeText === '1000') {
            return 3.5
        } else if (screenSizeText === '800') {
            return 2.8
        } else if (screenSizeText === '800') {
            return 2.8
        } else if (screenSizeText === '650') {
            return 3.2
        } else if (screenSizeText === '500') {
            return 2.3
        }

        return 8.2;
    }
    // screenSize <= 425 ? 2.3 : 8.2

    return (
        <section id="collection" className={style.rootWrapper}>
            <Swiper
                spaceBetween={screenSize <= 650 ? 8 : 30}
                slidesPerView={slidesCount()}
                className={style.carouselWrapper}
            >
                {renderItems()}
            </Swiper>
        </section>
    )
})