import styles from './nawozy.module.css';
import popieczarkowe from '../../../assets/images/popieczarkowe.JPG';
import wapnoNawozowe from '../../../assets/images/wapnoNawozowe.JPG';
import wapnoMagnezowe from '../../../assets/images/wapnoMagnezowe.JPG';
import obornikKonski from '../../../assets/images/obornikKonski.JPG';
import obornikBydlecy from '../../../assets/images/obornikBydlecy.JPG';
import obornikPopieczarkowy from '../../../assets/images/obornikPopieczarkowy.JPG';

function LeftPost(props) {
    return (
        <div className={styles.leftPost}>
            <img src={props.image} className={styles.mainImg} alt={'aggregate'}/>
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
            <img src={props.image} className={styles.mainImg} alt={'aggregate'} />
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
                    <LeftPost image={popieczarkowe} description={desc1} />
                    <RightPost image={wapnoNawozowe} description={desc2} />
                    <LeftPost image={wapnoMagnezowe} description={desc3} />
                    <RightPost image={obornikKonski} description={desc4} />
                    <LeftPost image={obornikBydlecy} description={desc5} />
                    <RightPost image={obornikPopieczarkowy} description={desc6} />
                </div>
            </div>
        </div>
    );
}
const desc1 = (
    <div>
        <h2>Podłoże popieczarkowe</h2>
        <p className={styles.shortDesc}></p>
        <div className={styles.longDesc}>
            <div>
            Podłoże popieczarkowe to mieszanina kompostowanego
            obornika końskiego, kurzego, słomy oraz torfu. Kompost
            popieczarkowy zawiera 60-70 procent wody, a resztę
            stanowi sucha masa. Może być wykorzystany w uprawie
            ziemniaków, buraków oraz zbóż. Ponadto można go wykorzystywać
            do ściółkowania gleby w sadach, jako dodatek do ziem inspektowych
            oraz przy produkcji rozsad warzyw i kwiatów. Zalecane terminy
            stosowania kompostu popieczarkowego to wczesna wiosna i jesień.

            <ul className={styles.margin}>
            Główne składniki:
            <li className={styles.list}>Substancje organiczne - ok. 65%</li>
            <li className={styles.list}>Azot - ok. 1%</li>
            <li className={styles.list}>Fosfor - ok. 0,4-0,5%</li>
            <li className={styles.list}>Potas - ok. 0,6-0,7%</li>
            <li className={styles.list}> Wapń - ok. 4-5%</li>
            <li className={styles.list}>Magnez - ok. 0,1-0,2%</li>
            </ul>
            </div>
        </div>
    </div>
);
const desc2 = (
    <div>
        <h2>Wapno nawozowe</h2>
        <p className={styles.shortDesc}>Węglanowe z Kopalni Morawica</p>
        <div className={styles.longDesc}>
            <div>
            <ul>
            Skład wapna:
            <li className={styles.list}>CaCO3 –węglan wapnia- 96%-98%</li>
            <li className={styles.list}>MgO –tlenek magnezu- 1%-2%</li>
            <li className={styles.list}>CaO –tlenek wapnia- 53%-54%</li>
            <li className={styles.list}>aktywność chemiczna- 93%</li>
            <li className={styles.list}>wilgotność- 3%-8%</li>
            <li className={styles.list}>reaktywność – 88%</li>
            </ul>
            </div>
        </div>

    </div>
);
const desc3 = (
    <div>
        <h2>Wapno magnezowe</h2>
        <p className={styles.shortDesc}>Dolomitowe, barwy szarej, żółtej, czerwonej z Kopalni Jaźwica, Laskowa, Winna, Wszachów, Imielin</p>
        <div className={styles.longDesc}>
            <ul>
            Skład wapna:
            <li className={styles.list}>CaCO3- węglan wapnia  57-62%</li>
            <li className={styles.list}>MgCO3  - węglan magnezu 30-35%</li>
            <li className={styles.list}>CaO+MgO tlenek wapnia+tlenek magnezu miń. 50%</li>
            W tym:
            <li className={styles.list}>MgO- tlenek magnezu- 18-22%,</li>
            <li className={styles.list}>CaO - tlenek wapnia  30-32%</li>
            </ul>
        </div>

    </div>
);
const desc4 = (
    <div>
        <h2>Obornik koński</h2>
        <p className={styles.shortDesc}>Uznany jest za najlepszy  do nawożenia</p>
        <div className={styles.longDesc}>Ma dużo substancji organicznych, sprzyja nagrzewaniu gleby, ma sporo azotu, odkwasza glebę, szybko się rozkłada. Nawóz koński był najbardziej polecany na zasilania warzyw już w XIX wieku. Niestety ze względu na dbałość o czystość w stajniach jest w tej chwili bardzo słomiasty i raczej nadaje się do ściółkowania niż do nawożenia.
        </div>
    </div>
);
const desc5 = (
    <div>
        <h2>Obornik bydlęcy</h2>
        <p className={styles.shortDesc}></p>
        <div className={styles.longDesc}>Stosuje się go na różnych glebach, ale polecany jest na podłoża piaszczyste, w których składniki pokarmowe szybko są wymywane.
        </div>

    </div>
);
const desc6 = (
    <div>
        <h2>Obornik popieczarkowy</h2>
        <p className={styles.shortDesc}>Popieczarkowy to nazwa przekompostowanego podłoża popieczarkowego</p>
        <div className={styles.longDesc}> Średnio jeden metr sześcienny świeżego podłoża to odpowiednik 2,3 obornika bydlęcego, dodatkowo nie zawiera siewek chwastów. Mimo że produkt sam w sobie jest odpadem, może skutecznie pomóc nam w uzupełnieniu braków wspomnianej materii organicznej, jak i wnieść znaczne ilości NPK i mikroskładników. . Rozkłada się szybko i wydziela sporo ciepła, dlatego jest świetny zwłaszcza do przydomowej szklarni. Azotu zawiera zwykle więcej niż nawóz krów. Dzięki temu, że  nie ma zbyt intensywnego zapachu,jest lepszy niż kurzak
        </div>

    </div>
);