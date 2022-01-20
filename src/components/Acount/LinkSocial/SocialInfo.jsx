import { NavLink } from 'react-router-dom';
import ss from './SocialInfo.module.scss'

const SocialInfo = (props) =>{
    return(
        <div className={ss.info}>
            <NavLink to='/' ><div className={ss.info_lg}>{props.name}</div></NavLink>
            <NavLink to='/' ><div className={ss.info_numb}>{props.number}</div></NavLink>
        </div>
    )
}

export default SocialInfo;