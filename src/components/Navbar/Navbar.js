import styles from './navbar.module.css';
import carImg from '../../assets/images/car.png';
import subtitleImg from '../../assets/images/subtitle.png';
import menuIcon from '../../assets/images/menu.svg';
import { useState, useEffect } from 'react';


function Navbar() {
    const [visibilityMenu, setVisibility] = useState(-2000);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        changeVisibility()
    }, [isVisible])

    const changeVisibility = () => {
        isVisible ? setVisibility(0) : setVisibility(-2000);
    }

    return (
        <div className={styles.nav}>
            {/* mobile elements*/}
            <div style={{ marginLeft: visibilityMenu }} className={styles.mobileContainer}>
                <div className={styles.mobileMenu}>
                    <ul className={styles.mobileUl}>
                    <li className={styles.mobileListPart}>
                        <div className={styles.mobilePartLinkDiv}><a href="#kruszywa" onClick={() => setIsVisible(!isVisible)} className={styles.mobilePartLink}>Kruszywa</a></div>
                    </li>

                    <li className={styles.mobileListPart}>
                        <div className={styles.mobilePartLinkDiv}><a href="#nawozy" onClick={() => setIsVisible(!isVisible)} className={styles.mobilePartLink}>Nawozy</a></div>
                    </li>

                    <li className={styles.mobileListPart}>
                        <div className={styles.mobilePartLinkDiv}><a href="#ziemia" onClick={() => setIsVisible(!isVisible)} className={styles.mobilePartLink}>Ziemia</a></div>
                    </li>

                    <li className={styles.mobileListPart}>
                        <div className={styles.mobilePartLinkDiv}><a href="#transport" onClick={() => setIsVisible(!isVisible)} className={styles.mobilePartLink}>Transport</a></div>
                    </li>

                    <li className={styles.mobileListPart}>
                        <div className={styles.mobilePartLinkDiv}><a href="#findus" onClick={() => setIsVisible(!isVisible)} className={styles.mobilePartLink}>Gdzie nas szukać</a></div>
                    </li>

                    <li className={styles.mobileListPart}>
                        <div className={styles.mobilePartLinkDiv}><a href="#contact" onClick={() => setIsVisible(!isVisible)} className={styles.mobilePartLink}>Kontakt</a></div>
                    </li>
                </ul>
                </div>
            </div>

            <div className={styles.menu}>

                <a href="#"><img src={carImg} className={styles.carImg} /></a>
                <a href="#" className={styles.aText}><img src={subtitleImg} className={styles.subtitleImg} /></a>

                <ul className={styles.webUl}>
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

                <img onClick={() => setIsVisible(!isVisible)} className={styles.menulist} src={menuIcon}></img>
            </div>
        </div>
    );
}

export default Navbar;