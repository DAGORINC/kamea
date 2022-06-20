import styles from './nawozy.module.css';
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

export default function Nawozy() {
    return (
        <div>
            <div className={styles.regulation} id="nawozy"></div>

            <div className={styles.general}>
                <p className={styles.name}>Nawozy</p>
                <p className={styles.transport}></p>
                <div className={styles.main}>
                    <LeftPost image={i3} description={desc1} />
                    <RightPost image={i4} description={desc2} />
                    <LeftPost image={i3} description={desc3} />
                    <RightPost image={i4} description={desc4} />
                    <LeftPost image={i3} description={desc5} />
                    <RightPost image={i4} description={desc6} />
                </div>
            </div>
        </div>
    );
}
const desc1 = (
    <div>
        <h2>Podłoże popieczarkowe</h2>
        <p className={styles.shortDesc}></p>
        <p className={styles.longDesc}>Podłoże popieczarkowe to mieszanina kompostowanego
            obornika końskiego, kurzego, słomy oraz torfu. Kompost
            popieczarkowy zawiera 60-70 procent wody, a resztę
            stanowi sucha masa. Może być wykorzystany w uprawie
            ziemniaków, buraków oraz zbóż. Ponadto można go wykorzystywać
            do ściółkowania gleby w sadach, jako dodatek do ziem inspektowych
            oraz przy produkcji rozsad warzyw i kwiatów. Zalecane terminy
            stosowania kompostu popieczarkowego to wczesna wiosna i jesień. <br /><br />
            Główne składniki:<br />
            -Substancje organiczne - ok. 65%<br />
            -Azot - ok. 1%<br />
            -Fosfor - ok. 0,4-0,5%<br />
            -Potas - ok. 0,6-0,7%<br />
            -Wapń - ok. 4-5%<br />
            Magnez - ok. 0,1-0,2%<br />

        </p>
    </div>
);
const desc2 = (
    <div>
        <h2>Wapno nawozowe</h2>
        <p className={styles.shortDesc}>Węglanowe z Kopalni Morawica</p>
        <p className={styles.longDesc}>
            Skład wapna:<br />
            -CaCO3 –węglan wapnia- 96%-98%<br />
            -MgO –tlenek magnezu- 1%-2%<br />
            -CaO –tlenek wapnia- 53%-54%<br />
            -aktywność chemiczna- 93%<br />
            -wilgotność- 3%-8%<br />
            -reaktywność – 88%
        </p>

    </div>
);
const desc3 = (
    <div>
        <h2>Wapno magnezowe</h2>
        <p className={styles.shortDesc}>Dolomitowe, barwy szarej, żółtej, czerwonej z Kopalni Jaźwica, Laskowa, Winna, Wszachów, Imielin</p>
        <p className={styles.longDesc}>
            Skład wapna:<br />
            -CaCO3- węglan wapnia  57-62%<br />
            -MgCO3  - węglan magnezu 30-35%<br />
            -CaO+MgO tlenek wapnia+tlenek magnezu miń. 50%,<br />
            W tym:<br />
            MgO- tlenek magnezu- 18-22%,<br />
            CaO - tlenek wapnia  30-32%<br />

        </p>

    </div>
);
const desc4 = (
    <div>
        <h2>Obornik koński</h2>
        <p className={styles.shortDesc}>Uznany jest za najlepszy  do nawożenia</p>
        <p className={styles.longDesc}>Ma dużo substancji organicznych, sprzyja nagrzewaniu gleby, ma sporo azotu, odkwasza glebę, szybko się rozkłada. Nawóz koński był najbardziej polecany na zasilania warzyw już w XIX wieku. Niestety ze względu na dbałość o czystość w stajniach jest w tej chwili bardzo słomiasty i raczej nadaje się do ściółkowania niż do nawożenia.
        </p>

    </div>
);
const desc5 = (
    <div>
        <h2>Obornik bydlęcy</h2>
        <p className={styles.shortDesc}></p>
        <p className={styles.longDesc}>Stosuje się go na różnych glebach, ale polecany jest na podłoża piaszczyste, w których składniki pokarmowe szybko są wymywane.
        </p>

    </div>
);
const desc6 = (
    <div>
        <h2>Obornik popieczarkowy</h2>
        <p className={styles.shortDesc}>Popieczarkowy to nazwa przekompostowanego podłoża popieczarkowego</p>
        <p className={styles.longDesc}> Średnio jeden metr sześcienny świeżego podłoża to odpowiednik 2,3 obornika bydlęcego, dodatkowo nie zawiera siewek chwastów. Mimo że produkt sam w sobie jest odpadem, może skutecznie pomóc nam w uzupełnieniu braków wspomnianej materii organicznej, jak i wnieść znaczne ilości NPK i mikroskładników. . Rozkłada się szybko i wydziela sporo ciepła, dlatego jest świetny zwłaszcza do przydomowej szklarni. Azotu zawiera zwykle więcej niż nawóz krów. Dzięki temu, że  nie ma zbyt intensywnego zapachu,jest lepszy niż kurzak
        </p>

    </div>
);