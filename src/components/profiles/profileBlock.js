import React, { Component } from "react";
import styles from "./profileBlock.module.scss";

const profiles = [
  {
    id: 1,
    url:
      "https://images.unsplash.com/profile-1471454450361-ac3510cc63bd?dpr=1&auto=format&fit=crop&w=200&h=200&q=60&cs=tinysrgb&crop=faces&bg=fff&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    role: "CEO",
    name: "Dan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed enim convallis, tempus erat quis, ultrices mauris. "
  },
  {
    id: 1,
    url:
      "https://images.unsplash.com/profile-fb-1464044835-8daad4c37a12.jpg?dpr=1&auto=format&fit=crop&w=200&h=200&q=60&cs=tinysrgb&crop=faces&bg=fff&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    role: "Designer",
    name: "Bran",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed enim convallis, tempus erat quis, ultrices mauris. "
  },
  {
    id: 1,
    url:
      "https://images.unsplash.com/profile-1481575933942-d448d25b55c6?dpr=1&auto=format&fit=crop&w=200&h=200&q=60&cs=tinysrgb&crop=faces&bg=fff&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    role: "Marketing EXPERT",
    name: "Sam",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed enim convallis, tempus erat quis, ultrices mauris. "
  }
];

class ProfileImage extends React.Component {
  render() {
    return (
      <div className={styles.profile}>
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
        <div className={styles.profileText}>
          <span className={styles.role}>{this.props.role}</span>
          <span className={styles.name}>{this.props.name}</span>
          <span className={styles.description}>{this.props.description}</span>
        </div>
      </div>
    );
  }
}

export default ({ data }) => (
  <div className={styles.profiles}>
    {profiles.map((profile, index) => {
      return (
        <ProfileImage
          src={profile.url}
          key={index + 1}
          alt={"Image number " + (index + 1)}
          role={profile.role}
          name={profile.name}
          description={profile.description}
        />
      );
    })}
  </div>
);
