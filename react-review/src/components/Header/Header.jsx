import style from "../../styles/Header.module.css"
import igniteLogo from "../../assets/ignite-logo.svg"

const Header = () =>{
    return(
        <header className={style.header}>
            <img src={igniteLogo} alt="logo do Ingnite" />
        </header>
    )
}

export default Header