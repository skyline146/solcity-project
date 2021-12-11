import { useState } from 'react';

import { IconsEnum } from '../../../../../helpers/themes';

import style from './style.module.scss';

interface CardProps {
    question: string;
    answer: string;
}

export const Card = ({question, answer}:CardProps) => {
    const [active, setActive] = useState(false);

    return (
        <div className={style.rootWrapper}>
            <div className={style.contentWrapper}>
                <div className={style.cardHeader} onClick={() => setActive(!active)}>
                    <p className={active ? style.textGradient : style.textDefault}>{question}</p>
                    <img src={active ? IconsEnum.FAQ_CARD_MINUS : IconsEnum.FAQ_CARD_PLUS} alt='icon dropdown' />
                </div>
                {active &&
                    <div className={style.answerWrapper}>
                        <p>{answer}</p>
                    </div>
                }
            </div>
        </div>
    )
}