import styles from './transport.module.css';
import i1 from '../../../assets/images/i1.jpg';
export default function Transport(){
    return(
        <div id="transport" className={styles.container}>

            <div className={styles.regulation}/>

            <div className={styles.name}>
            <p>Transport</p>
            </div>
            <div className={styles.text}>Kamea świadczy usługi również w zakresie transportu krajowego, w naszej ofercie dostępne są zestawy samowyładowcze o ładowności 27ton i pojemności naczep 37-47m3, jak i również wywrotkami o ładowności 1-12 ton. Zajmujemy się transportem takich towarów jak: kruszywa, żwir, piasek, nawozy, płody rolne, torf oraz odpady posiadając przy tym odpowiednie zezwolenia.</div>


            <div className={styles.post}>
                <img src={i1} className={styles.themeImg} />
            </div>
        </div>
    );
}