import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./button.module.scss";

class Button extends Component {
  render() {
    return (
      <a href="#" className={styles.button}>
        <span>{this.props.text}</span>
      </a>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string
};

export default Button;
