import React from "react";
import { addCommActionCreater, postChangeComCreater } from '../../Redux/Mainreview-reducer.ts';
import ss from './Maininner.module.css'
import Main_rew from './Main_but/Main_rew';
import {connect} from "react-redux";
import Maininner from "./Maininner";


let mapStateToProps = (state) =>{
    return {
        postText : state.mainreview.postText, 
        mainreview: state.mainreview
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        addCommActionCreater : (postText) =>{
            dispatch(addCommActionCreater(postText));
        }
    }
} 
const MaininnerContainer = connect(mapStateToProps ,mapDispatchToProps)(Maininner)

export default MaininnerContainer;