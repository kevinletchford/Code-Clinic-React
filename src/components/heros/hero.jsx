import React, { Component } from "react";
import styles from "./hero.module.scss";
import heroImage from "../../images/heydays_mellbye_11-1440x900.jpg";

class Hero extends Component {
  render() {
    var backgroundImage = {
      backgroundImage: "url( 'https://source.unsplash.com/uOi3lg8fGl4')"
    };
    return (
      <div className={styles.hero} style={backgroundImage}>
        <h1 className={styles.text}>
          Say <i>Halos</i> to your Portfolio
        </h1>
      </div>
    );
  }
}

export default Hero;
