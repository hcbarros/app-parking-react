import './start-body.css';
import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setEntrada } from '../../actions/actions';
import InputIn from '../inputs/input-in';
import InputOut from '../inputs/input-out';


export default function StartBody(props) {

    const [show, setShow] = useState(true);

    const dispatch = useDispatch();
    const entrada = useSelector(state => state.entrada);
    const showMenu = useSelector(state => state.showMenu);
    const showHistory = useSelector(state => state.showHistory);

    const body = showHistory.showHistory ? "start-low-body" : "start-body";

    useEffect(() => { setShow(true) },[showMenu.showMenu]);


    return (

        <div className={showMenu.showMenu ? body + " hide-body" : body + " show-body"}>

                <div className={showMenu.showMenu ? "buttons hide-body" : "buttons show-body"}>
                    <button className={entrada.entrada ? "in" : "btn-inative"} 
                    onClick={() => {dispatch(setEntrada(true)); 
                                    setShow(false);}}> 
                        Entrada
                    </button>
                    <button className={!entrada.entrada ? "out" : "btn-inative"} 
                    onClick={() => {dispatch(setEntrada(false)); 
                                    setShow(false);}}>
                        Saída
                    </button>
                </div>
                
                {entrada.entrada && <InputIn show={show} />}

                {!entrada.entrada && <InputOut show={show} />}

        </div>

    );
  }
  
  
  