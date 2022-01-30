const ADD_DIALOG = 'ADD-DIALOG'
const ADD_NEW_DIALOG = 'ADD-NEW-DIALOG'

const messageReducer = (state, action) => {

    switch (action.type) {
        case ADD_DIALOG:
            let text = state.newdialog;
            state.dia.push({ name: text });
            state.newdialog = '';
            return state;
        case ADD_NEW_DIALOG:
            state.newdialog = action.newSaveDialog;
            return state;
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