import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./block.module.scss";

class Block extends Component {
  render() {
    return (
      <div className={styles.block}>
        <div className={styles.inner}>
          <h2 className={styles.micro}>{this.props.headerMicro}</h2>
          <h3 className={styles.main}>{this.props.headerMain}</h3>
          <div className={styles.copy}>{this.props.copy}</div>
          {this.props.inner}
        </div>
        {this.props.outer}
      </div>
    );
  }
}

Block.propTypes = {
  headerMicro: PropTypes.string,
  headerMain: PropTypes.string,
  copy: PropTypes.string,
  inner: PropTypes.object,
  outer: PropTypes.object
};

export default Block;
