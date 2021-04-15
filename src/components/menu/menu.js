import './menu.css';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowMenu, setEntrada } from '../../actions/actions';
import Header from '../header/header';
import close from '../../images/btn-close.svg';
import arrow from '../../images/left-arrow.svg';


export default function Menu() {

    const dispatch = useDispatch();
    const showMenu = useSelector(state => state.showMenu);
    const showHistory = useSelector(state => state.showHistory);
    const history = useSelector(state => state.history);
    const [array, setArray] = useState([]);      

    const setDispatch = (bool) => {
      dispatch(setShowMenu(false));  
      if(bool != null) dispatch(setEntrada(bool));
    }

    useEffect(() => {

          if(Array.isArray(history.history)) {
            
            const arr = []
            history.history.map(p => {

                const sec = p.time.indexOf("seconds");
                const hour = p.time.indexOf("hour");
                let arrayTime = p.time.split(" ");
                let time = "";
                if(sec !== -1) time = "1 min"; 
                else if(hour !== -1) {
                  if(arrayTime[2] > "0" && arrayTime[2] < "10") {                 
                    time = arrayTime[0] + "h0" + arrayTime[2];
                  }
                  else if(arrayTime[2] == "0") time = arrayTime[0] + "h";
                  else time = arrayTime[0] + "h" + arrayTime[2];
                }
                else time = arrayTime[0] + " min";
                if(!p.paid && p.time.indexOf("hour") !== -1) time += " min"; 
                p.time = time;
                 
                arr.push(p);
            })
            setArray(arr.reverse());
          
          }
    },[history]);

    return (
    
            <div className={showMenu.showMenu && showHistory.showHistory ? "history showMenu" : 
                            showMenu.showMenu && !showHistory.showHistory ? "menu showMenu" : 
                            !showMenu.showMenu && showHistory.showHistory ? "history hideMenu" :
                            "menu hideMenu"}>

                <div className={showHistory.showHistory ? "hide" : "menu-app"}>
                    <div />  
                    <img src={close} onClick={() => setDispatch(null)}
                    className="menu-img-close" alt="button close" />
                </div>

                <div onClick={() => setDispatch(true)} 
                className={showHistory.showHistory ? "hide" : "menu-text menu-text-1"}>Entrada</div>

                <div onClick={() => setDispatch(false)} 
                className={showHistory.showHistory ? "hide" : "menu-text"}>Saída</div>

                {showHistory.showHistory && <Header/>}

                <div className={!showHistory.showHistory ? "hide" : "plates"}>

                        <div className="block-arrow">
                            <img src={arrow} alt="left arrow" />
                            <div>Placa {array.length > 0 ? array[0].plate : ""}</div>
                        </div>
                          
                        {array.map(p =>

                            <div className="data-plate">

                                <div>
                                    <div className="array-text">Tempo {p.paid ? "total" : "atual"}</div>
                                    <div>{p.time}</div>
                                </div>

                                <div>
                                    <div className="array-text">Pagamento</div>
                                    <div>{p.paid ? "Pago" : "—"}</div>
                                </div>

                            </div>
                        )}
                </div>

            </div>
    );
  }
  
  
  