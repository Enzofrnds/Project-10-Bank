import { NavLink } from 'react-router'
import Logo from '../../assets/argentBankLogo.png'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../features/userSlice'

function Header() {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
    const firstName = useSelector((state) => state.user.user?.firstName)
    const lastName = useSelector((state) => state.user.user?.lastName)

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <header className="header">
            <nav className="header__nav">
                <NavLink to="/" className="header__nav__logo">
                    <img src={Logo} alt="Argent Bank Logo" />
                </NavLink>
                {isLoggedIn ? (
                    <NavLink to="/User" className="header__nav__link">
                        <i className="fa fa-user-circle"></i>
                        <p>{firstName} {lastName}</p>
                    </NavLink>
                ) : null}
                {isLoggedIn ? (
                    <NavLink to="/SignIn" className="header__nav__link" onClick={handleLogout}>
                        <i className="fa fa-sign-out"></i>
                        <p>Sign Out</p>
                    </NavLink>
                ) : (
                    <NavLink to="/SignIn" className="header__nav__link">
                        <i className="fa fa-user-circle"></i>
                        <p>Sign In</p>
                    </NavLink>
                )}
            </nav>
        </header>
    )
}

export default Header