import './start.css';
import React,{ useState, useRef } from 'react';
import {Redirect} from 'react-router-dom';
import logo from '../../images/logo-parking.svg';
import menu from '../../images/menu.svg';
import close from '../../images/btn-close.svg';


export default function Start() {

    const [showMenu, setShowMenu] = useState(false);
    const [entrada, setEntrada] = useState(true);
    const [saida, setSaida] = useState(false);
    const input = useRef(null);
    const [stop, setStop] = useState('');

    
    const buttonSend = (evt) => {

      const char = evt.key.toUpperCase();
      const code = char.charCodeAt(0);

      let field = input.current.value;
      const regex = /^[a-zA-Z]$/;
      const regexNum = /^[\d]$/; 
      const regexAll = /^[a-zA-Z0-9]$/;                   
      
      let isValid = false;
      if(field.length < 4 && !regex.test(char)) field = field.replace( /[^a-z]$/i, '' );

      else if(field.length === 4 && !regexNum.test(char)) field = field.replace( /[^\d]{4}$/g, '' );

      else if(field.length === 6 && regexAll.test(char)) isValid = true; 

      else if(field.length > 6 && regexNum.test(char)) isValid = true; 
        
      
      input.current.value = field;                        
    }


    return (
      <div className="principal">

        <img src={logo} className="logo" alt="logo" />


        <div className="blocks">

            <div className="header">
              
              <div />

              <img src={menu} onClick={() => setShowMenu(!showMenu)}
              className="header-menu-img" alt="menu" />

            </div>

            <div className={showMenu ? "menu show" : "menu hide"}>

                <div className="menu-app">
                    <div />  
                    <img src={close} onClick={() => setShowMenu(!showMenu)}
                    className="menu-img-close" alt="button close" />
                </div>

                <div className="menu-text menu-text-1">Entrada</div>
                <div className="menu-text">Saída</div>

            </div>

        </div>


        <div className={showMenu ? "start-body hide-body" : "start-body show-body"}>

            <div className={showMenu ? "buttons hide-body" : "buttons show-body"}>
                <button className={entrada ? "in" : "btn-inative"} 
                onClick={() => {setEntrada(true); setSaida(false)}}> 
                    Entrada
                </button>
                <button className={saida ? "out" : "btn-inative"} 
                onClick={() => {setEntrada(false); setSaida(true)}}>
                    Saída
                </button>
            </div>
            <div className={showMenu ? "input-body hide-body" : "input-body show-body"}>
                  
                <div>
                  <div className="input-label">Número da placa:</div>
                  <input className="input-numero" type="text" maxLength="8" ref={input} 
                  onKeyUp={(evt) => buttonSend(evt)} onKeyDown={(evt) => buttonSend(evt)}
                  placeholder="AAA-0000" />
                </div>

                <button>CONFIRMAR ENTRADA</button>

            </div>
            
        </div>



      </div>
    );
  }
  
  
  