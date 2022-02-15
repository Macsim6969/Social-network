import { connect } from "react-redux";
import { photoAdAC, photoCurrentAC, photoDelAC, photoSetAC, totalAC } from "../../../../Redux/Photos-reducer";
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
            dispatch(photoAdAC(id));
        },
        delete : (id) =>{
            dispatch(photoDelAC(id));
        },
        set : (users) =>{
            dispatch(photoSetAC(users));
        },
        photoCurrentAC: (current) =>{
            dispatch(photoCurrentAC(current));
        },
        totalAC: (totalCount) =>{
            dispatch(totalAC(totalCount))
        }
    }
}

const PhotoContainer = connect(mapStateToProps ,mapDispatchToProps )(Photo);

export default PhotoContainer;