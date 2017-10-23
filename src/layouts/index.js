import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import Header from "../components/core/header";

import "./index.css";
import galleryImage from "../images/heydays_mellbye_11-1440x900.jpg";
import profileImage from "../images/tobias-van-schneider.png";

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <h1 className="hero__text">Say Halos to your Portfolio</h1>
      </div>
    );
  }
}

class Block extends Component {
  render() {
    return (
      <div className="block">
        <div className="block__inner">
          <h2 className="header_micro">{this.props.headerMicro}</h2>
          <h3 className="header_main">{this.props.headerMain}</h3>
          <div className="copy">{this.props.copy}</div>
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
  copy: PropTypes.object,
  inner: PropTypes.object,
  outer: PropTypes.object
};

class Gallery extends Component {
  render() {
    return <div className="block" />;
  }
}

class Profiles extends Component {
  render() {
    return <div />;
  }
}

const Footer = () => (
  <footer className="footer">
    <div className="footer__text">
      &copy;{new Date().getUTCFullYear()} Designed and Developed by FEK INC
    </div>
    <div className="footer__contact">
      Email: <a href="mailto:dan@theman.com">dan@theman.com</a>
    </div>
  </footer>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Header />
    <Hero />
    <Block
      headerMicro="What we do"
      headerMain="We lol all day long"
      copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed enim convallis, tempus erat quis, ultrices mauris. Morbi odio libero, imperdiet dictum tristique auctor, ultrices ac urna. Morbi vel nisl a tellus iaculis facilisis. Integer in neque in nunc fringilla consectetur ac interdum nunc. Fusce orci enim, auctor non laoreet ut, aliquet nec turpis. Maecenas nec commodo neque, et tincidunt mi."
      outer={<Gallery />}
    />
    <Block
      headerMicro="What we do"
      headerMain="We lol all day long"
      copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed enim convallis, tempus erat quis, ultrices mauris. Morbi odio libero, imperdiet dictum tristique auctor, ultrices ac urna. Morbi vel nisl a tellus iaculis facilisis. Integer in neque in nunc fringilla consectetur ac interdum nunc. Fusce orci enim, auctor non laoreet ut, aliquet nec turpis. Maecenas nec commodo neque, et tincidunt mi."
      inner={<Profiles />}
    />

    {children()}
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
