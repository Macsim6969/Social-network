import React from 'react';
import { addPostActionCreater ,postChangeActionCreater } from '../../../../../Redux/Mainreview-reducer';

import CreatePost from './CreatePost';


const CreatePostContainer = (props) =>{ 
    let state = props.store.getState();

    let addpost = ()=>{
        props.store.dispatch(addPostActionCreater());  
    }

    let postChange = (text) =>{
        let action = postChangeActionCreater(text)
        props.store.dispatch(action);   
    }

    return( 
        <CreatePost updatepostChange ={postChange} 
        postMewMessage={state.mainreview}
        postLog={state.postLog}
         changeNewpost={state.changeNewpost} 
         postMessage={state.postMessage}
            updateaddpost={addpost}/>
    )
}

export default CreatePostContainer;