import './menu.css';
import React,{useState} from 'react';
import {Redirect} from 'react-router-dom';
import logo from '../../images/logo-parking.svg';
import close from '../../images/btn-close.svg';


export default function Menu() {

    const [goToStart, setGoToStart] = useState(false);
    const [hideMenu, setHideMenu] = useState(false);

    const btnToStart = () => {
         
      setHideMenu(true);
      setTimeout(() => setGoToStart(true), 3000);
    }   

    return (
      <div className={hideMenu ? "hide-menu menu" : "menu"}>
        
          {goToStart && <Redirect to="/" />}

          <div className="menu-app">
              <img src={logo} className="logo" alt="logo" />  
              <img src={close} onClick={() => btnToStart()}
               className="menu-img-close" alt="button close" />
          </div>

          <div className="menu-text menu-text-1">Entrada</div>
          <div className="menu-text">Saída</div>

      </div>
    );
  }
  
  
  