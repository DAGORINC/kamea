import styles from './footer.module.css';

export default function Footer(){
    return(
        <div className={styles.container}>
            <a className={styles.emailLink} href="mailto:DAMIAN.G.PG@GMAIL.COM"> © Damian Gorzkowski</a>
        </div>
    );
};