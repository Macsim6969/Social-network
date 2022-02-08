const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST'

const ADD_COMM = 'ADD-COMM'
const CHANGE_NEW_COMM = "CHANGE-NEW-COMM"

const CHANGE_SAVE = 'CHANGE-SAVE'
const CHANGE_NEW_SAVE = 'CHANGE-NEW-SAVE'

 
let initialState = { 
    rev: [
        { text: ' Hy , it\'s my first comment. I like this project !!! . I think he help me to quickly start in this language. I love React .', src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg' },
        { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg' },
        { text: 'lias illo vel reprehenderit similique voluptatibus libero ex et, dolor facere illum sit error deleniti officia consequuntur animi. Cum totam sequi aut! ', src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg' },
        { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias illo vel reprehenderit similique voluptatibus libero ex et, dolor facere illum sit error deleniti officia consequuntur animi. Cum totam sequi aut!', src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg' }
 
    ],
    text: [
        { message: 'Hy alsp i died', src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg' },
        { message: 'Hy alsp i died', src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg' },
        { message: 'Hy alsp i died', src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg' },
        { message: 'Hy alsp i died', src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg' }
    ],
    home: [
        {text : 'hi' , src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg'},
        {text : 'hi' , src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg'},
        {text : 'hi' , src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg'},
        {text : 'hi' , src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg'},
        {text : 'hi' , src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg'},
        {text : 'hi' , src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg'}
    ],
    postMewMessage: '',
    postText: '',
    postSave: 'I love you'
}; 

const mainreviewReducer = (state =initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let text = state.postMewMessage;
            return {
               ...state , postMewMessage : '', rev: [...state.rev , { text: text,  src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg'} ]
            }
        case CHANGE_NEW_POST:
            return {
                ...state , postMewMessage : action.PostAcc
            }
        case ADD_COMM:
            let texthome = state.postText;
            return {
                ...state ,  postText: '', text : [...state.text , {message: texthome, src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg'} ]
            }
        case CHANGE_NEW_COMM:
            return {
                ...state , postText: action.newpostText
            }

        case CHANGE_SAVE:
            let textsave = state.postSave;
            return {
                ...state , postSave: '' , home: [...state.home , {text: textsave, src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg'} ]
            }
        case CHANGE_NEW_SAVE:
            return {
                ...state , postSave: action.newSaveText
            }

        default:
            return state;
    }

}


export const addPostAcc = () => {

    return {
        type: ADD_POST
    }
}

export const postChangeAcc = (text) => {
    return {
        type: CHANGE_NEW_POST, PostAcc: text
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