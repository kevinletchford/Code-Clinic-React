import React, { Component } from "react";
import styles from "./contactBlock.module.scss";

class ContactBlock extends Component {
  render() {
    return (
      <div className={styles.container}>
        <img src="https://source.unsplash.com/52gEprMkp7M/700x200" />

        <div className={styles.grid}>
          <div>
            <h2>Location</h2>
            <address>
              200, Paris Place log, Camroad,Towsnwor, York 10101
            </address>
          </div>
          <div>
            <h2>Phone</h2>
            <address>
              <span>+44 (0) 101 00000000000</span>
              <span>+44 (0) 101 00000000000</span>
            </address>
          </div>
          <div>
            <h2>Really Fax?</h2>
            <address>
              <span>+44 (0) 101 00000000000</span>
              <span>+44 (0) 101 00000000000</span>
            </address>
          </div>
          <div>
            <h2>Email</h2>
            <address>
              <span>Cat@cat.com</span>
              <span>Dog@dog.com</span>
            </address>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactBlock;
