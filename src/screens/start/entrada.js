import './start.css';
import React,{ useState } from 'react';
import logo from '../../images/logo-parking.svg';
import menu from '../../images/menu.svg';
import close from '../../images/btn-close.svg';
import StartBody from '../../components/start-body/start-body';


export default function Entrada() {

    const [showMenu, setShowMenu] = useState(false);
    const [entrada, setEntrada] = useState(true);


    return (
      <div className="principal">

        <img src={logo} className="logo" alt="logo" />


        <div className="blocks">

            <div className="header">
              
              <div />

              <img src={menu} onClick={() => setShowMenu(!showMenu)}
              className="header-menu-img" alt="menu" />

            </div>

            <div className={showMenu ? "menu showMenu" : "menu hideMenu"}>

                <div className="menu-app">
                    <div />  
                    <img src={close} onClick={() => setShowMenu(!showMenu)}
                    className="menu-img-close" alt="button close" />
                </div>

                <div onClick={() => {setShowMenu(!showMenu); setEntrada(true);}} 
                className="menu-text menu-text-1">Entrada</div>

                <div onClick={() => {setShowMenu(!showMenu); setEntrada(false);}} 
                className="menu-text">Saída</div>

            </div>

        </div>


        <StartBody showMenu={showMenu} entrada={entrada} />


      </div>
    );
  }
  
  
  