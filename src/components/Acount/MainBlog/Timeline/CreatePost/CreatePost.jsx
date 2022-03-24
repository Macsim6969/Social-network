import React from 'react';


import s from './CreatePost.module.scss'


const CreatePost = (props) =>{

 
    let addpost = ()=>{
        props.addPostAcc();

    }

    let postChange = (e) =>{
        let text = e.target.value;
        props.postChangeAcc(text);
    }

    return(
        <div className={s.posts}>
            <div className={s.posts_inner}>
                <img src="https://image.flaticon.com/icons/png/512/146/146018.png" alt="" />
                <input  type="text" size={90} onChange={postChange} placeholder='Write something here....' value={props.postMewMessage} />
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