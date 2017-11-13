import React from "react";
import Link from "gatsby-link";

export default ({ data }) => (
  <div>
    <h1 />
    About {data.site.siteMetadata.title}
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
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
