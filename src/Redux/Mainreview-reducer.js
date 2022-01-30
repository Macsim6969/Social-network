const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST'

const ADD_COMM = 'ADD-COMM'
const CHANGE_NEW_COMM = "CHANGE-NEW-COMM"

const CHANGE_SAVE = 'CHANGE-SAVE'
const CHANGE_NEW_SAVE = 'CHANGE-NEW-SAVE'

const mainreviewReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newrev = {
                text: state.postMewMessage,
                src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg'
            }
            state.rev.push(newrev);
            state.postMewMessage = '';
            return state;
        case CHANGE_NEW_POST:
            state.postMewMessage = action.newpostText;
            return state;
        case ADD_COMM:
            let newtext = {
                message: state.postText,
                src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg'
            }
            state.text.push(newtext);
            state.postText = '';
            return state;
        case CHANGE_NEW_COMM:
            state.postText = action.newpostText;
            return state;
        case CHANGE_SAVE:
            let newsave = {
                message: state.postSave,
            }
            state.text.push(newsave);
            state.postSave = '';
            return state;
        case CHANGE_NEW_SAVE:
            state.postSave = action.newSaveText;
            return state;
        default:
            return state;
    }

}


export const addPostActionCreater = () => {

    return {
        type: ADD_POST
    }
}

export const postChangeActionCreater = (text) => {
    return {
        type: CHANGE_NEW_POST, newpostText: text
    }
}

export const addCommActionCreater = () => {
    return {
        type: ADD_COMM
    }
}

export const postChangeComCreater = (text) => {
    return {
        type: CHANGE_NEW_COMM, newpostText: text
    }
}

export const addSaveAction = () => {
    return {
        type: CHANGE_SAVE
    }
}

export const postSaveCreater = (text) => {
    return {
        type: CHANGE_NEW_SAVE, newSaveText: text
    }
}

export default mainreviewReducer;