import { ImagesEnum } from '../../../../helpers/themes';

import style from './style.module.scss';

export const AboutSection = () => {
    return (
        <section id='about' className={style.rootWrapper}>
            <div className={style.contentWrapper}>
                <div className={style.sectionTitle}>
                    <p>About</p>
                    <div></div>
                </div>
                <div className={style.infoWrapper}>
                    <div className={style.textWrapper}>
                        <p>SolCity is an awesome NFT project that brings value for everyone who will become a holder. Solcity is a creative 10,000 NFT collection of 3D-styled houses with a changeable environment created on the greatest Solana blockchain. Every NFT is built with different changeable attributes: background, house, fence, road, tree, air, near house, minerals and ground. Every attribute has its own rarity score that eventually affects the total rarity of the NFT. But, the rarity of your NFT will become a real game changer in the future. Asking why?</p>

                        <p>After the SolCity NFT mint event and placing on marketplaces like SolanArt, Solsea, MagicEden and Digital Eyes we will announce the date of launching our IDO platform along with a $SCN token ico. Every holder of SolCity NFT will get the exclusive allocation amount depending on the rarity score of the SolCity NFT they hold. Furthemore, every SolCity NFT holder will get access to every IDO without need to be whitelisted.</p>

                        <p>90% from the total amount of SOL gathered by selling SolCity collection will be invested in developing SolCity IDO Platform, 10% will go to the Habitat for Humanity - nonprofit housing organization working to empower people in the world`s poorest communities to overcome the chronic lack of decent housing. We believe that with our donation we can help those who in need to get their own house to live.</p>

                        <p>Get yourself an awesome house in the Solana blockchain world and don`t miss the mint date!</p>
                    </div>
                    <img src={ImagesEnum.ABOUT_SECTION_IMG} alt="gif"/>
                </div>
                <div>
                    <button className={style.buttonWrapper}>
                        Mint Soon
                    </button>
                </div>
            </div>
        </section>
    )
}