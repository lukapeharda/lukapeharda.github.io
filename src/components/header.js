import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Logo from './logo';

function RandomizeCharColors(props) {
  const initial = Array.prototype.map.call(props.children, char => char);
  const [chars, setChars] = useState(initial);
  const [colorInterval, setColorInterval] = useState(null);

  const colors = ['text-e6n-red', 'text-e6n-blue', 'text-e6n-green', 'text-e6n-yellow'];

  const onMouseEnter = () => {
    setColorInterval(setInterval(() => {
      const rands = getRandomIndices(props.children.length, 4);
      setChars(initial.map((char, index) => {
        const colorIndex = rands.indexOf(index);
        if (colorIndex !== -1) {
          return <span className={colors[colorIndex]} key={index}>{ char }</span>;
        }

        return char;
      }));
    }, 500));
  }

  const onMouseLeave = (interval) => {
    clearInterval(colorInterval);
    setChars(initial);
  }

  const getRandomIndices = (max, num = 4) => {
    let numbers = [];

    while (numbers.length < num) {
      let r = Math.floor(Math.random() * max);

      if(numbers.indexOf(r) === -1 && r !== 11) {
        numbers.push(r);
      }
    }

    return numbers;
  }

  return (
    <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      { chars }
    </span>
  );
}

function Header({ siteTitle, showLogo }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="bg-e6n-black light-mode:bg-white">
      <div className="flex flex-wrap items-center justify-between p-4 md:p-8">
        <Link to="/" className="flex items-center no-underline text-gray-500 light-mode:text-gray-800">
          { showLogo ? <div  className="mr-6"><Logo width="30" height="30" /></div> : null }
          <span className="text-xl tracking-tighter">
            <RandomizeCharColors>{siteTitle}</RandomizeCharColors>
          </span>
        </Link>

        <button
          className="block md:hidden flex items-center px-3 py-2 rounded text-white light-mode:text-gray-800 focus:outline-none"
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
          <nav className="text-md" role="menubar">
            <Link
              to="/"
              role="menuitem"
              title="Home"
              className="block mt-4 p-2 md:inline-block md:mt-0 mx-3 no-underline text-gray-500 border-b border-e6n-red hover:bg-e6n-red hover:text-white light-mode:text-gray-800"
              activeClassName="nav-link--active"
            >
              home
            </Link>

            <Link
              to="/now/"
              role="menuitem"
              title="Now"
              className="block p-2 md:inline-block mt-4 md:mt-0 mx-3 no-underline text-gray-500 border-b border-e6n-blue hover:bg-e6n-blue hover:text-white light-mode:text-gray-800"
              activeClassName="nav-link--active"
            >
              now
            </Link>

            <Link
              to="/projects/"
              role="menuitem"
              title="Projects"
              className="block p-2 md:inline-block mt-4 md:mt-0 mx-3 no-underline text-gray-500 border-b border-e6n-yellow hover:bg-e6n-yellow hover:text-white light-mode:text-gray-800"
              activeClassName="nav-link--active"
            >
              projects
            </Link>

            <Link
              to="/articles/"
              role="menuitem"
              title="Articles"
              className="block p-2 md:inline-block mt-4 md:mt-0 mx-3 no-underline text-gray-500 border-b border-e6n-green hover:bg-e6n-green hover:text-white light-mode:text-gray-800"
              activeClassName="nav-link--active"
            >
              articles
            </Link>

            <Link
              to="/about/"
              role="menuitem"
              title="About"
              className="block p-2 md:inline-block mt-4 md:mt-0 mx-3 no-underline text-gray-500 border-b border-e6n-red hover:bg-e6n-red hover:text-white light-mode:text-gray-800"
              activeClassName="nav-link--active"
            >
              about
            </Link>
          </nav>
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
