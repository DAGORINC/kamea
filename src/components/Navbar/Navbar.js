import styles from './navbar.module.css';
import carImg from '../../assets/images/car.png';
import subtitleImg from '../../assets/images/subtitle.png';
import menuIcon from '../../assets/images/menu.svg';
import { useState, useEffect } from 'react';


function Navbar() {
    // mobile menu visibility
    const [visibilityMenu, setVisibility] = useState('-100vw');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        changeVisibility()
    }, [isVisible])

    const changeVisibility = () => {
        isVisible ? setVisibility(0) : setVisibility('-100vw');
    }

    //navigation background
    const [fontColor, setFontColor] = useState((styles.partLink));
    const [navigationBackground, setNavigationBackground] = useState('rgba(0, 0, 0, 0.0)');

    useEffect(() => {
        changeBackground()
    }, [])

    const changeBackground = () => {
        (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
            ?
            setNavigationBackground('rgba(0, 80, 0, 0.649)') || setFontColor((styles.partLink))
            :
            setNavigationBackground('rgba(0, 0, 0, 0.0)') || setFontColor((styles.partLink2));
    }

    window.onscroll = function () { changeBackground() };

    return (
        <div className={styles.nav} style={{ backgroundColor: navigationBackground, color: fontColor }}>

            {/* mobile elements*/}
            <div style={{ marginLeft: visibilityMenu }} onClick={() => setIsVisible(false)} className={styles.mobileContainer}>

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
            {/* web elements */}
            <div className={styles.menu}>

                <div className={styles.logoContainer}>
                    <a href="#"><img src={carImg} className={styles.carImg} /></a>
                    <a href="#" className={styles.aText}><img src={subtitleImg} className={styles.subtitleImg} /></a>
                </div>

                <ul className={styles.webUl}>

                    <li className={styles.listPart}>
                        <a href="#kruszywa" className={fontColor}>Kruszywa</a>
                    </li>

                    <li className={styles.listPart}>
                        <a href="#nawozy" className={fontColor}>Nawozy</a>
                    </li>

                    <li className={styles.listPart}>
                        <a href="#ziemia" className={fontColor}>Ziemia</a>
                    </li>

                    <li className={styles.listPart}>
                        <a href="#transport" className={fontColor}>Transport</a>
                    </li>

                    <li className={styles.listPart}>
                        <a href="#findus" className={fontColor}>Gdzie nas szukać</a>
                    </li>

                    <li className={styles.listPart}>
                        <a href="#contact" className={fontColor}>Kontakt</a>
                    </li>

                </ul>


                <img onClick={() => setIsVisible(!isVisible)} className={styles.menulist} src={menuIcon}></img>
            </div>
        </div>
    );
}

export default Navbar;