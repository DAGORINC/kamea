import styles from './navbar.module.css';
import carImg from '../../assets/images/car.png';
import subtitleImg from '../../assets/images/subtitle.png';
import menuIcon from '../../assets/images/menu.svg';

function MobileNavbar() {
    return (
        <div>
        </div>
    )
}

function Navbar() {
    return (
        <div className={styles.nav}>

            <MobileNavbar />

            <div className={styles.menu}>

                <a href="#"><img src={carImg} className={styles.carImg} /></a>
                <a href="#" className={styles.aText}><img src={subtitleImg} className={styles.subtitleImg} /></a>
               
                <ul>
                    <li className={styles.listPart}>
                        <a href="#kruszywa" className={styles.partLink}>Kruszywa</a>
                    </li>

                    <li className={styles.listPart}>
                        <a href="#nawozy" className={styles.partLink}>Nawozy</a>
                    </li>

                    <li className={styles.listPart}>
                        <a href="#ziemia" className={styles.partLink}>Ziemia</a>
                    </li>

                    <li className={styles.listPart}>
                        <a href="#transport" className={styles.partLink}>Transport</a>
                    </li>

                    <li className={styles.listPart}>
                        <a href="#findus" className={styles.partLink}>Gdzie nas szukać</a>
                    </li>

                    <li className={styles.listPart}>
                        <a href="#contact" className={styles.partLink}>Kontakt</a>
                    </li>

                </ul>

                <img className={styles.menulist} src={menuIcon}></img>
            <div id='mobileMain' className={styles.mobileMain}>
            </div>
            </div>
        </div>
    );
}

export default Navbar;