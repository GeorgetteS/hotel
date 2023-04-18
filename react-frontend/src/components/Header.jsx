import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { clearCheque } from '../redux/cheque/chequeSlice';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const handleMenuButtonClick = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.classList.toggle('menu-open');
  };
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(clearCheque());
  }, [pathname, dispatch]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <Link to="/" className="header__logo _icon-logo"></Link>
          <nav className={classNames('header__menu menu-header', isMenuOpen && 'active')}>
            <ul className="menu-header__list">
              <li>
                <Link to="/rooms" className="menu-header__link" onClick={handleLinkClick}>
                  Номера
                </Link>
              </li>
              <li>
                <Link to="" className="menu-header__link" onClick={handleLinkClick}>
                  Об отеле
                </Link>
              </li>
              <li>
                <Link to="/booking" className="menu-header__link" onClick={handleLinkClick}>
                  Бронирование
                </Link>
              </li>
            </ul>
            <div className="header__phone phone-header">
              <div className="phone-header__icon">
                <img src="./img/phone.svg" alt="wrg" />
              </div>
              <a href="tel: +74951234567" className="phone-header__number">
                +7 (800) 005-20-23
              </a>
            </div>
          </nav>
          <div
            className={classNames('icon-menu', isMenuOpen && 'active')}
            onClick={handleMenuButtonClick}>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
