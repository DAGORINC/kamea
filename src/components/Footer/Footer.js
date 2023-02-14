import styles from './footer.module.css';

export default function Footer() {

    const date = new Date();

    return (
        <div className={styles.container}>
            <div className={styles.bottomContainer}>
                © Kamea {date.getFullYear()}<a className={styles.emailLink} href="mailto:DAMIAN.G.PG@GMAIL.COM"> | Projekt i realizacja:  Damian Gorzkowski</a>
            </div>
        </div>
    );
};