import { NavLink } from 'react-router'
import Logo from '../../assets/argentBankLogo.png'
import './Header.css'

function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <NavLink to="/" className="header__nav__logo">
                    <img src={Logo} alt="Argent Bank Logo" />
                </NavLink>
                <NavLink to="/login" className="header__nav__link">
                    <i className="fa fa-user-circle"></i>
                    <p>Sign In</p>
                </NavLink>
            </nav>
        </header>
    )
}

export default Header