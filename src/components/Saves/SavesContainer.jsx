import React from  'react';
import { addSaveAction  } from "../../Redux/Mainreview-reducer.ts";
import {connect} from "react-redux";
import Saves from "./Saves";


let mapStateToProps = (state) =>{
    return{
        mainreview : state.mainreview
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        addSaveAction : (postSave)=>{
            dispatch(addSaveAction(postSave));
        }
    }
}

const SavesContainer =  connect(mapStateToProps , mapDispatchToProps)(Saves)

export default SavesContainer ;