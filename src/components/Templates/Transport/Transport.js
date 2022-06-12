import styles from './transport.module.css';
import i1 from '../../../assets/images/i1.jpg';
export default function Transport(){
    return(
        <div id="transport" className={styles.container}>


            <div className={styles.name}>
            <p>Transport</p>
            </div>


            <div className={styles.post}>
                <img src={i1} className={styles.themeImg} />
            </div>
        </div>
    );
}