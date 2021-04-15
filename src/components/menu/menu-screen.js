import './menu.css';
import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../header/header';
import MenuMain from './menu-main';
import Plates from './plates/plates';


export default function MenuScreen() {

    const showMenu = useSelector(state => state.showMenu);
    const showHistory = useSelector(state => state.showHistory);

    return (
    
            <div className={showMenu.showMenu && showHistory.showHistory ? "history showMenu" : 
                            showMenu.showMenu && !showHistory.showHistory ? "menu showMenu" : 
                            !showMenu.showMenu && showHistory.showHistory ? "history hideMenu" :
                            "menu hideMenu"}>


                {!showHistory.showHistory && <MenuMain />}

                {showHistory.showHistory && <Header/>}


                <div className={!showHistory.showHistory ? "hide" : "body-plates"}>

                    <Plates />

                </div>

            </div>
    );
  }
  
  
  