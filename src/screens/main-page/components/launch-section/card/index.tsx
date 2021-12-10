import style from './style.module.scss';

interface CardProps {
    count: number;
    Text: any;
}

const Card = ({count, Text}:CardProps) => {
    return (
        <div className={style.rootWrapper}>
            <div className={style.contentWrapper}>
                <div className={style.counter}>
                    <p>{count}</p>
                </div>
            </div>
            <div className={style.textWrapper}>
                <Text/>
            </div>
        </div>
    )
}

export default Card;