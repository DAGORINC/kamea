import styles from './header.module.css';
import themeImg from '../../assets/images/theme.jpg';
function Header(){
    return(
        <div className={styles.main}>
            <img src={themeImg}/>
        </div>
    );
}

export default Header;