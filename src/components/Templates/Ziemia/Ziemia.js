import styles from './ziemia.module.css';
import i3 from '../../../assets/images/k3.jpg';
import i4 from '../../../assets/images/k4.jpg';

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

export default function Ziemia() {
    return (
        <div>
            <div>
                <div className={styles.regulation} id="ziemia"></div>

                <div className={styles.general}>
                    <p className={styles.name}>Ziemia</p>
                    <p className={styles.transport}></p>
                    <div className={styles.main}>
                        <LeftPost image={i3} description={desc1} />
                        <RightPost image={i4} description={desc2} />
                        <LeftPost image={i3} description={desc3} />
                    </div>
                </div>
            </div>
        </div>
    );
}

const desc1 = (
    <div>
        <h2>Ziemia Popieczarkowa</h2>
        <p className={styles.shortDesc}>doskonale wzbogaca glebę  pod uprawy warzyw, kwiatów, drzewek owocowych, trawników</p>
        <p className={styles.longDesc}>
            Zalety<br />
            Ziemia jest przeleżała co sprawia, że jest łatwo przyswajalna a przed dostawą dodatkowo przesiewana dzięki czemu jest sypka, napowietrzona i pozbawiona grudek. Rozkłada się szybko i wydziela sporo ciepła, dlatego jest świetny zwłaszcza do przydomowej szklarni.<br />
            <br />Zastosowanie<br />

            -Wzbogacanie kompostu – podłoże popieczarkowe jest doskonałym dodatkiem do kompostu.<br />
            -Zatrzymywanie wody – dzięki bardzo dużej zawartości substancji organicznych, podłoże pieczarkowe magazynuje wodę. To zaleta zwłaszcza na glebach piaszczystych.<br />
            -Nawożenie trawnika – podłoże pieczarkowe można rozsypywać na trawniku. Trawie nie tylko dostarcza azot i inne składniki, ale i poprawia strukturę ziemi oraz magazynuje wodę.<br />
            -Odkwaszanie gleby – tam, gdzie stosuje się podłoże popieczarkowe, nie ma zwykle potrzeby wapnowania gleby. Ziema pieczarkowa ma pH około 7.


        </p>
    </div>
);
const desc2 = (
    <div>
        <h2>Ziemia ogrodowa</h2>
        <p className={styles.shortDesc}>Ziemia przesiewana</p>
        <p className={styles.longDesc}>
            Ziemię przed dostawą przesiewamy na przesiewaczu bębnowym, co sprawia , że jest ona wolna od zanieczyszczeń, sypka i napowietrzona. Możemy wykonać na Wasze zamówienie mieszankę ziemi o dowolnym składzie używając torfu, ziemi polnej, ziemi pieczarkowej, piasku.
        </p>

    </div>
);
const desc3 = (
    <div>
        <h2>Torf</h2>
        <p className={styles.shortDesc}>Torf niski o pH od 5 do 7 w zależności od torfowiska z którego jest pozyskany</p>
        <p className={styles.longDesc}>
            Oferujemy torf z dowozem zestawami o pojemności 30-35 m3 z dowozem na terenie całego kraju, oraz mniejsze dostawy wywrotkami od 1 do 12m3 z naszych składów w Zakręcie oraz Mlęcinie.
            Torf na życzenie klienta może być przesiewany.
        </p>

    </div>
);