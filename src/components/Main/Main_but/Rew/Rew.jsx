import ss from './Rew.module.css'

const Rew = (props) =>{
    return(
        <div className={ss.rew_inner}>
            <img className={ss.inner_img} src="https://avatars.mds.yandex.net/i?id=bfbf98a5b02854fb4bd412e44c398378-5501353-images-thumbs&n=13" alt="" />
            {props.icon}
            <p className={ss.inner_title}>{props.message}</p>
        </div>
    )
    
}


export default Rew;