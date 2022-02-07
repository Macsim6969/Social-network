import CreatePost from './CreatePost/CreatePost';
import Post from './Post/Post';
import React from 'react';
import ss from './Timeline.module.scss'
import CreatePostContainer from "./CreatePost/CreatePostContainer";

const Timeline = (props) => {
 
    let addrev = props.mainreview.rev.map(r => <Post text={r.text} src={r.src}/>)
    return (
        <div className={ss.header}>
            <div className={ss.header_inner}>
                <div className={ss.header_log}>Create Post</div>
                <div className={ss.header_createpost}>
                    <CreatePostContainer   />
                </div>
                <div className={ss.header_post}>
                    {addrev}
                </div>
            </div>
        </div>
    )
}

export default Timeline;
