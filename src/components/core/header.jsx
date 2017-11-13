import React, { Component } from "react";
import styles from "./header.module.scss";
import logo from "../../images/logo-elegant.png";

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <a href="/" className={styles.logo}>
          <img src={logo} alt="Code Clinic" />
        </a>
        <Menu />
      </header>
    );
  }
}

class Menu extends Component {
  render() {
    return (
      <div className={styles.menu}>
        <a href="#" className={styles.burgerMenu}>
          <span className={styles.toggle}>Menu</span>
        </a>
        <nav>
          <ul>
            <li>Home</li>
            <li>Cat People</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
