import ss from './LinkLog.module.scss'

const LinkLog = (props)=>{
    return(
        <div className={ss.log}>
            <img className={ss.log_img} src="https://image.flaticon.com/icons/png/512/146/146018.png" alt="" />
            <div className={ss.log_name}>{props.name}</div>
        </div>
    )
}

export default LinkLog
