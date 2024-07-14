import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Img from "../../assets/portfolio2.png";
import "./Navbar.css";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={`navbar ${navActive ? 'active' : ''}`}>
      <div className="navbar-logo">
        <img src={Img} alt="Navbar logo" />
      </div>    
      <div className="navbar-toggle" onClick={toggleNav}>
        <MenuIcon />
      </div>
      <ul className={`navbar-menu ${navActive ? 'active' : ''}`}>
        <li className="navbar-item">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/projects" onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/skills" onClick={closeMenu}>
            Skills
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
