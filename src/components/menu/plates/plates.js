import '../menu.css';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowMenu, setShowHistory } from '../../../actions/actions';
import { plateArray } from './plate-array';
import PlateStatus from './plate-status';
import arrow from '../../../images/left-arrow.svg';


export default function Plates() {

    const dispatch = useDispatch();
    const history = useSelector(state => state.history);
    const [array, setArray] = useState([]);      
    const [plate, setPlate] = useState({});
    const [showPlate, setShowPlate] = useState(false);

    const setDispatch = () => {
      if(!showPlate) {
          dispatch(setShowMenu(false)); 
          dispatch(setShowHistory(false));  
      } 
      else setShowPlate(false);
    }

    const plateStatus = (p) => {
      setShowPlate(true);
      setPlate(p);
    }

    useEffect(() => {

          const arr = plateArray(history.history);
          setArray(arr);

    },[history]);


    return (

            <div className="plates">

                <div className="block-arrow">
                    <img src={arrow} onClick={() => setDispatch()} 
                    alt="left arrow" />
                    <div className={showPlate ? "hide" : ""}>
                        Placa {array.length > 0 ? array[0].plate : ""}</div>
                </div>
                              
                {array.map(p =>

                    <div className={showPlate ? "hide" : "data-plate"} 
                        onClick={() => plateStatus(p)} >

                        <div className="plate-time">
                            <div className="array-text">Tempo {p.paid ? "total" : "atual"}</div>
                            <div>{p.time}</div>
                        </div>

                        <div className="plate-pay">
                            <div className="array-text">Pagamento</div>
                            <div>{p.paid ? "Pago" : "—"}</div>
                        </div>

                    </div>
                )}

                {showPlate && <PlateStatus plate={plate} />}
                            
            </div>
    );
    
  }
  
  
  