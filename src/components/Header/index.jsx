import Logo from "../../assets/logo.svg"
import styles from "./style.module.scss"
export const Header = () => {
    return(
        <header className={styles.header__container}>
            <figure>
                <img src={Logo} alt="logo image" />
            </figure>
        </header>
    )
}