import styles from './kruszywa.module.css';
import k3 from '../../../assets/images/k3.jpg';
import k4 from '../../../assets/images/k4.jpg';



function LeftPost(props) {
    return (
        <div className={styles.leftPost}>
            <img src={props.image} className={styles.mainImg} />
            <div className={styles.description}>
                {props.description}
            </div>
        </div>
    );
}

function RightPost(props) {
    return (
        <div className={styles.rightPost}>
            <div className={styles.description}>
                {props.description}
            </div>
            <img src={props.image} className={styles.mainImg} />
        </div>
    );
}

export default function Kruszywa() {
    return (
        <div>
            <div className={styles.regulation} id="kruszywa">

            </div>
            <div className={styles.general}>
                <p className={styles.name}>KRUSZYWA</p>
                <div className={styles.main} >
                    <LeftPost image={k3} description={desc1} />
                    <RightPost image={k4} description={desc2} />
                    <LeftPost image={k3} description={desc1} />
                    <RightPost image={k4} description={desc2} />
                </div>
            </div>
        </div>
    );
}
const desc1 = (
    <div>
        <h2>Grys żółty</h2>
        <p className={styles.shortDesc}>Wydobywany ze skamienin kopalni raciborskiej</p>
        <p className={styles.longDesc}>awiukgbfwiufa wo hio ho wfhohoi fhwhiowhiohi</p>
    </div>
);
const desc2 = (
    <div>
        <div className={styles.desc}>
            <h2>Grys szlachetny</h2>
            <p className={styles.shortDesc}>asd ads asd asd as a fwf w afwa</p>
            <p className={styles.longDesc}>awuoihdf hhawu hofho hwa ofohfawohhof hofho hooh fhoaf whofwaawuoihdf hhawu hofho hwa ofohfawohhof hofho hooh fhoaf whofwaawuoihdf hhawu hofho hwa ofohfawohhof hofho hooh fhoaf whofwaawuoihdf hhawu hofho hwa ofohfawohhof hofho hooh fhoaf whofwaawuoihdf hhawu hofho hwa ofohfawohhof hofho hooh fhoaf whofwaawuoihdf hhawu hofho hwa ofohfawohhof hofho hooh fhoaf whofwaawuoihdf hhawu hofho hwa ofohfawohhof hofho hooh fhoaf whofwa</p>
        </div>
    </div>
);