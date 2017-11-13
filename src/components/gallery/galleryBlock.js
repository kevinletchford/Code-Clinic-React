import React, { Component } from "react";
import Img from "gatsby-image";
import styles from "./galleryBlock.module.scss";
import Waypoint from "react-waypoint";

class GalleryImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInView: false
    };

    this._handleEnter = this._handleEnter.bind(this);
  }

  _handleEnter({ previousPosition }) {
    if (previousPosition === Waypoint.below) {
      this.setState({
        isInView: true
      });
    }
  }
  render() {
    return (
      <Waypoint onEnter={this._handleEnter}>
        <div
          key={this.key}
          className={
            (styles.galleryItem,
            this.state.isInView ? styles.visible : styles.greyscale)
          }
        >
          <picture>
            <source
              srcSet={this.props.src + "1024x768"}
              media="(min-width: 800px)"
            />
            <source
              srcSet={this.props.src + "800x600"}
              media="(min-width: 768px)"
            />
            <source
              srcSet={this.props.src + "600x400"}
              media="(min-width: 400px)"
            />
            <img
              className={styles.galleryItem}
              src={this.props.src}
              alt={this.props.alt}
              key={this.key}
            />
          </picture>
        </div>
      </Waypoint>
    );
  }
}

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrls: [
        "https://source.unsplash.com/01vFmYAOqQ0/",
        "https://source.unsplash.com/2Bjq3A7rGn4/",
        "https://source.unsplash.com/3PmwYw2uErY/",
        "https://source.unsplash.com/t20pc32VbrU/",
        "https://source.unsplash.com/pHANr-CpbYM/",
        "https://source.unsplash.com/uOi3lg8fGl4/",
        "https://source.unsplash.com/9O1oQ9SzQZQ/",
        "https://source.unsplash.com/CwkiN6_qpDI/",
        "https://source.unsplash.com/-hI5dX2ObAs/",
        "https://source.unsplash.com/vZlTg_McCDo/",
        "https://source.unsplash.com/3Z70SDuYs5g/",
        "https://source.unsplash.com/E4944K_4SvI/"
      ]
    };
  }

  render() {
    const items = this.state.imgUrls.map((url, item) => (
      <GalleryImage src={url} key={item} alt={"Image number " + (item + 1)} />
    ));

    return <div className={styles.gallery}>{items}</div>;
  }
}

export default ({ data }) => <Gallery />;
