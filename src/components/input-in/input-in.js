import './input-in.css';
import React,{ useState, useRef, useEffect } from 'react';
import validator from '../validator';
import Api from '../../api/api';
import loader from '../../images/ajax-loader-2.gif';
import done from '../../images/round-done-button.svg';


export default function InputIn(props) {

    const [active, setActive] = useState(false);
    const [loading, setLoading] = useState(false);
    const [registrado, setRegistrado] = useState(false);
    const [erro, setErro] = useState(false);
    const input = useRef(null);

    const buttonSend = async () => {

        setLoading(true);
        setActive(false);    
        const result = await Api.saveIn(input.current.value);
        setLoading(false);                
        if(result) {
            setRegistrado(true);
            input.current.value = "";
        }
        else setErro(true);
    }

    const check = (evt) => {
        setErro(false);
        const bool = validator(evt, input);
        setActive(bool);                    
    }

    useEffect(() => {

          setTimeout(() => {
            if(registrado) setRegistrado(false);
          },3000);
            
    },[registrado]);


    return (
        
        <div className={props.showMenu ? "input-body hide-body" : "input-body show-body"}>

            <div className={loading || registrado ? "hide" : "block-in"}>      
                <div>
                    <div className={erro ? "hide" : "input-label"}>Número da placa:</div>
                    <input className={erro ? "input-erro" : "input-numero"} type="text" maxLength="8" ref={input} 
                    onKeyUp={(evt) => check(evt)} onKeyDown={(evt) => check(evt)}
                    placeholder="AAA-0000" />
                </div>

                <div className={erro ? "div-error" : "hide"}></div>

                <button className={active ? "btn-send-active" : "btn-send-inative"}
                disabled={!active} onClick={() => buttonSend()} >CONFIRMAR ENTRADA</button>
            </div>

            <img className={loading ? "loader-in" : "hide"} src={loader} alt="image loader"/>           
            <a className={loading ? "registrando" : "hide"}>Registrando...</a>    

            <img className={registrado ? "loader-in" : "hide"} src={done} alt="image register"/>           
            <a className={registrado ? "registrando" : "hide"}>REGISTRADO!</a>     

        </div>
            
    );
  }
  
  
  