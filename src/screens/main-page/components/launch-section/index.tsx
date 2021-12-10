import Card from './card';

import style from './style.module.scss';

export const LaunchSection = () => {

    const cardText1 = () => {
        return (
            <>
                <p>Pre-launch <span className={style.boldText}>17th</span> of January <span className={style.boldText}>2022</span>, 18 PM UTC  - <span className={style.boldText}>1K</span> Solcity</p>
                <p>NFTs minting, by participating in pre-launch you will get an ability</p>
                <p>to win one of <span className={style.boldText}>200 exclusive</span> SolCity NFTs</p>
            </>
        )
    }
    const cardText2 = () => {
        return (
            <>
                <p>SolCity NFT Launch on <span className={style.boldText}>24th</span> of January <span className={style.boldText}>2022</span>, 18 PM UTC</p>
                <p>- 8800 SolCity NFTs minting event. The price for one NFT is</p>
                <p><span className={style.boldText}>0.85 SOL</span></p>
            </>
        )
    }

    return (
        <section id='launch' className={style.rootWrapper}>
            <div className={style.contentWrapper}>
                <div className={style.sectionTitle}>
                    <p>Launch</p>
                    <div></div>
                </div>
                <Card count={1} Text={cardText1}/>
                <Card count={2} Text={cardText2}/>
            </div>
        </section>
    )
}