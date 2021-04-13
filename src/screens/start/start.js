import './start.css';
import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../../images/logo-parking.svg';
import StartBody from '../../components/start-body/start-body';
import Menu from '../../components/menu/menu';
import Header from '../../components/header/header';


export default function Start() {

  const showMenu = useSelector(state => state.showMenu);

    return (
      <div className="principal">

        <img src={logo} className="logo" alt="logo" />

        <div className="blocks">

            <Header />

            <Menu />

        </div>

        <StartBody />

      </div>
    );
  }
  
  
  