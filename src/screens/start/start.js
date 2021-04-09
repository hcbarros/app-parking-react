import './start.css';
import React,{ useState } from 'react';
import {Redirect} from 'react-router-dom';
import logo from '../../images/logo-parking.svg';
import menu from '../../images/menu.svg';
import close from '../../images/btn-close.svg';


export default function Start() {

    const [showMenu, setShowMenu] = useState(false);
    const [entrada, setEntrada] = useState(true);
    const [saida, setSaida] = useState(false);

    return (
      <div className="principal">

        <img src={logo} className="logo" alt="logo" />


        <div className="blocks">

            <div className={showMenu ? "header hide-header" : "header show-header"}>
              
              <div />

              <img src={menu} onClick={() => setShowMenu(!showMenu)}
              className="header-menu-img" alt="menu" />

            </div>

            <div className={showMenu ? "menu show-menu" : "menu hide-menu"}>

                <div className="menu-app">
                    <div />  
                    <img src={close} onClick={() => setShowMenu(!showMenu)}
                    className="menu-img-close" alt="button close" />
                </div>

                <div className="menu-text menu-text-1">Entrada</div>
                <div className="menu-text">Saída</div>

            </div>

        </div>


        <div className="start-body">

            <div className="buttons">
                <button className={entrada ? "in" : "btn-inative"} 
                onClick={() => {setEntrada(true); setSaida(false)}}> 
                    Entrada
                </button>
                <button className={saida ? "out" : "btn-inative"} 
                onClick={() => {setEntrada(false); setSaida(true)}}>
                    Saída
                </button>
            </div>
            <div className="input-body">
                  
                <div>
                  <div className="input-label">Número da placa:</div>
                  <input className="input-numero" type="text" />
                </div>

            </div>
            

        </div>



      </div>
    );
  }
  
  
  