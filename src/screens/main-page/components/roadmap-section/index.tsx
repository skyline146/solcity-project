import { ImagesEnum } from '../../../../helpers/themes';
import ProgressLine from './progress-line';

import style from './style.module.scss';

export const RoadmapSection = () => {
    return (
        <section id='roadmap' className={style.rootWrapper}>
            <div className={style.contentWrapper}>
                <div className={style.sectionTitle}>
                    <p>Roadmap</p>
                    <div></div>
                </div>
                <div className={style.imageProgress}>
                    <div className={style.imagesRootWrapper}>
                        <div className={style.imageWrapper}>
                            <img src={ImagesEnum.ROADMAP_IMAGES[0]} alt="roadmap layout"/>
                        </div>
                        <div className={style.imageWrapper}>
                            <img src={ImagesEnum.ROADMAP_IMAGES[1]} alt="roadmap layout"/>
                        </div>
                        <div className={style.imageWrapper}>
                            <img src={ImagesEnum.ROADMAP_IMAGES[2]} alt="roadmap layout"/>
                        </div>
                        <div className={style.imageWrapper}>
                            <img src={ImagesEnum.ROADMAP_IMAGES[3]} alt="roadmap layout"/>
                        </div>
                    </div>
                    <ProgressLine/>
                </div>
                <div className={style.infoWrapper}>
                    <div className={style.listWrapper}>
                        <ul>
                            <li>SolCity NFT 10,000 official pre-sale on Solrazr.</li>
                            <li>NFT distribution.</li>
                            <li>SolCity NFT listing on marketplaces SolSea, SolanArt, DigitalEyes. Buy, Sell and Trade SolCities on the best Solana NFT marketplaces.</li>
                        </ul>
                    </div>
                    <div className={style.listWrapper}>
                        <ul>
                            <li>Holding rare SolCity NFTs gives a chance to win exclusive Solana edition SolCity NFT.</li>
                            <li>Announcement about the SolCity NFT Staking Platform release date and SolCity token pre-sale.</li>
                        </ul>
                    </div>
                    <div className={style.listWrapper}>
                        <ul>
                            <li>SolCity Token pre-sale and distribution. SolCity tokens will be used for staking on SolCity NFT Staking Platform.</li>
                            <li>Exclusive SolCity NFT merch with limited stock.</li>
                        </ul>
                    </div>
                    <div className={style.listWrapper}>
                        <ul>
                            <li>Launching SolCity NFT staking platform. SolCity NFT holders get the best staking percent depending on the rarity of their Solcity NFTs.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}