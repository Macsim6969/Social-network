import CreatePost from './CreatePost/CreatePost';
import Post from './Post/Post';
import React from 'react';
import ss from './Timeline.module.scss'
import {connect} from "react-redux";
import Timeline from "./Timeline";



let mapStateToProps =(state)=>{
    return{
        mainreview: state.mainreview
    }
}
const TimelineContainer = connect(mapStateToProps)(Timeline)

export default TimelineContainer;
