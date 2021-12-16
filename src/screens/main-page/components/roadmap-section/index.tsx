import { ImagesEnum } from '../../../../helpers/themes';
import ProgressLine from './progress-line';
import line from '../../../../assets/images/main-page/roadmap-section/vertical-line.svg';

import style from './style.module.scss';

interface IRoadmapSectionProps {
    screenSize: number;
}

export const RoadmapSection = ({screenSize}:IRoadmapSectionProps) => {
    return (
        <section id='roadmap' className={style.rootWrapper}>
            <div className={style.contentWrapper}>
                <div className={style.sectionTitle}>
                    <p>Roadmap</p>
                    <div></div>
                </div>
                {screenSize > 650 ?
                    <>
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
                            </div>
                            <ProgressLine/>
                        </div>
                        <div className={style.infoWrapper}>
                            <div className={style.listWrapper}>
                                <ul>
                                    <li>SolCity NFT pre-launch of 1000 NFTs with a chance to get one of 200 exclusive NFTs.</li>
                                    <li>SolCity NFT main minting event of 8600 NFTs.</li>
                                    <li>SolCity NFT listing on marketplaces SolSea, SolanArt, DigitalEyes, MagicEden, FTX. Buy, Sell and Trade NFTs on the best Solana NFT marketplaces.</li>
                                </ul>
                            </div>
                            <div className={style.listWrapper}>
                                <ul>
                                    <li>Announcing the date of launching SolCity IDO Platform. Holding SolCity NFTs depending on the rearenest gives an exclusive allocation amount along with a 100% chance to participate in every new IDO.</li>
                                    <li>SolCity $SCN token pre-sale and launch of the IDO Platform.SolCity tokens will be also used for staking.</li>
                                    <li>Exclusive SolCity NFT merch with limited stock.</li>
                                    <li>Updating our Roadmap.</li>
                                </ul>
                            </div>
                            <div className={style.listWrapper}>
                                <ul>
                                    <li>Create a metaverse game with SolCity NFT as a main NFT to farm and earn in-game tokens.</li>
                                    <li>To be continued.</li>
                                </ul>
                            </div>
                        </div>
                    </> :

                    <div className={style.mobileViewWrapper}>
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
                        </div>
                        <img src={line} alt='line'/>
                        <div className={style.infoWrapper}>
                            <div className={style.listWrapper}>
                                <div className={style.firstDate}><span>Q1 2022</span></div>
                                <ul>
                                    <li>SolCity NFT pre-launch of 1000 NFTs with a chance to get one of 200 exclusive NFTs.</li>
                                    <li>SolCity NFT main minting event of 8600 NFTs.</li>
                                    <li>SolCity NFT listing on marketplaces SolSea, SolanArt, DigitalEyes, MagicEden, FTX. Buy, Sell and Trade NFTs on the best Solana NFT marketplaces.</li>
                                </ul>
                            </div>
                            <div className={style.listWrapper}>
                                <span>Q2 2022</span>
                                <ul>
                                    <li>Announcing the date of launching SolCity IDO Platform. Holding SolCity NFTs depending on the rearenest gives an exclusive allocation amount along with a 100% chance to participate in every new IDO.</li>
                                    <li>SolCity $SCN token pre-sale and launch of the IDO Platform.SolCity tokens will be also used for staking.</li>
                                    <li>Exclusive SolCity NFT merch with limited stock.</li>
                                    <li>Updating our Roadmap.</li>
                                </ul>
                            </div>
                            <div className={style.listWrapper}>
                                <span>Q3 2022</span>
                                <ul>
                                    <li>Create a metaverse game with SolCity NFT as a main NFT to farm and earn in-game tokens.</li>
                                    <li>To be continued.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}