
import { Link } from "react-router-dom";

function Header() {

	return (
		<header className="header">
			<div className="container">
				<div className="header__body">
					<Link to ="/" className="header__logo _icon-logo"></Link>
					<nav className="header__menu menu-header">
						<ul className="menu-header__list">
							<li><Link to="/rooms" className="menu-header__link">Номера</Link></li>
							<li><Link to="" className="menu-header__link">Об отеле</Link></li>
							<li><Link to="/booking" className="menu-header__link">Бронирование</Link></li>
							<li><Link to="/room" className="menu-header__link">room</Link></li>

						</ul>
					</nav>
					<div className="header__phone phone-header">
						<div className="phone-header__icon"><img src="./img/phone.svg" alt="wrg" /></div>
						<a href="tel: +74951234567" className="phone-header__number">+7 (800) 005-20-23</a>
					</div>
				</div>
			</div>
		</header>
	);
}



export default Header;