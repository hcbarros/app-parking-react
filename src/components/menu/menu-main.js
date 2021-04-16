import './menu.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setShowMenu, setEntrada, setShowHistory } from '../../actions/actions';
import close from '../../images/btn-close.svg';


export default function MenuMain() {

    const dispatch = useDispatch();

    const setDispatch = (bool) => {
      if(bool != null) dispatch(setEntrada(bool));
      dispatch(setShowMenu(false));
      dispatch(setShowHistory(false));  
    }

    return (
            <span>
                <div className="menu-app">
                    <div />  
                    <img src={close} onClick={() => setDispatch(null)}
                    className="menu-img-close" alt="button close" />
                </div>

                <div onClick={() => setDispatch(true)} 
                className="menu-text menu-text-1">Entrada</div>

                <div onClick={() => setDispatch(false)} 
                className="menu-text">Saída</div>
            </span>
    );
  }
  
  
  