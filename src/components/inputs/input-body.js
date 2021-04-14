import './inputs.css';
import React,{ useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import $ from 'jquery'; 
import { setHistory, setPlate } from '../../actions/actions';
import validator from '../validator';
import Api from '../../api/api';
import loader from '../../images/ajax-loader-2.gif';
import done from '../../images/round-done-button.svg';


export default function InputBody(props) {

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
        let result = false;
        $('.principal').append('<div style="position:absolute;width:100%;height:100vh;'+
        'min-height:670px;opacity:0.51;background:#000;top:0;"></div>')
     
        // $('body').css({"background-color": "#000",
        //                "opacity":"0.51",
        //                "z-index": "1"
        //               });
        // if(bool) {
        //     $('body').css({"background-color": "#000",
        //                "opacity":"0.51"
        //               });
        //     if(props.in) result = await Api.saveIn(input.current.value);
        //     else result = await await Api.savePay(input.current.value);        
        // }
        // else result = await Api.saveOut(input.current.value);
        // setLoading(false);                
        // if(result) {
        //     setRegistrado(true);
        //     input.current.value = "";
        // }
        // else {
        //     setErro(true)
        //     setActive(true);
        // }
    }

    const check = (evt) => {
        setErro(false);
        const bool = validator(evt, input);
        dispatch(setPlate(input.current.value));
        setActive(bool);                    
    }

    const verHistorico = async () => {
    
        const len = input.current.value.length;
        if(len === 8)
        $('body').css({"background-color": "#000",
                       "opacity":"0.51"
                      });

        // $('body').click(function() {
        
        //    alert()        
        // });


        // const history = await Api.getHistory(input.current.value);
        // if(history) {            
        //     dispatch(setHistory(history));
        // }
    }

    useEffect(() => {

          setTimeout(() => {
            if(registrado) setRegistrado(false);
          },3000);
            
    },[registrado]);


    return (

        <div className="block-inputs">

            <div className={loading || registrado ? "hide" : ""} >      
                <div>
                    <div className={erro ? "hide" : "input-label"}>Número da placa:</div>
                    <input className={erro ? "input-erro" : "input-numero"} type="text" maxLength="8" ref={input} 
                    onKeyUp={(evt) => check(evt)} onKeyDown={(evt) => check(evt)}
                    placeholder="AAA-0000" />
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
            

            <div className={loading || registrado ? "alerts" : "hide"}>
                <img className={loading ? "loader-in" : "hide"} src={loader} alt="image loader"/>           
                <div className={loading ? "registrando" : "hide"}>Registrando...</div>    

                <img className={registrado ? "loader-in" : "hide"} src={done} alt="image register"/>           
                <a className={registrado ? "registrando" : "hide"}>REGISTRADO!</a>     
            </div>

            <div className={props.in ? "hide" : "link-historico"}
            onClick={() => verHistorico()}>VER HISTÓRICO</div>   

        </div>
    );
  }
  
  
  