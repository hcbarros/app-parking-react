

export const setPlate = (plate) => {
    return {
        type: 'plate',
        payload: plate
    }
}

export const setShowMenu = (bool) => {
    return {
        type: 'showMenu',
        payload: bool
    }
}

export const setMenu = (bool) => {
    return {
        type: 'menu',
        payload: bool
    }
}

export const setEntrada = (bool) => {
    return {
        type: 'entrada',
        payload: bool
    }
}

export const setHistory = (history) => {
    return {
        type: 'history',
        payload: history
    }
}

export const setShowHistory = (showHistory) => {
    return {
        type: 'showHistory',
        payload: showHistory
    }
}
