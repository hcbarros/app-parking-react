import './start.css';
import React,{ useState } from 'react';
import {Redirect} from 'react-router-dom';
import logo from '../../images/logo-parking.svg';
import menu from '../../images/menu.svg';
import close from '../../images/btn-close.svg';


export default function Start() {

    const [showMenu, setShowMenu] = useState(false);
    const [showHeader, setShowHeader] = useState(true);


    return (
      <div className="principal">

        <img src={logo} className="logo" alt="logo" />


        <div className="blocks">

            <div className={showMenu ? "header hide-header" : showHeader ? "header" : "header show-header"}>
              
              <div />

              <img src={menu} onClick={() => setShowMenu(!showMenu)}
              className="header-menu-img" alt="menu" />
            </div>

            <div className={showMenu ? "menu show-menu" : showHeader ? "menu" : "menu hide-menu"}>

                <div className="menu-app">
                    <div />  
                    <img src={close} onClick={() => {setShowMenu(!showMenu); setShowHeader(!showHeader)}}
                    className="menu-img-close" alt="button close" />
                </div>

                <div className="menu-text menu-text-1">Entrada</div>
                <div className="menu-text">Saída</div>

            </div>

        </div>



      </div>
    );
  }
  
  
  