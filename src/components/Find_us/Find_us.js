import styles from './findUs.module.css';

function Find_us() {
    return (
        <div id="findus" className={styles.main}>
            <div className={styles.regulation}></div>
            <div className={styles.nameFrame}>
                <p className={styles.name}>Gdzie nas szukać?</p>
            </div>
            <div className={styles.container}>
                <iframe className={styles.map}src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39104.69315727832!2d21.28447812082737!3d52.22443071654173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ed423466769d3%3A0xc187c47744aabf64!2sKamea%20Sk%C5%82ad%20Kruszyw!5e0!3m2!1spl!2spl!4v1655058657762!5m2!1spl!2spl"></iframe>
                
            </div>
            <div className={styles.adres}>
            <p className={styles.underMap}>05-077 Zakręt Trakt Brzeski 33 - Skład kruszyw i ziemi ogrodowej</p>
            </div>
        </div>
    );
}

export default Find_us;