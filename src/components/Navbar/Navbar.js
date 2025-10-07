import React from "react";
import TextTransition from 'react-text-transition';
import './Navbar.css';

// https://fontawesome.com - icons

function Navbar() {
  const [showCopied, setShowCopied] = React.useState(false);

  React.useEffect(() => {
    if (showCopied) {
      setTimeout(() => setShowCopied(false), 2000);
    }
  }, [showCopied]);

  return (
      <nav className='navbar'>
        <ul className='navbar__linkList'>
          <li className='navbar__linkList__item'>
            <a href='https://github.com/kitrofimov' target='_blank' rel="noreferrer">
              <i className="fa-brands fa-github fa-lg"></i>github
            </a>
          </li>
          <li className='navbar__linkList__item'>
            <a href='https://www.kaggle.com/kitrofimov' target='_blank' rel="noreferrer">
            <i className="fa-brands fa-kaggle fa-lg"></i>kaggle
            </a>
          </li>
          <li className='navbar__linkList__item'>
            <a href='https://t.me/kitrofimov' target='_blank' rel="noreferrer">
            <i className="fa-brands fa-telegram fa-lg"></i>telegram
            </a>
          </li>
        </ul>
      </nav>
  );
}

export default Navbar;

