import './start.css';
import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowHistory } from '../../actions/actions';
import logo from '../../images/logo-parking.svg';
import StartBody from '../../components/start-body/start-body';
import MenuScreen from '../../components/menu/menu-screen';
import Header from '../../components/header/header';


export default function Start() {

    return (
      <div className="principal">

        <img src={logo} className="logo" alt="logo" />

        <div className="blocks">

            <Header />

            <MenuScreen />

        </div>

        <StartBody />

      </div>
    );
  }
  
  
  