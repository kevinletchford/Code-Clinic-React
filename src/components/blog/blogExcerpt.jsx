import React, { Component } from "react";
import styles from "./blogExcerpt.module.scss";
import Button from "../core/button";

class BlogExcerpt extends Component {
  render() {
    return (
      <div className={styles.container}>
        <img src="https://source.unsplash.com/_PK7rviBLG0" />

        <div className={styles.text}>
          <date className={styles.date}>14th September 2014</date>
          <h2>Change your space</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sint
            a dolorem, molestiae explicabo assumenda autem earum voluptas,
            deleniti ut delectus nihil et nostrum doloremque officiis amet
            consequuntur veritatis quam.
          </p>
          <span>
            <Button text="Read" />
          </span>
        </div>
      </div>
    );
  }
}

export default BlogExcerpt;
