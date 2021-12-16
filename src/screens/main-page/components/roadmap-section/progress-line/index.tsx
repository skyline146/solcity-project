import { stylesJoint } from '../../../../../helpers/utils';
import line from '../../../../../assets/images/main-page/roadmap-section/progress-line.svg';

import style from './style.module.scss';

export default function ProgressLine() {
    return (
        <div className={style.rootWrapper}>
            {/* <div className={style.rootWrapper}>
                <div className={style.linesWrapper}>
                    <div className={style.firstLine}></div>
                    <div className={style.activePoint}>
                        <div>
                            <div/>
                        </div>
                    </div>
                    <div className={stylesJoint(style.nonActivePoint, style.nonActivePoint1)}/>
                    <div className={stylesJoint(style.nonActivePoint, style.nonActivePoint2)}/>
                    <div className={style.secondLine}></div>
                </div>
                
            </div> */}
            <div className={style.imageWrapper}>
                <img src={line} alt="line"/>
            </div>
            <div className={style.dateWrapper}>
                <div>Q1 2022</div>
                <div>Q2 2022</div>
                <div>Q3 2022</div>
            </div>
        </div>
    )
}