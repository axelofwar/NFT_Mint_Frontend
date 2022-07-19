import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import Logo2 from "../assets/img/Showcode.png";
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
        <img
              alt=""
              src={Logo2}
              width="50"
              height="50"
              //className='d-inline-block align-center'
            />{" "}
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Showcode Challenge #2
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/dev-tools'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Dev-Tools
              </Link>
            </li>

            <li>
              <Link
                to='/mint'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Mint
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>MINT</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;