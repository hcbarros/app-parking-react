import './header.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setShowMenu } from '../../actions/actions';
import menu from '../../images/menu.svg';


export default function Header() {

  const dispatch = useDispatch();

    return (
        <div className="header">
              
            <div />

            <img src={menu} onClick={() => dispatch(setShowMenu(true))}
            className="header-menu-img" alt="menu" />

        </div>
    );
  }
  
  
  