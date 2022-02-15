const P_ADD = 'P-ADD';
const P_DELETE = 'P-DELETE';
const P_SET = 'P-SET';
const P_TOTAL = 'P-TOTAL';
const P_CURRENT= 'P-CURRENT';

let initalState = {
    users: [],
    pageSize : 1,
    totalUsersCount : 0,
    currentPage : 5
}

const photoReducer = (state = initalState, action) => {

    switch (action.type) {
        case P_ADD :
            return{
                ...state , users : state.users.map(p =>{
                    if(p.id === action.id){
                        return {...p , add : true}
                    }
                    return p ;
                })
            }
        case P_DELETE :
            return{
                ...state , users : state.users.map(p =>{
                    if(p.id === action.id) {
                        return{...p , add: false}
                    }
                    return p;
                })
            }
        case P_SET :
            return{
                ...state , users : action.users
            }
        case P_TOTAL :
            return{
                ...state , totalUsersCount: action.totalCount
            }
        case P_CURRENT :
            return{
                ...state , currentPage : action.currentPage
            } 
        default :
           return state ;
 
    }

}

export const photoAdAC = (id) =>{
    return{
        type : P_ADD , id 
    }
}
export const photoDelAC = (id) =>{
    return{
        type : P_DELETE , id
    }
}
export const photoSetAC = (users) =>{
    return{
        type : P_SET , users
    }
}
export const photoCurrentAC = (current) =>{
    return{
        type: P_CURRENT , current
    }
}
export const totalAC = (totalCount) =>{
    return{
        type: P_TOTAL , totalCount
    }
}
export default photoReducer;