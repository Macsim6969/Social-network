import { NavLink } from "react-router-dom";
import ss from './MessageList.module.scss'

const MessageList = (props) =>{
    return(
       <div className={ss.peaple}><NavLink className={ss.peaple_link} to={" /message/" + props.id}>{props.name}</NavLink></div>
    )
}

export default MessageList;