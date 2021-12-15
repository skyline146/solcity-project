import Card from './card';

import style from './style.module.scss';

export const LaunchSection = () => {

    const cards = [];
    for (let i = 0; i < 2; i++) {
        cards.push(<Card key={i} count={i+1} Text={() => cardText(i+1)}/>);
    }

    return (
        <section id='launch' className={style.rootWrapper}>
            <div className={style.contentWrapper}>
                <div className={style.sectionTitle}>
                    <p>Launch</p>
                    <div></div>
                </div>
                {cards.map(item => item)}
            </div>
        </section>
    )
}

const cardText = (count: number) => {
    switch (count) {
        case 1: {
            return (
                <>
                    <p>Pre-launch <span className={style.boldText}>17th</span> of January <span className={style.boldText}>2022</span>, 18 PM UTC  - <span className={style.boldText}>1K</span> Solcity
                    NFTs minting, by participating in pre-launch you will get an ability
                    to win one of <span className={style.boldText}>200 exclusive</span> SolCity NFTs</p>
                </>
            )
        }

        case 2: {
            return (
                <>
                    <p>SolCity NFT Launch on <span className={style.boldText}>24th</span> of January <span className={style.boldText}>2022</span>, 18 PM UTC
                    - 8800 SolCity NFTs minting event. The price for one NFT is
                    <span className={style.boldText}> 0.85 SOL</span></p>
                </>
            )
        }

        default: {
            return (<></>)
        }
    }
}