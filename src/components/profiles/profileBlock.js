import React, { Component } from "react";
import styles from "./profileBlock.module.scss";

let imgUrls = [
  "https://images.unsplash.com/profile-1471454450361-ac3510cc63bd?dpr=1&auto=format&fit=crop&w=200&h=200&q=60&cs=tinysrgb&crop=faces&bg=fff&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/profile-fb-1464044835-8daad4c37a12.jpg?dpr=1&auto=format&fit=crop&w=200&h=200&q=60&cs=tinysrgb&crop=faces&bg=fff&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/profile-1481575933942-d448d25b55c6?dpr=1&auto=format&fit=crop&w=200&h=200&q=60&cs=tinysrgb&crop=faces&bg=fff&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
];
class ProfileImage extends React.Component {
  render() {
    return (
      <div className={styles.profileImage}>
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
            className={styles.profileItem}
            src={this.props.src}
            alt={this.props.alt}
            key={this.key}
          />
        </picture>
      </div>
    );
  }
}

export default ({ data }) => (
  <div className={styles.profiles}>
    {imgUrls.map((url, index) => {
      return (
        <ProfileImage
          src={url}
          key={index + 1}
          alt={"Image number " + (index + 1)}
        />
      );
    })}
  </div>
);
