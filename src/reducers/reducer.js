
import {combineReducers} from 'redux'


const plate = (state = {plate: ""}, action) => {
    return action.type == 'plate' ? 
          { ...state, plate: action.payload } : state;           
}

const showMenu = (state = {showMenu: false}, action) => {
    return action.type == 'showMenu' ? 
          { ...state, showMenu: action.payload } : state;            
}

const menu = (state = {menu: true}, action) => {
    return action.type == 'menu' ? 
          { ...state, menu: action.payload } : state;            
}



const rootReducer = combineReducers({
    plate,
    showMenu,
    menu
});


export default rootReducer;