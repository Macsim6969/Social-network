import { connect } from "react-redux";
import { photoAdAC, photoDelAC, photoSetAC } from "../../../../Redux/Photos-reducer";
import Photo from "./Photo";



const mapStateToProps = (state) =>{
    return{
        users : state.photos.users
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

        }
    }
}

const PhotoContainer = connect(mapStateToProps ,mapDispatchToProps )(Photo);

export default PhotoContainer;