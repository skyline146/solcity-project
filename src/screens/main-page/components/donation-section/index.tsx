import { ImagesEnum } from '../../../../helpers/themes';

import style from './style.module.scss';

export const DonationSection = () => {
    return (
        <section id='donation' className={style.rootWrapper}>
            <div className={style.contentWrapper}>
                <div className={style.sectionTitle}>
                    <p>Don`t forget about<br/>those who in troubles</p>
                    <div></div>
                </div>
                <div className={style.mainblock}>
                    <div className={style.textWrapper}>
                        <p>Donation</p>
                        <p>We decided to help those who are in trouble. The 10% from the Total amount of SOL we get after NFT collection sale will be given to the Habitat for Humanity organization. The vision of Habitat is a world where everyone has a decent place to live. They are therefore constantly looking for new solutions that would make adequate housing accessible and affordable for all who are in needl.</p>
                    </div>
                    <div className={style.imagesWrapper}>
                        <img className={style.picture1} src={ImagesEnum.DONATION_IMAGES[0]} alt="homeless"/>
                        <img src={ImagesEnum.DONATION_IMAGES[1]} alt="homeless"/>
                        <img className={style.picture3} src={ImagesEnum.DONATION_IMAGES[2]} alt="homeless"/>
                    </div>
                </div>
            </div>
        </section>
    )
}