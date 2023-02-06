import styles from './header.module.css';
import themeImg from '../../assets/images/theme2.jpg';
function Header(){
    return(
        <div className={styles.main}>
            <img src={themeImg} alt={'theme'}/>
        </div>
    );
}

export default Header;