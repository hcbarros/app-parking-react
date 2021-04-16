import './start.css';
import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../../images/logo-parking.svg';
import StartBody from '../../components/start-body/start-body';
import MenuScreen from '../../components/menu/menu-screen';
import Header from '../../components/header/header';


export default function Start() {

    const showHistory = useSelector(state => state.showHistory);
    const showMenu = useSelector(state => state.showMenu);

    return (
      <div className="principal">

        <img src={logo} className={showHistory.showHistory || !showMenu.showMenu ?
           "logo-absolute" : "logo-fixed"} alt="logo" />

        <div className="blocks">

            <Header />

            <MenuScreen />

        </div>

        <StartBody />

      </div>
    );
  }
  
  
  