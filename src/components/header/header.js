import './header.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setShowMenu, setShowHistory } from '../../actions/actions';
import menu from '../../images/menu.svg';


export default function Header() {

  const dispatch = useDispatch();

  const setDispatch = () => {
      dispatch(setShowMenu(true));
      dispatch(setShowHistory(false));
  }

    return (
        <div className="header">
              
            <div />

            <img src={menu} onClick={() => setDispatch()}
            className="header-menu-img" alt="menu" />

        </div>
    );
  }
  
  
  