import React from 'react';
import './header.css';
import logo from '../../images/logo-parking.svg';
import menu from '../../images/menu.svg';


export default function Header() {
    return (
      <div className="header">
        <header className="header-app">
          <img src={logo} className="logo" alt="logo" />
          
          <img src={menu} className="header-menu-img" alt="menu" />
        </header>
      </div>
    );
  }
  
  
  