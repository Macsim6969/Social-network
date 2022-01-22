import CreatePost from './CreatePost/CreatePost';
import Post from './Post/Post';
import ss from './Timeline.module.scss'

const Timeline = () => {
    return (
        <div className={ss.header}>
            <div className={ss.header_inner}>
                <div className={ss.header_log}>Create Post</div>
                <div className={ss.header_createpost}>
                    <CreatePost />
                </div>
                <div className={ss.header_post}>
                    <Post/>
                </div>
            </div>
        </div>
    )
}

export default Timeline;
