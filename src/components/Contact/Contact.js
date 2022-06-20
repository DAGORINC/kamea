import styles from './contact.module.css';
import phoneImg from '../../assets/images/phone.svg';
import emailImg from '../../assets/images/envelope.svg';
function Contact() {
    return (
        <div id="contact">
            <div className={styles.regulation} />
            <div className={styles.main}>
                <div className={styles.profile}>
                    <div>
                        <a href="tel:506 721 980"><img src={phoneImg} className={styles.bigPhone} /></a>
                        <div>
                            <p className={styles.name}>Mirosław Koszewski</p>
                            <p className={styles.role}>Skład Mlęcin</p>
                        </div>
                        <div>
                            <ul className={styles.contact}>
                                <li><img src={phoneImg} />506 721 980</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.profile}><div>
                    <a href="tel:507 952 233"><img src={phoneImg} className={styles.bigPhone} /></a>
                    <a href="mailto:jackowicz@wp.pl"><img src={emailImg} className={styles.bigEmail} /></a>
                    <div>
                        <p className={styles.name}>Przemysław Jackowicz</p>
                        <p className={styles.role}>Sprzedaż Nawozów</p>
                    </div>
                    <div>
                        <ul className={styles.contact}>
                            <li><img src={phoneImg} />507 952 233</li>
                            <li><img src={emailImg} /> jackowicz@wp.pl</li>
                        </ul>
                    </div>
                </div>
                </div>

                <div className={styles.profile}><div>
                    <a href="tel:514 226 681"><img src={phoneImg} className={styles.bigPhone} /></a>
                        <div>
                            <p className={styles.name}>Kamil Koszewski</p>
                            <p className={styles.role}>Skład Zakręt</p>
                        </div>
                        <div>
                            <ul className={styles.contact}>
                                <li><img src={phoneImg} />514 226 681</li>
                            </ul>
                        </div>
                </div>
                </div>

            </div>

        </div>
    );
}

export default Contact;