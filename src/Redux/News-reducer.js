const SET_NEWS = 'SET_NEWS';
const SET_NEWS_AC = 'SET_NEWS_AC'

let initalState = {
    news: [
        { message: '7898798' }
    ],
    setnews: ''
}

const newsReducer = (state = initalState, action) => {
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

export const addNews = () =>{
    return{
        type: SET_NEWS 
    }
}
export const addNewsAC = (text) =>{
    return{
        type: SET_NEWS_AC , newSaveNEws: text
    }
} 

export default newsReducer;