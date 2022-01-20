import { NavLink } from 'react-router-dom'
import ss from './HeaderLogo.module.scss'

const HeaderLogo = () => {
    return (
        <NavLink className={ss.header} to="./"> <div className={ss.header_logo}>
            <img className={ss.logo_img} src="https://w7.pngwing.com/pngs/99/874/png-transparent-social-media-computer-icons-social-network-icon-design-social-media-text-social-media-internet.png" alt="" />
            <div className={ss.logo_title}>TarkNet</div>
        </div>
        </NavLink>
    )
}

export default HeaderLogo