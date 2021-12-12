import { ImagesEnum } from '../../../../helpers/themes';
import Card from './person-card';

import style from './style.module.scss';

const personInfo = {
    dan: [ImagesEnum.DAN_AVATAR, 'Project Manager &  SMM Specialist', 'Dan'],
    pavel: [ImagesEnum.PAVEL_AVATAR, '3D Artist & UI/UX Designer', 'Pavel'],
    alex: [ImagesEnum.ALEX_AVATAR, 'Blockchain Specialist', 'Alex']
}

export const TeamSection = () => {
    return (
        <section id='team' className={style.rootWrapper}>
            <div className={style.contentWrapper}>
                <div className={style.sectionTitle}>
                    <p>Team</p>
                    <div></div>
                </div>
                <div className={style.cardsWrapper}>
                    <Card avatar={personInfo.dan[0]} position={personInfo.dan[1]} name={personInfo.dan[2]}/>
                    <Card avatar={personInfo.pavel[0]} position={personInfo.pavel[1]} name={personInfo.pavel[2]}/>
                    <Card avatar={personInfo.alex[0]} position={personInfo.alex[1]} name={personInfo.alex[2]}/>
                </div>
            </div>
        </section>
    )
}