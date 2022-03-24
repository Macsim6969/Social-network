import { connect } from "react-redux";
import { actions } from "../../../../Redux/Photos-reducer.ts";
import Photo from "./Photo";



const mapStateToProps = (state) =>{
    return{
        users : state.photos.users,
        pageSize : state.photos.pageSize,
        totalUsersCount : state.photos.totalUsersCount,
        currentPage : state.photos.currentPage
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        add : (id) =>{
            dispatch(actions.photoAdAC(id));
        },
        delete : (id) =>{
            dispatch(actions.photoDelAC(id));
        },
        set : (users) =>{
            dispatch(actions.photoSetAC(users));
        },
        photoCurrentAC: (current) =>{
            dispatch(actions.photoCurrentAC(current));
        },
        totalAC: (totalCount) =>{
            dispatch(actions.totalAC(totalCount))
        }
    }
}

const PhotoContainer = connect(mapStateToProps ,mapDispatchToProps )(Photo);

export default PhotoContainer;