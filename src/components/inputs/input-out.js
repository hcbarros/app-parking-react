import './inputs.css';
import React,{ useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import validator from '../validator';
import Api from '../../api/api';
import loader from '../../images/ajax-loader-2.gif';
import done from '../../images/round-done-button.svg';


export default function InputOut(props) {

    const [active, setActive] = useState(false);
    const [loading, setLoading] = useState(false);
    const [registrado, setRegistrado] = useState(false);
    const [erro, setErro] = useState(false);
    const input = useRef(null);
    const dispatch = useDispatch();


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
        dispatch({type: input.current.value})
        setActive(bool);                    
    }

    useEffect(() => {

          setTimeout(() => {
            if(registrado) setRegistrado(false);
          },3000);
            
    },[registrado]);


    return (
        
        <div className={props.showMenu ? "input-out hide-body" : 
        props.show ? "input-out show-body" : "input-out"}>

            <div className={loading || registrado ? "hide" : ""}>      
                <div>
                    <div className={erro ? "hide" : "input-label"}>Número da placa:</div>
                    <input className={erro ? "input-erro" : "input-numero"} type="text" maxLength="8" ref={input} 
                    onKeyUp={(evt) => check(evt)} onKeyDown={(evt) => check(evt)}
                    placeholder="AAA-0000" />
                </div>

                <button className={active ? "btn-pay-active" : "btn-send-inative"}
                disabled={!active} onClick={() => buttonSend()} >PAGAMENTO</button>

                <div>
                    <button className={active ? "btn-out-active" : "btn-out-inative"}
                    disabled={!active} onClick={() => buttonSend()} >SAÍDA</button>
                </div>

            </div>

            <img className={loading ? "loader-in" : "hide"} src={loader} alt="image loader"/>           
            <a className={loading ? "registrando" : "hide"}>Registrando...</a>    

            <img className={registrado ? "loader-in" : "hide"} src={done} alt="image register"/>           
            <a className={registrado ? "registrando" : "hide"}>REGISTRADO!</a>     

        </div>
            
    );
  }
  
  
  