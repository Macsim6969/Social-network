import { NavLink } from 'react-router-dom';
import ss from './Nav.module.scss'
import Content from './Nav_content/Content';

const Nav = () => {
    return (
            <div className={ss.nav}>
               <NavLink className={ss.navlinke} to="profile"><Content name='Oleg Kuplinov' /></NavLink>
               <NavLink className={ss.navlinke} to="findfriend"><Content name='Find Friends' /></NavLink>
               <NavLink className={ss.navlinke} to="acount"><Content name='Groups' /></NavLink>
               <NavLink className={ss.navlinke} to="saves"><Content name='Saves' /></NavLink>
               <NavLink className={ss.navlinke} to="profile"><Content name='Pages' /></NavLink>
               <NavLink className={ss.navlinke} to="chat"><Content name='Charts' /></NavLink>
               <NavLink className={ss.navlinke} to="users"><Content name='ProfileUSers' /></NavLink>
            </div>
    )
}

export default Nav;