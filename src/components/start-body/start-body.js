import './start-body.css';
import React,{ useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import InputIn from '../inputs/input-in';
import InputOut from '../inputs/input-out';


export default function StartBody(props) {

    const [show, setShow] = useState(true);
    const [entrada, setEntrada] = useState(true);
    const [saida, setSaida] = useState(false);
    const selector = useSelector(state => state.input);


    useEffect(() => {

         setEntrada(props.entrada);   
         setSaida(!props.entrada);
        
    },[props.entrada]);

    useEffect(() => { setShow(true) },[props.showMenu]);


    return (

            <div className={props.showMenu ? "start-body hide-body" : "start-body show-body"}>

                <div className={props.showMenu ? "buttons hide-body" : "buttons show-body"}>
                    <button className={entrada ? "in" : "btn-inative"} 
                    onClick={() => {setEntrada(true); 
                                    setSaida(false); 
                                    setShow(false);}}> 
                        Entrada
                    </button>
                    <button className={saida ? "out" : "btn-inative"} 
                    onClick={() => {setEntrada(false); 
                                    setSaida(true); 
                                    setShow(false);}}>
                        Saída
                    </button>
                </div>
                
                {entrada && <InputIn showMenu={props.showMenu} show={show} />}

                {!entrada && <InputOut showMenu={props.showMenu} show={show} />}
                
                {!entrada && <div className={props.showMenu ? "link-historico hide-body" :
                    show ? "link-historico show-body" : "link-historico"}>VER HISTÓRICO</div>}
        
        </div>

    );
  }
  
  
  