import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Logo from './logo';

function Header({ siteTitle, showLogo }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="bg-e6n-black">
      <div className="flex flex-wrap items-center justify-between p-4 md:p-8">
        <Link to="/" className="flex items-center no-underline text-white">
          { showLogo ? <div  className="mr-6"><Logo width="30" height="30" /></div> : null }
          <span className="text-xl tracking-tight">{siteTitle}</span>
        </Link>

        <button
          className="block md:hidden flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          <div className="text-md">
            <Link
              to="/"
              className="block mt-4 p-2 md:inline-block md:mt-0 mx-3 no-underline text-white border-b border-e6n-red hover:bg-e6n-red"
              activeClassName="nav-link--active"
            >
              home
            </Link>

            <Link
              to="/now"
              className="block p-2 md:inline-block mt-4 md:mt-0 mx-3 no-underline text-white border-b border-e6n-blue hover:bg-e6n-blue"
              activeClassName="nav-link--active"
            >
              now
            </Link>

            <Link
              to="/projects"
              className="block p-2 md:inline-block mt-4 md:mt-0 mx-3 no-underline text-white border-b border-e6n-yellow hover:bg-e6n-yellow"
              activeClassName="nav-link--active"
            >
              projects
            </Link>

            <Link
              to="/articles"
              className="block p-2 md:inline-block mt-4 md:mt-0 mx-3 no-underline text-white border-b border-e6n-green hover:bg-e6n-green"
              activeClassName="nav-link--active"
            >
              articles
            </Link>

            <Link
              to="/about"
              className="block p-2 md:inline-block mt-4 md:mt-0 mx-3 no-underline text-white border-b border-e6n-red hover:bg-e6n-red"
              activeClassName="nav-link--active"
            >
              about
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  showLogo: PropTypes.bool
}

Header.defaultProps = {
  siteTitle: '',
  showLogo: false
};

export default Header;
