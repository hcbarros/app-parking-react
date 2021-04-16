
import {combineReducers} from 'redux'


const showMenu = (state = {showMenu: false}, action) => {
    return action.type === 'showMenu' ? 
          { ...state, showMenu: action.payload } : state;            
}

const menu = (state = {menu: true}, action) => {
    return action.type === 'menu' ? 
          { ...state, menu: action.payload } : state;            
}

const entrada = (state = {entrada: true}, action) => {
    return action.type === 'entrada' ? 
          { ...state, entrada: action.payload } : state;            
}

const history = (state = {history: []}, action) => {
    return action.type === 'history' ? 
          { ...state, history: action.payload } : state;            
}

const showHistory = (state = {showHistory: false}, action) => {
    return action.type === 'showHistory' ? 
          { ...state, showHistory: action.payload } : state;            
}



const rootReducer = combineReducers({
    showMenu,
    menu,
    entrada,
    history,
    showHistory
});


export default rootReducer;