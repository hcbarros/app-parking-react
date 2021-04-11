import './start-body.css';
import React,{ useState } from 'react';
import InputIn from '../input-in/input-in'


export default function StartBody(props) {

    const [entrada, setEntrada] = useState(true);
    const [saida, setSaida] = useState(false);

    return (

        <div className={props.showMenu ? "start-body hide-body" : "start-body show-body"}>

            <div className={props.showMenu ? "buttons hide-body" : "buttons show-body"}>
                <button className={entrada ? "in" : "btn-inative"} 
                onClick={() => {setEntrada(true); setSaida(false)}}> 
                    Entrada
                </button>
                <button className={saida ? "out" : "btn-inative"} 
                onClick={() => {setEntrada(false); setSaida(true)}}>
                    Saída
                </button>
            </div>
            
            {entrada && <InputIn showMenu={props.showMenu} />}
            


        </div>

    );
  }
  
  
  