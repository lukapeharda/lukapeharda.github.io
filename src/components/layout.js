import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";

function Layout({ children, showHeaderLogo }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className="flex h-screen flex-col bg-e6n-black light-mode:bg-white">
          <Header siteTitle="lukapeharda.com" showLogo={ showHeaderLogo } />

          <div className="flex-grow bg-e6n-black light-mode:bg-white">
            {children}
          </div>

          <Footer />
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showHeaderLogo: PropTypes.bool
};

Layout.defaultProps = {
  showHeaderLogo: false
};

export default Layout;
