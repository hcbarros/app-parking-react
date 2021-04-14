import './inputs.css';
import React from 'react';
import { useSelector } from 'react-redux';
import InputBody from './input-body';


export default function InputIn(props) {

    const showMenu = useSelector(state => state.showMenu);

    return (
        
        <div className={showMenu.showMenu ? "input-in hide-body" : 
        props.show ? "input-in show-body" : "input-in"}>

            <InputBody in={true} />

        </div>          
    );
  }
  
  
  