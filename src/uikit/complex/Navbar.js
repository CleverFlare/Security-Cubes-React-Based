import "./css/navbar.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AccountSvg from "../../icons/AccountSvg";
import BurgerSvg from "../../icons/BurgerSvg";
import ContactSvg from "../../icons/ContactSvg";
import EditSvg from "../../icons/EditSvg";
import HomeSvg from "../../icons/HomeSvg";
import LabelSvg from "../../icons/LabelSvg";
import TrophySvg from "../../icons/TrophySvg";
import UsSvg from "../../icons/UsSvg";
import CloseSvg from "../../icons/CloseSvg";
import SignoutSvg from "../../icons/SingoutSvg";
import { HashLink } from "react-router-hash-link";
import AOS from "aos";
import { connect } from "react-redux";

const SideNavbar = ({ style, name, onSignout, logged, closeMenu }) => {
  const homeNavLinks = (
    <menu className="navbar-top__side-bar__anchors-wrapper">
      <li>
        <HashLink to="/#home" onClick={() => closeMenu()}>
          <HomeSvg />
          Home
        </HashLink>
      </li>
      <li>
        <HashLink to="/#about" onClick={() => closeMenu()}>
          <UsSvg />
          About
        </HashLink>
      </li>
      <li>
        <HashLink to="/#ctf" onClick={() => closeMenu()}>
          <TrophySvg />
          CTF Online
        </HashLink>
      </li>
      <li>
        <HashLink to="/#contact" onClick={() => closeMenu()}>
          <ContactSvg />
          Contact
        </HashLink>
      </li>
      <li>
        <HashLink to="/#pricing" onClick={() => closeMenu()}>
          <LabelSvg />
          Pricing
        </HashLink>
      </li>
      <li>
        <HashLink to="/#blog" onClick={() => closeMenu()}>
          <EditSvg />
          Blog
        </HashLink>
      </li>
    </menu>
  );

  return (
    <div className="navbar-top__side-bar" style={style}>
      <div className="navbar-top__side-bar__layout-top">
        {!logged && (
          <Link
            to="/"
            className="navbar-top__side-bar__logo-wrapper"
            onClick={() => closeMenu()}
          >
            <img src="./assets/Full Black Logo.png" alt="" />
          </Link>
        )}
        {logged && (
          <Link
            to="/account"
            className="navbar-top__side-bar__logged-user"
            onClick={() => closeMenu()}
          >
            <AccountSvg />
            <p>{name && name}</p>
            <p>Account Details</p>
          </Link>
        )}
        <hr />
        {homeNavLinks}
      </div>
      <div className="navbar-top__side-bar__layout-bottom">
        {!logged && (
          <Link
            to="/account"
            className="navbar-top__side-bar__account"
            onClick={() => closeMenu()}
          >
            <AccountSvg />
            Account
          </Link>
        )}
        {logged && (
          <button
            to="/account"
            className="navbar-top__side-bar__account"
            onClick={() => {
              onSignout();
              closeMenu();
            }}
          >
            <SignoutSvg />
            Signout
          </button>
        )}
      </div>
    </div>
  );
};

const NavBar = ({ token, resetToken, name }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 200, once: true });
  }, []);

  const [showPhoneMenu, setShowPhoneMenu] = useState(false);
  const handleCloseMenu = () => {
    setShowPhoneMenu(false);
  };

  return (
    <nav data-aos="zoom-in" className="navbar-top">
      <Link to="/" className="navbar-top__logo-wrapper">
        <img src="./assets/Full White Logo.png" alt="Security Cubes' Logo" />
      </Link>
      <menu className="navbar-top__nav-anchors">
        <li>
          <HashLink to="/#home">Home</HashLink>
        </li>
        <li>
          <HashLink to="/#about">About</HashLink>
        </li>
        <li>
          <HashLink to="/#ctf">CTF Online</HashLink>
        </li>
        <li>
          <HashLink to="/#contact">Contact</HashLink>
        </li>
        <li>
          <HashLink to="/#pricing">Pricing</HashLink>
        </li>
        <li>
          <HashLink to="/#blog">Blog</HashLink>
        </li>
      </menu>
      <div style={{ display: "flex", gap: "30px" }}>
        <Link to="/account" className="navbar-top__icon-wrapper">
          <AccountSvg />
        </Link>
        {token && (
          <button
            className="navbar-top__icon-wrapper"
            onClick={() => resetToken()}
          >
            <SignoutSvg size="30px" />
          </button>
        )}
      </div>
      <button
        className={
          "navbar-top__burger-button" +
          " " +
          `${showPhoneMenu ? "spread-layer" : ""}`
        }
        onClick={() => setShowPhoneMenu(!showPhoneMenu)}
      >
        {!showPhoneMenu && <BurgerSvg />}
        {showPhoneMenu && <CloseSvg />}
      </button>
      <SideNavbar
        logged={token ? true : false}
        name={name && name}
        onSignout={() => resetToken()}
        style={{ left: showPhoneMenu ? "0" : "-100%" }}
        closeMenu={handleCloseMenu}
      />
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetToken: () => dispatch({ type: "reset-token" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
