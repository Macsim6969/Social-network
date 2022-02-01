import CreatePost from './CreatePost/CreatePost';
import Post from './Post/Post';
import React from 'react';
import ss from './Timeline.module.scss'

const Timeline = (props) => {
 
    let addrev = props.state.rev.map(r => <Post text={r.text} src={r.src}/>)
    return (
        <div className={ss.header}>
            <div className={ss.header_inner}>
                <div className={ss.header_log}>Create Post</div>
                <div className={ss.header_createpost}>
                    <CreatePost postMessage={props.postMessage} postMewMessage={props.postMewMessage} dispatch={props.dispatch} changeNewpost={props.changeNewpost} postLog={props.postLog}/>
                </div>
                <div className={ss.header_post}>
                    {addrev}
                </div>
            </div>
        </div>
    )
}

export default Timeline;
