import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
            <div className="gpt3__navbar-links_logo">
            </div>
            <div className="gpt3__navbar-links_container">
                <button><a href="#home">Home</a></button>
                <button><a href="#timeline-wrapper">TayTayTree</a></button>
                <button><a href="https://www.taylorswift.com/">Taylor's Website</a></button>
            </div>
        </div>
        <div className="gpt3__navbar-menu">
            {toggleMenu
                ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
            {toggleMenu && (
                <div className="gpt3__navbar-menu_container scale-up-center">
                    <div className="gpt3__navbar-menu_container-links">
                        <button><a href="#home">Home</a></button>
                        <button><a href="#timeline-wrapper">TayTayTree</a></button>
                        <button><a href="https://www.taylorswift.com/">Taylor's Website</a></button>
                    </div>
                </div>
            )}
        </div>
    </div>
);
};

export default Navbar;
