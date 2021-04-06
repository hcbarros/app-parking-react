import React from 'react';
import './menu.css';
import logo from '../../images/logo-parking.svg';
import close from '../../images/btn-close.svg';
import { Header } from '../../components/header/header';


export default function Menu() {
    return (
      <div className="menu">
        
          <div className="menu-app">
              <img src={logo} className="logo" alt="logo" />  
              <img src={close} className="menu-img-close" alt="button close" />
          </div>

          <div className="menu-text menu-text-1">Entrada</div>
          <div className="menu-text">Saída</div>

      </div>
    );
  }
  
  
  