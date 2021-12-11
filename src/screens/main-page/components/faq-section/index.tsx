import { Card } from './question-card';

import style from './style.module.scss';

const questions: Array<string> = [
    'What is SolCity?',
    'What is the mint price?',
    'How to buy SolCity NFT?',
    'How was SolCity created?',
    'Will there be royalties?',
    'Will you place the SolCity NFT collection on the popular marketplaces?',
    'How many SolCity NFTs do I need to hold in order to participate in your future IDO platform?'
];

const answerLayout: string = 'SolCity is an exclusive 10,000 NFT collection in 3D on Solana blockchain with changeable attributes that have their own rarity score.  Future benefits for holders is participating in the SolCity IDO platform pre-sales with a guaranteed allocation depending on the SolCity NFT rarity.';

export const FAQSection = () => {
    const cards = questions.map((item, index) => {
        return (
            <Card key={index} question={item} answer={answerLayout}/>
        )
    });

    return (
        <section id='faq' className={style.rootWrapper}>
            <div className={style.contentWrapper}>
                <div className={style.sectionTitle}>
                    <p>FAQ</p>
                    <div></div>
                </div>
                {cards.map(item => item)}
            </div>
        </section>
    )
}