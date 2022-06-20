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
                <p className={styles.transport}>Kruszywa dostarczamy wywrotkami o ładowności 27 ton na terenie całego kraju,
                    bądź mniejszymi wywrotkami o ładowności od 1 tony z naszych składów.
                </p>
                <div className={styles.main} >
                    <LeftPost image={k3} description={desc1} />
                    <RightPost image={k4} description={desc2} />
                    <LeftPost image={k3} description={desc3} />
                    <RightPost image={k4} description={desc4} />
                    <LeftPost image={k3} description={desc5} />
                    <RightPost image={k4} description={desc6} />
                </div>
            </div>
        </div>
    );
}
const desc1 = (
    <div>
        <h2>Kruszywo drobne</h2>
        <p className={styles.shortDesc}>Piasek frakcji 0-2/0-3/0-4</p>
        <p className={styles.longDesc}>Wiślany, kopalniany do murowania, tynkowania, na posadzki, pod kostke itp.
            który ma zastosowanie w budownictwie: <br />
            -do produkcji  różnego rodzaju betonu<br />
            -do produkcji zapraw murarskich, tynkarskich<br />
            -do wykonywania ziemnych robót budowlanych<br />
            -do produkcji podsypek cementowo-piaskowych
        </p>
    </div>
);
const desc2 = (
    <div>
        <div className={styles.desc}>
            <h2>Kruszywo gruboziarniste</h2>
            <p className={styles.shortDesc}>Żwir płukany frakcji 2-8/2-16/8-16/16-32</p>
            <p className={styles.longDesc}>
                -do produkcji betonu towarowego<br />
                -jako materiał dekoracyjny w ogrodnictwie<br />
                -materiał na podbudowy, nasypy<br />
                -żwir 16-32 płukany wielokrotnie, na zielone dachy, opaski, alejki<br />
            </p>
        </div>
    </div>
);
const desc3 = (
    <div>
        <div className={styles.desc}>
            <h2>Pospółka</h2>
            <p className={styles.shortDesc}></p>
            <p className={styles.longDesc}>Swoje zastosowanie ze względu na dobre właściwości  mechaniczne i filtracyjne znajduje w drogownictwie i budownictwie. Ze względu na właściwości zagęszczające nadaje się do budowy i remontów nawierzchni dróg leśnych i polnych.</p>
        </div>
    </div>
);
const desc4 = (
    <div>
        <div className={styles.desc}>
            <h2>Piasek do piaskownicy</h2>
            <p className={styles.shortDesc}>Atestowany</p>
            <p className={styles.longDesc}>Do piaskownicy nie powinniśmy wsypywać piachu niewiadomego pochodzenia. Najlepiej kupić taki, który posiada atest Państwowego Zakładu Higieny, zawiera dużą ilość kwarcu oraz ziarnistość na poziomie 0-2 mm. Pamiętajmy, że piasek powinien być regularnie wymieniany, najlepiej co kilkanaście tygodni.</p>
        </div>
    </div>
);
const desc5 = (
    <div>
        <div className={styles.desc}>
            <h2>Kruszywa drogowe</h2>
            <p className={styles.shortDesc}>Wapienne, dolomitowe, bazaltowe, granitowe, kwarcytowe</p>
            <p className={styles.longDesc}>
                -piasek łamany 0-2/0-4<br />
                -grys  2-8/8-16/16-22 i inne<br />
                -kliniec 4-31,5<br />
                -tłuczeń 31,5-63/50-80<br />
                -mieszanka 0-31,5/0-63<br />
                -pospółka<br />
                -kruszywo betonowe<br />
                W zależności od zapotrzebowania kruszywa dostarczamy naszymi zestawami samowyładowczymi  z kopalń zlokalizowanych na terenie całego kraju.
                Kruszywa z naszych składów dowozimy wywrotkami o ładowności od 1 do 27 ton

            </p>
        </div>
    </div>
);
const desc6 = (
    <div>
        <div className={styles.desc}>
            <h2>Kruszywa ozdobne</h2>
            <p className={styles.shortDesc}>Wapienne, dolomitowe, bazaltowe, granitowe, kwarcytowe</p>
            <p className={styles.longDesc}>
                -otoczki frakcji 2-8/8-16/16-32 płukane, wielokolorowe<br />
                -grysy frakcji  2-8/8-16/16-22 białe, czarne, szare, różowe, żółte i inne<br />
                -kliniec  frakcji  4-31,5 na drogi, wjazdy parkingi<br />
                -tłuczeń 50-80/60-100 do gabionów<br />
                -żwir 16-32 wielokrotnie płukany na dachy, alejki, opaski , dachy zielone, odwrócone, obciążone itp.<br /><br />
                Kruszywa możemy również zapakować w worki  25kg lub Big Bagi 1000 kg
            </p>
        </div>
    </div>
);