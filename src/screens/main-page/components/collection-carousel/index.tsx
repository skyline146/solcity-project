import {Swiper, SwiperSlide} from 'swiper/react/swiper-react';

import style from './style.module.scss';
import 'swiper/swiper.scss';

interface CarouselProps {
    dataPictures: Array<any>
}

export const Carousel = ({dataPictures}:CarouselProps) => {
    const renderItems = () => {
        return dataPictures.map((item, index) => {
            return (
                <SwiperSlide key={index}>
                    <img src={item} alt='carousel item'/>
                </SwiperSlide>
            )
        });
    }

    return (
        <section id="collection" className={style.rootWrapper}>
            <Swiper
                spaceBetween={30}
                slidesPerView={8}
            >
                {renderItems()}
            </Swiper>
        </section>
    )
    
}