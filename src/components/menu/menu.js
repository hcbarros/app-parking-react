import './menu.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowMenu, setEntrada } from '../../actions/actions';
import close from '../../images/btn-close.svg';


export default function Menu() {

    const dispatch = useDispatch();
    const showMenu = useSelector(state => state.showMenu);
    const showHistory = useSelector(state => state.showHistory);

    const setDispatch = (bool) => {
      dispatch(setShowMenu(false));  
      if(bool != null) dispatch(setEntrada(bool));
    }

    return (
    
            <div className={showMenu.showMenu ? "menu showMenu" : "menu hideMenu"}>

                <div className="menu-app">
                    <div />  
                    <img src={close} onClick={() => setDispatch(null)}
                    className="menu-img-close" alt="button close" />
                </div>

                <div onClick={() => setDispatch(true)} 
                className="menu-text menu-text-1">Entrada</div>

                <div onClick={() => setDispatch(false)} 
                className="menu-text">Saída</div>

            </div>
    );
  }
  
  
  