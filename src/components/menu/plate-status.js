import './menu.css';
import React from 'react';


export default function PlateStatus(props) {

    return (
            <div className="plate-status">

                <div className="array-text">PLACA</div>
                <div>{props.plate.plate}</div>
                <div className="array-text">STATUS</div>
                <div>{props.plate.left ? "Liberado" : "Estacionado"}</div>
                <div className="array-text">
                    Tempo {props.plate.paid ? "TOTAL" : "ATUAL"}</div>
                <div>{props.plate.time}</div>
                <div className="array-text">PAGAMENTO</div>
                <div>{props.plate.paid ? "Pago" : "—"}</div>

            </div>        
    );
}
  
  
  