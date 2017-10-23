import React, { Component } from "react";
import styles from "./header.module.scss";
console.log(styles);

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <a href="/" className={styles.logo}>
          CODE-ClINIC
        </a>
        <Menu />
      </header>
    );
  }
}

class Menu extends Component {
  render() {
    return (
      <div>
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
