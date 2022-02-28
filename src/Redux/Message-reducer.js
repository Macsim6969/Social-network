const ADD_DIALOG = 'ADD-DIALOG'
const ADD_NEW_DIALOG = 'ADD-NEW-DIALOG'

let initialState = { 
    mess: [
        { name: 'Vanya', id: 5 }, 
        { name: 'Dmitryi', id: 6 },
        { name: 'Oleg', id: 4 },
        { name: 'Andreu', id: 3 },
        { name: 'ALya', id: 1 },
        { name: 'MAcs', id: 2 }
    ],
    dia: [
        { name: 'HI' },
        { name: ' i love you' },
        { name: 'Hi , i too))' } 
    ],
    newdialog: '' 
} 

const messageReducer = (state = initialState, action) => { 

    switch (action.type) {
        case ADD_DIALOG:
            let text = state.newdialog;
            return {
                ...state , newdialog: '' , dia: [...state.dia ,{name: text} ]
            }
        case ADD_NEW_DIALOG:
            return {
                ...state , newdialog: action.newSaveDialog 
            }

        default:
            return state;
    }

}

export const addSaveDialog = () => {
    return {
        type: ADD_DIALOG
    }
}

export const postSaveDialog = (text) => {
    return {
        type: ADD_NEW_DIALOG, newSaveDialog: text
    }
}

export default messageReducer;