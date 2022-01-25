import ss from './Rew.module.scss'

const Rew = (props) =>{
    return(
        <div className={ss.rew_inner}>
            <img className={ss.inner_img} src={props.src} alt="" />
            <p className={ss.inner_title}>{props.message}</p>
        </div>
    )
    
}


export default Rew;