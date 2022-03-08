const SET_INITIALIZED = 'SET_INITIALIZED';

let initalState = {
    initialized: false
}

const appReducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state, initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () =>{
    return{
        type : SET_INITIALIZED 
    }
}

export const initializeApp = () => (dispatch) =>{

}

export default appReducer;