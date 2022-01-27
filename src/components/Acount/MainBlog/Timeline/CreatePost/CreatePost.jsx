import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import s from './CreatePost.module.scss'

const CreatePost = (props) =>{ 
    let postel = React.createRef();

    let addpost = ()=>{
        props.dispatch({type : 'ADD-POST'});  
    }

    let postChange = () =>{
        let text = postel.current.value;
        props.dispatch({type : 'CHANGE-NEW-POST' ,newpostText:text});   
    }

    return(
        <div className={s.posts}>
            <div className={s.posts_inner}>
                <img src="https://image.flaticon.com/icons/png/512/146/146018.png" alt="" />
                <input ref={postel} type="text" size={50} onChange={postChange} placeholder='Write something here....' value={props.postMewMessage} />
            </div>
            <div className={s.posts_dop}>
                <div className={s.dop_inner}>
                    <img className={s.inner_i} src="https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text.png" alt="" />
                    <div className={s.inner_txt}>Photo/Video</div>
                </div>
            </div>
            <div onClick={addpost} className={s.posts_sumb}>Post</div>
        </div>
    )
}

export default CreatePost;