import './start.css';
import React,{ useState, useRef } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import logo from '../../images/logo-parking.svg';
import menu from '../../images/menu.svg';
import close from '../../images/btn-close.svg';


export default function Entrada() {

    const [showMenu, setShowMenu] = useState(false);
    const [entrada, setEntrada] = useState(true);
    const [saida, setSaida] = useState(false);
    const [active, setActive] = useState(false);
    const input = useRef(null);

    
    const buttonSend = () => {

        axios.post("https://parking-lot-to-pfz.herokuapp.com/parking", {
          plate: input.current.value  
        })
        .then((resp) => {
            setGoScore(true);
        })
        .catch((err) => {
            console.log(`Error in post request: ${err}`);
        });        
    }

    const check = (evt) => {

      const char = evt.key.toUpperCase();

      let field = input.current.value;
      const regex = /^[a-zA-Z]$/;
      const regexNum = /^[\d]$/; 
      const regexAll = /^[a-zA-Z0-9]$/;                
               
      setActive(false);
      if(field.length === 8) {
        setActive(true);
        return;
      }

      if(field.charAt(4) == "-") field = field.replace("-","");

      if(!regexAll.test(char)) input.current.value = field.replaceAll(char,"");

      if(field.length < 4 && !regex.test(char)) field = field.replace( /[^a-z]$/i, '' );
      
      else if(field.length === 4) {
        if(regexNum.test(char)) field = field.replace( /(.{3})(.)/,"$1-$2" );
        else field = field.substring(0, field.length - 1);  
      }
      else if(field.length === 6 && !regexAll.test(char)) field = field.substring(0, field.length - 1); 

      else if(field.length > 6 && !regexNum.test(char)) field = field.substring(0, field.length - 1);        

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
                  onKeyUp={(evt) => check(evt)} onKeyDown={(evt) => check(evt)}
                  placeholder="AAA-0000" />
                </div>

                <button className={active ? "btn-send-active" : "btn-send-inative"}
                disabled={!active} onClick={() => buttonSend()} >CONFIRMAR ENTRADA</button>

            </div>
            
        </div>



      </div>
    );
  }
  
  
  