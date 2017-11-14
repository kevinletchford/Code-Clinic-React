import React from "react";
import Link from "gatsby-link";

import Hero from "../components/heros/hero";
import Block from "../components/core/block";
import Button from "../components/core/button";
import Gallery from "../components/gallery/galleryBlock";
import Profiles from "../components/profiles/profileBlock";
import BlogExcerpt from "../components/blog/blogExcerpt";
import ContactBlock from "../components/contact/contactBlock";

export default ({ data }) => (
  <div>
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
      inner={<Profiles />}
    />
    <Block
      headerMicro="NO one likes to write"
      headerMain="We do this for seo"
      inner={<BlogExcerpt />}
    />
    <Block
      headerMicro="Contact us"
      headerMain="Really dont"
      inner={<ContactBlock />}
    />
  </div>
);

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
