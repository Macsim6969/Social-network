import s from './Posts.module.scss'

const CreatePost = () =>{
    return(
        <div className={s.posts}>
            <div className={s.posts_inner}>
                <img src="https://image.flaticon.com/icons/png/512/146/146018.png" alt="" />
                <input type="text" name="" id="" size={50} placeholder='Write something here....' />
            </div>
            <div className={s.posts_dop}>
                <div className={s.dop_inner}>
                    <img className={s.inner_i} src="https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text.png" alt="" />
                    <div className={s.inner_txt}>Photo/Video</div>
                </div>
            </div>
            <div onClick={()=>{alert('hi')}} className={s.posts_sumb}>Post</div>
        </div>
    )
}

export default CreatePost;