import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './scss/navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`navbar ${isMenuOpen ? 'navbar--open' : ''}`}
      style={{
        position: 'sticky',
        top: '0',
        left: '0',
        overflow: 'hidden',
        zIndex: '1',
      }}
    >
      <div className="navbar__left">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="navbar__link"
        >
          <img
            alt="logo"
            src="https://res.cloudinary.com/dhbiouaym/image/upload/v1663667966/Portfolio/logo_qny4vm.png"
            className="navbar__img"
          />
        </Link>
      </div>
      <div className={`navbar__right ${isMenuOpen ? 'navbar__right--open' : ''}`}>
        <ul className={`navbar__list ${isMenuOpen ? 'navbar__list--open' : ''}`}>
          <li className="navbar__items">
            <Link
              to="about"
              smooth={true}
              duration={1200}
              className="navbar__itemsLink"
              onClick={handleMenuClick}
            >
              <span className="navbar__itemsLinkNumeric">01.</span>.about
            </Link>
          </li>
          <li className="navbar__items">
            <Link
              to="project"
              smooth={true}
              duration={1200}
              className="navbar__itemsLink"
              onClick={handleMenuClick}
            >
              <span className="navbar__itemsLinkNumeric">02.</span>.project
            </Link>
          </li>
          <li className="navbar__items">
            <Link
              to="git_contro_id"
              smooth={true}
              duration={1200}
              className="navbar__itemsLink"
              onClick={handleMenuClick}
            >
              <span className="navbar__itemsLinkNumeric">03.</span>.github
            </Link>
          </li>
          <li className="navbar__items">
            <Link
              to="contact"
              smooth={true}
              duration={1200}
              className="navbar__itemsLink"
              onClick={handleMenuClick}
            >
              <span className="navbar__itemsLinkNumeric">04.</span>.contact
            </Link>
          </li>
        </ul>
        <a
          href="https://drive.google.com/file/d/12FfwqKsD6IE8SbFQ9XgQSKG4SG1FrGCu/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
          className="navbar__button"
        >
          Resume
        </a>
      
      </div>
    </nav>
  );
};

export default Navbar;
