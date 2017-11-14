import React, { Component } from "react";
import styles from "./footer.module.scss";

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.text}>
          &copy;{new Date().getUTCFullYear()} Designed and Developed by FEK INC
        </div>
        <div className={styles.contact}>
          Email: <a href="mailto:dan@theman.com">dan@theman.com</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
