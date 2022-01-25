import ss from './Post.module.scss';

const Post = (props) => {
    return (
        <div className={ss.post_log}>
            <img className={ss.post_img} src={props.src} alt="" />
            <div className={ss.post_txt}>
                {props.text}
            </div>
        </div>
    )
}

export default Post;