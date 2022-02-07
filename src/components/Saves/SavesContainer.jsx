import React from  'react';
import { addSaveAction ,postSaveCreater } from "../../Redux/Mainreview-reducer";
import {connect} from "react-redux";
import Saves from "./Saves";


let mapStateToProps = (state) =>{
    return{
        mainreview : state.mainreview
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        addSaveAction : ()=>{
            dispatch(addSaveAction());
        },
        postSaveCreater : (textsave) =>{
            dispatch(postSaveCreater(textsave));
        }

    }
}

const SavesContainer =  connect(mapStateToProps , mapDispatchToProps)(Saves)

export default SavesContainer ;