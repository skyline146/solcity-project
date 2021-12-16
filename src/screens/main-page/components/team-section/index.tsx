import { useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react/swiper-react';
import { ImagesEnum } from '../../../../helpers/themes';
import Card from './person-card';
import { stylesJoint } from '../../../../helpers/utils';

import style from './style.module.scss';
import 'swiper/swiper.scss';


const personInfo = {
    dan: [ImagesEnum.DAN_AVATAR, 'Project Manager &  SMM Specialist', 'Dan'],
    pavel: [ImagesEnum.PAVEL_AVATAR, '3D Artist & UI/UX Designer', 'Pavel'],
    alex: [ImagesEnum.ALEX_AVATAR, 'Blockchain Specialist', 'Alex']
}

interface ITeamSectionProps {
    screenSize: number;
}

export const TeamSection = ({screenSize}:ITeamSectionProps) => {
    const [activeSlide, setActiveSlide] = useState(1);
    
    return (
        <section id='team' className={style.rootWrapper}>
            <div className={style.contentWrapper}>
                <div className={style.sectionTitle}>
                    <p>Team</p>
                    <div></div>
                </div>
                {screenSize > 770 ?
                    <div className={style.cardsWrapper}>
                        <Card avatar={personInfo.dan[0]} position={personInfo.dan[1]} name={personInfo.dan[2]}/>
                        <Card avatar={personInfo.pavel[0]} position={personInfo.pavel[1]} name={personInfo.pavel[2]}/>
                        <Card avatar={personInfo.alex[0]} position={personInfo.alex[1]} name={personInfo.alex[2]}/>
                    </div> :
                    <div className={style.swiperWrapper}>
                        <Swiper
                            spaceBetween={screenSize >= 580 ? -300 : -105}
                            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex + 1)}
                        >
                            <SwiperSlide>
                                <Card avatar={personInfo.dan[0]} position={personInfo.dan[1]} name={personInfo.dan[2]}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card avatar={personInfo.pavel[0]} position={personInfo.pavel[1]} name={personInfo.pavel[2]}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card avatar={personInfo.alex[0]} position={personInfo.alex[1]} name={personInfo.alex[2]}/>
                            </SwiperSlide>
                        </Swiper>
                        <div className={style.dotsWrapper}>
                            <div className={activeSlide === 1 ? stylesJoint(style.swiperDot, style.activeDot) : style.swiperDot}/>
                            <div className={activeSlide === 2 ? stylesJoint(style.swiperDot, style.activeDot) : style.swiperDot}/>
                            <div className={activeSlide === 3 ? stylesJoint(style.swiperDot, style.activeDot) : style.swiperDot}/>
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}