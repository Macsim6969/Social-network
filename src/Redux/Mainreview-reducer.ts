const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST'

const ADD_COMM = 'ADD-COMM'
const CHANGE_NEW_COMM = "CHANGE-NEW-COMM"

const CHANGE_SAVE = 'CHANGE-SAVE'
const CHANGE_NEW_SAVE = 'CHANGE-NEW-SAVE'


type revType = {
    text: string
    src: string
}
type textType = {
    message : string
    src: string
}
type homeType = {
    text : string
    src: string
}
let initialState = {
    rev: [
        { text: ' Hy , it\'s my first comment. I like this project !!! . I think he help me to quickly start in this language. I love React .', src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg' },
        { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg' },
        { text: 'lias illo vel reprehenderit similique voluptatibus libero ex et, dolor facere illum sit error deleniti officia consequuntur animi. Cum totam sequi aut! ', src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg' },
        { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias illo vel reprehenderit similique voluptatibus libero ex et, dolor facere illum sit error deleniti officia consequuntur animi. Cum totam sequi aut!', src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg' }

    ] as Array<revType>,
    text: [
        { message: 'Hy alsp i died', src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg' },
        { message: 'Hy alsp i died', src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg' },
        { message: 'Hy alsp i died', src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg' },
        { message: 'Hy alsp i died', src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg' }
    ] as Array<textType>,
    home: [
        { text: 'hi', src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg' },
        { text: 'hi', src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg' },
        { text: 'hi', src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg' },
        { text: 'hi', src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg' },
        { text: 'hi', src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg' },
        { text: 'hi', src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg' }
    ] as Array<homeType>,
    postMewMessage: '',
    postText: ''
};

type initialStateType = typeof initialState

const mainreviewReducer = (state = initialState, action: ActionType):initialStateType => {
    switch (action.type) {
        case ADD_POST:
            let text = state.postMewMessage;
            return {
                ...state, postMewMessage: '', rev: [...state.rev, { text: text, src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg' }]
            }
        case CHANGE_NEW_POST:
            return {
                ...state, postMewMessage: action.PostAcc
            }
        case ADD_COMM:
            let texthome = action.postText;
            return {
                ...state, text: [...state.text, { message: texthome, src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg' }]
            }
        case CHANGE_NEW_COMM:
            return {
                ...state, postText: action.newpostText
            }

        case CHANGE_SAVE:
            let textsave = action.postSave;
            return {
                ...state, home: [...state.home, { text: textsave, src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg' }]
            }
        default:
            return state;
    }

}

type ActionType = addPostAccType | postChangeAccType | addCommActionCreaterType | postChangeComCreaterType | addSaveActionType

type addPostAccType ={
    type: typeof ADD_POST
}
export const addPostAcc = ():addPostAccType => {

    return {
        type: ADD_POST
    }
}

type postChangeAccType ={
    type: typeof CHANGE_NEW_POST
    PostAcc: string
}
export const postChangeAcc = (text): postChangeAccType => {
    return {
        type: CHANGE_NEW_POST, PostAcc: text
    }
}
type addCommActionCreaterType ={
    type: typeof ADD_COMM
    postText: string
}
export const addCommActionCreater = (postText):addCommActionCreaterType => {
    return {
        type: ADD_COMM, postText
    }
}
type postChangeComCreaterType ={
    type: typeof CHANGE_NEW_COMM
    newpostText: string
}
export const postChangeComCreater = (text):postChangeComCreaterType => {
    return {
        type: CHANGE_NEW_COMM, newpostText: text
    }
}

type addSaveActionType ={
    type: typeof CHANGE_SAVE
    postSave: string
}
export const addSaveAction = (postSave): addSaveActionType => {
    return {
        type: CHANGE_SAVE, postSave
    }
}

export default mainreviewReducer;