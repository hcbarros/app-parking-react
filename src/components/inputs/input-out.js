import './inputs.css';
import React from 'react';
import { useSelector } from 'react-redux';
import InputBody from './input-body';


export default function InputOut(props) {

    const showMenu = useSelector(state => state.showMenu);

    return (
        
        <div className={showMenu.showMenu ? "input-out hide-body" : 
        props.show ? "input-out show-body" : "input-out"}>

            <InputBody in={false} />         

        </div>
            
    );
  }
  
  
  