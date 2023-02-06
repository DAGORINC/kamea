import styles from './aboutUs.module.css';
import subtitle from '../../assets/images/subtitle.png'

function About_us() {
    return (
        <div className={styles.general}>

            <div className={styles.text1}>

                <img src={subtitle} alt={'subtitle'} className={styles.subtitle} />

                <div className={styles.tag}>Skład Kruszyw</div>
                <div className={styles.tag}>Transport</div>


                <div className={styles.description}>

                    Firma powstała w roku 1995 i od tego czasu świadczy usługi transportowe
                    na terenie całego kraju. Specjalizujemy się w transporcie kruszyw, a także posiadamy własny skład kruszyw.

                </div>


            </div>

            <div className={styles.text2}>
                <p className={styles.topDescription}>
                    Nasze wieloletnie doświadczenie w branży transportowej oraz zaangażowanie w zapewnienie najwyższej jakości usług, czyni
                    nas liderem w branży. Zawsze dostosowujemy się do potrzeb naszych klientów i dbamy o to, aby nasze usługi spełniały ich oczekiwania.
                </p>
                <p className={styles.bottomDescription}>
                    Nasze flota pojazdów jest nowoczesna i stale modernizowana, co pozwala nam na sprawny i bezpieczny transport towarów.
                    W naszej ofercie znajdą Państwo szeroką gamę kruszyw, a nasz profesjonalny i doświadczony zespół zapewni Państwu kompleksową obsługę i doradztwo.
                </p>
            </div>

        </div>
    );
}

export default About_us;