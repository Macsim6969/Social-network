import { InfermActionsTypes, AppStateType } from './Redux-store';
import { UserType } from "../Types/Types";

let initalState = {
    users: [] as Array<UserType>,
    pageSize : 1,
    totalUsersCount : 0,
    currentPage : 5
}

type initalStateType = typeof initalState
const photoReducer = (state = initalState, action: ActionsTypes):initalStateType => {

    switch (action.type) {
        case 'P_ADD' :
            return{
                ...state , users : state.users.map(p =>{
                    if(p.id === action.id){
                        return {...p , add : true}
                    }
                    return p ;
                })
            }
        case 'P_DELETE' :
            return{
                ...state , users : state.users.map(p =>{
                    if(p.id === action.id) {
                        return{...p , add: false}
                    }
                    return p;
                })
            }
        case 'P_SET' :
            return{
                ...state , users : action.users
            }
        case 'P_TOTAL' :
            return{
                ...state , totalUsersCount: action.totalCount
            }
        case 'P_CURRENT' :
            return{
                ...state , currentPage : action.current
            } 
        default :
           return state ;
 
    }

}
type ActionType = AppStateType

type ActionsTypes = InfermActionsTypes<typeof actions>

export const actions ={
    photoAdAC : (id: number) =>{
        return{
            type : "P_ADD" , id 
        } as const 
    },
    hotoDelAC : (id: number) =>{
        return{
            type : "P_DELETE" , id
        } as const 
    },    
    photoSetAC: (users: UserType) =>{
        return{
            type : "P_SET" , users
        } as const 
    },
    photoCurrentAC: (current: number) =>{
        return{
            type: "P_CURRENT" , current
        } as const 
    },    
    totalAC: (totalCount: number) =>{
        return{
            type: "P_TOTAL" , totalCount
        } as const 
    }
}

export default photoReducer;