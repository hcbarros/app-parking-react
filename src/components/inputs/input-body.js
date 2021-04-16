import './inputs.css';
import React,{ useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import $ from 'jquery'; 
import { setHistory, setShowHistory, setShowMenu } from '../../actions/actions';
import validator from '../validator';
import Api from '../../api/api';
import loader from '../../images/ajax-loader-2.gif';
import done from '../../images/round-done-button.svg';


export default function InputBody(props) {

    const [active, setActive] = useState(false);
    const [loading, setLoading] = useState(false);
    const [registrado, setRegistrado] = useState(false);
    const [pay, setPay] = useState(false);
    const [paid, setPaid] = useState(false);
    const [release, setRelease] = useState(false);
    const [erro, setErro] = useState(false);
    const input = useRef(null);
    const dispatch = useDispatch();
    const showMenu = useSelector(state => state.showMenu);


    const buttonSend = async (bool) => {

        let result = false;
       
        if(props.in) {
            setLoading(true);
            result = await Api.saveIn(input.current.value);
        }
        else {
            $('.principal').append('<div id="modal" style="z-index:2;position:absolute;width:100%;'+
            'height:100vh;min-height:620px;opacity:0.51;background:#000;top:0;"></div>');            
            
            if(bool) setPay(true);
            else setRelease(true);    
            return;                
        }                
        getRegister(result);
    }

    const getRegister = (result) => {
        setLoading(false);
        if(result) {
            setRegistrado(true);
            setErro(false);
            input.current.value = "";
        }
        else setErro(true);
        if(props.in || !result) $('#modal').remove();    
    }

    const btnConfirm = async () => {

        if(pay) setPaid(true);
        else setPaid(false);
        setPay(false);
        setRelease(false);
        setLoading(true);
        let result = false;
        if(pay) result = await Api.savePay(input.current.value);
        else result = await Api.saveOut(input.current.value);
        getRegister(result);
    }

    const btnReturn = () => {
        setPay(false); 
        setRelease(false)
        $('#modal').remove();
    }

    const check = (evt) => {
        setErro(false);
        const bool = validator(evt, input);
        setActive(bool);                    
    }

    const disModal1 = () => {
        $("body").off( "click", disModal2 );
    }

    const disModal2 = () => {
        if(registrado) {
            setRegistrado(false);
            setActive(false);
            $('#modal').remove();
        }
    }    

    $("body").on( "click", disModal2 );
    $("body").on( "click", disModal1 );


    const handlerPaste = (e) => {
        e.preventDefault();
    }


    const verHistorico = async () => {
    
        const len = input.current.value.length;
        if(len === 8) {

            setLoading(true);
            $('.principal').append('<div id="modal" style="z-index:2;position:absolute;width:100%;'+
            'height:100vh;min-height:620px;opacity:0.51;background:#000;top:0;"></div>');    

            const history = await Api.getHistory(input.current.value);

            setLoading(false);
            $('#modal').remove();

            if(history && history.length > 0) {           
                dispatch(setHistory(history));
                dispatch(setShowHistory(true));
                dispatch(setShowMenu(true));
            }
            else setErro(true);
        }
    }


    return (

        <div className="block-inputs">

            <div className={loading || registrado || pay || release ? "hide" : ""} >      
                <div>
                    <div className={erro ? "hide" : "input-label"}>Número da placa:</div>
                    <input className={erro ? "input-erro" : "input-numero"} type="text" maxLength="8" ref={input} 
                    onKeyUp={(evt) => check(evt)} onKeyDown={(evt) => check(evt)}
                    onPaste={(evt) => handlerPaste(evt)} placeholder="AAA-0000" />
                </div>

                <div className={erro ? "div-error" : "hide"}></div>
                
                
                <button className={(active && props.in) ? "btn-in-active" : 
                (active && !props.in) ? "btn-pay-active" : "btn-send-inative"}
                disabled={!active} onClick={() => buttonSend(true)} >
                {props.in ? "CONFIRMAR ENTRADA" : "PAGAMENTO"}</button>
                

                <div className={props.in ? "hide" : ""}>
                    <button className={active ? "btn-out-active" : "btn-out-inative"}
                    disabled={!active} onClick={() => buttonSend(false)} >SAÍDA</button>
                </div>

            </div>          
            

            <div className={loading || registrado || pay || release ? "alerts" : "hide"}>
                <img className={loading ? "loader-in" : "hide"} src={loader} alt="image loader"/>           
                <div className={loading ? "registrando" : "hide"}>{
                    props.in ? "Registrando..." : "Confirmando..."}</div>    

                <img className={registrado ? "loader-in" : "hide"} src={done} alt="image register"/>           
                <a className={registrado ? "registrando" : "hide"}>
                    {props.in ? "REGISTRADO!" : paid ? "PAGO!" : "SAÍDA LIBERADA!"}</a>     

                <a className={pay || release ? "text-modal" : "hide"}>
                    {pay ? "Confirma o pagamento da placa abaixo?" : "Confirma a saída do veículo da placa abaixo?"}</a>
                <a className={pay || release ? "plate-modal" : "hide"}>
                    {(input.current != null ? input.current.value : "").toUpperCase()}</a>
                <button className={pay || release ? "btn-pay-active" : "hide"} 
                    onClick={() => btnConfirm()}>{pay ? "CONFIRMAR" : "LIBERAR SAÍDA"}</button>
                <div className={pay || release ? "link-historico" : "hide"}
                    onClick={() => btnReturn()}>VOLTAR</div>       

            </div>

            <div className={props.in ? "hide" : "link-historico"}
            onClick={() => verHistorico()}>VER HISTÓRICO</div>   

        </div>
    );
  }
  
  
  