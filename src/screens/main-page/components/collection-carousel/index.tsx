import {Swiper, SwiperSlide} from 'swiper/react/swiper-react';

import style from './style.module.scss';
import 'swiper/swiper.scss';

interface CarouselProps {
    dataPictures: Array<any>,
    screenSize: number
}

export const Carousel = ({dataPictures, screenSize}:CarouselProps) => {
    const renderItems = () => {
        return dataPictures.map((item, index) => {
            return (
                <SwiperSlide key={index}>
                    <img className={style.carouselItem} src={item} alt='carousel item'/>
                </SwiperSlide>
            )
        });
    }

    return (
        <section id="collection" className={style.rootWrapper}>
            <Swiper
                spaceBetween={screenSize <= 425 ? 8 : 30}
                slidesPerView={screenSize <= 425 ? 2.3 : 8}
                className={style.carouselWrapper}
            >
                {renderItems()}
            </Swiper>
        </section>
    )
    
}