import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import Header from "../components/core/header";
import Hero from "../components/heros/hero";
import Block from "../components/core/block";
import Button from "../components/core/button";
import Gallery from "../components/gallery/galleryBlock";
import Profiles from "../components/profiles/profileBlock";

import "./index.css";

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

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Header />
    <Hero />
    <Block
      headerMicro="What we do"
      headerMain="We lol all day long"
      copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed enim convallis, tempus erat quis, ultrices mauris. Morbi odio libero, imperdiet dictum tristique auctor, ultrices ac urna. Morbi vel nisl a tellus iaculis facilisis. Integer in neque in nunc fringilla consectetur ac interdum nunc. Fusce orci enim, auctor non laoreet ut, aliquet nec turpis. Maecenas nec commodo neque, et tincidunt mi."
      inner={<Button text="Read More About us" />}
    />
    <Block
      headerMicro="What we do"
      headerMain="Show Your Amazing Work"
      outer={<Gallery />}
    />

    <Block
      headerMicro="The Team"
      headerMain="Who are these awesomes"
      copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed enim convallis, tempus erat quis, ultrices mauris. Morbi odio libero, imperdiet dictum tristique auctor, ultrices ac urna. Morbi vel nisl a tellus iaculis facilisis. Integer in neque in nunc fringilla consectetur ac interdum nunc. Fusce orci enim, auctor non laoreet ut, aliquet nec turpis. Maecenas nec commodo neque, et tincidunt mi."
      outer={<Profiles />}
    />

    {children()}
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default TemplateWrapper;
