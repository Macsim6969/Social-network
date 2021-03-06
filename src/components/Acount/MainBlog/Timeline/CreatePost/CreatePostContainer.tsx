import React from 'react';
import { addPostAcc, postChangeAcc } from '../../../../../Redux/Mainreview-reducer.ts';
import {connect} from "react-redux";
import CreatePost from "./CreatePost.tsx";




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