import './inputs.css';
import React,{ useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHistory } from '../../actions/actions';
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
    const showMenu = useSelector(state => state.showMenu);


    const buttonSend = async (bool) => {

        setLoading(true);
        setActive(false);    
        setErro(false);
        let result = false;
        if(bool) result = await Api.savePay(input.current.value);
        else result = await Api.saveOut(input.current.value);
        setLoading(false);                
        if(result) {
            setRegistrado(true);
            input.current.value = "";
        }
        else {
            setErro(true)
            setActive(true);
        }
    }

    const verHistorico = async () => {
    
        const history = await Api.getHistory(input.current.value);
        if(history) {            
            dispatch(setHistory(history));
        }
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
        
        <div className={showMenu.showMenu ? "input-out hide-body" : 
        props.show ? "input-out show-body" : "input-out"}>

            <div>      
                <div>
                    <div className={erro ? "hide" : "input-label"}>Número da placa:</div>
                    <input className={erro ? "input-erro" : "input-numero"} type="text" maxLength="8" ref={input} 
                    onKeyUp={(evt) => check(evt)} onKeyDown={(evt) => check(evt)}
                    placeholder="AAA-0000" />
                </div>

                <div className={erro ? "div-error" : "hide"}></div>

                <button className={active ? "btn-pay-active" : "btn-send-inative"}
                disabled={!active} onClick={() => buttonSend(true)} >PAGAMENTO</button>

                <div>
                    <button className={active ? "btn-out-active" : "btn-out-inative"}
                    disabled={!active} onClick={() => buttonSend(false)} >SAÍDA</button>
                </div>

            </div>

            <div className="link-historico" disabled={!active} 
            onClick={() => verHistorico()}>VER HISTÓRICO</div>            

        </div>
            
    );
  }
  
  
  