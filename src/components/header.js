import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="bg-teal-500">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">
        <Link to="/" className="flex items-center no-underline text-white">
          <svg class="logo-shape-1-variant-2 logo-container" width="200" height="200" viewBox="0 0 100 100">
            <line x1="10" y1="34" x2="10" y2="95" class="line line--yellow" stroke="#ffd633" strokeWidth="2" />
            <line x1="9" y1="95" x2="55" y2="95" class="line line--blue" stroke="#1eadff" strokeWidth="2" />
            <line x1="55" y1="96" x2="55" y2="80" class="line line--green" stroke="#5f9f34" strokeWidth="2" />
            <line x1="56" y1="80" x2="25" y2="80" class="line line--yellow" stroke="#ffd633" strokeWidth="2" />
            <line x1="25" y1="81" x2="25" y2="35" class="line line--red" stroke="#fa3939" strokeWidth="2" />
            <line x1="26" y1="35" x2="11" y2="35" class="line line--blue" stroke="#1eadff" strokeWidth="2" />
            <line x1="40" y1="4" x2="40" y2="65" class="line line--yellow" stroke="#ffd633" strokeWidth="2" />
            <line x1="39" y1="65" x2="55" y2="65" class="line line--red" stroke="#fa3939" strokeWidth="2" />
            <line x1="55" y1="66" x2="55" y2="45" class="line line--green" stroke="#5f9f34" strokeWidth="2" />
            <line x1="54" y1="45" x2="80" y2="45" class="line line--blue" stroke="#1eadff" strokeWidth="2" />
            <line x1="80" y1="46" x2="80" y2="5" class="line line--red" stroke="#fa3939" strokeWidth="2" />
            <line x1="81" y1="5" x2="41" y2="5" class="line line--green" stroke="#5f9f34" strokeWidth="2" />
            <line x1="55" y1="19" x2="55" y2="30" class="line line--red" stroke="#fa3939" strokeWidth="2" />
            <line x1="54" y1="30" x2="65" y2="30" class="line line--yellow" stroke="#ffd633" strokeWidth="2" />
            <line x1="65" y1="31" x2="65" y2="20" class="line line--green" stroke="#5f9f34" strokeWidth="2" />
            <line x1="66" y1="20" x2="56" y2="20" class="line line--blue" stroke="#1eadff" strokeWidth="2" />
          </svg>
          <span className="font-bold text-xl tracking-tight">{siteTitle}</span>
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
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
          <div className="text-sm">
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-white"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="block md:inline-block mt-4 md:mt-0 no-underline text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
