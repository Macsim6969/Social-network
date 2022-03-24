const SET_NEWS = 'SET_NEWS';
const SET_NEWS_AC = 'SET_NEWS_AC'


type newsType ={
    message: string
}

let initalState = {
    news: [
        { message: '7898798' }
    ] as Array<newsType>,
    setnews: ''
}

type initalStateType = typeof initalState

const newsReducer = (state = initalState, action: ActionType):initalStateType => {
    switch (action.type) {
        case SET_NEWS:
            let text = state.setnews;
            return {
                ...state , setnews: '' , news : [...state.news , {message: text}]
            }
        case SET_NEWS_AC:
            return{
                ...state , setnews : action.newSaveNEws
            }
        default:
            return state;
    }
}

type ActionType = addNewsType | addNewsACType
type addNewsType = {
    type: typeof SET_NEWS
}
export const addNews = ():addNewsType =>{
    return{
        type: SET_NEWS 
    }
}
type addNewsACType ={
    type: typeof SET_NEWS_AC
    newSaveNEws: string
}
export const addNewsAC = (text):addNewsACType =>{
    return{
        type: SET_NEWS_AC , newSaveNEws: text
    }
} 

export default newsReducer;