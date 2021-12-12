import style from './style.module.scss';

interface CardProps {
    avatar: any;
    position: string;
    name: string;
}

export default function Card({avatar, position, name}:CardProps) {
    return (
        <div className={style.rootWrapper}>
            <div className={style.avatar}>
                <img src={avatar} alt='person avatar'/>
            </div>
            <p>{name}</p>
            <p>{position}</p>
        </div>
    )
}