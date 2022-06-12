import styles from './nawozy.module.css';
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

export default function Nawozy() {
    return (
        <div>
            <div className={styles.regulation} id="nawozy"></div>

            <div className={styles.general}>
                <p className={styles.name}>Nawozy</p>
                <div className={styles.main}>
                    <LeftPost image={k3} description={desc1} />
                    <RightPost image={k4} description={desc2} />
                </div>
            </div>
        </div>
    );
}
const desc1 = (
    <div>
        <h2>Polski</h2>
        <p className={styles.shortDesc}>Kopalnia Śląsk - Polskie Stwowarzyszenie Górnicze</p>
        <p className={styles.longDesc}>Ostatnia partia pod polską flagą Ostatnia partia pod polską flagą Ostatnia partia pod polską flagą </p>
    </div>
);
const desc2 = (
    <div>
            <h2>Australijski</h2>
            <p className={styles.shortDesc}>Wysoka wydajność</p>
            <p className={styles.longDesc}>Cena ciągle rozbieżna konieczny kontakt</p>
       
    </div>
);