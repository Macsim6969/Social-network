import React from 'react';
import { addPostAcc, postChangeAcc } from '../../../../../Redux/Mainreview-reducer';


import s from './CreatePost.module.scss'
import {connect} from "react-redux";
import CreatePost from "./CreatePost";


let mapStateToPost = (state) =>{
    return{
        postMewMessage : state.mainreview.postMewMessage,
    }
}
let mapActionToPost = (dispatch) =>{
    return{
        addPostAcc: () =>{
            dispatch(addPostAcc());
        },
        postChangeAcc: (text) =>{
            dispatch(postChangeAcc(text));
        }
    }
}
const CreatePostContainer= connect(mapStateToPost ,mapActionToPost)(CreatePost)

export default CreatePostContainer;