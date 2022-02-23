import { NavLink } from 'react-router-dom';
import ss from './HeaderLoft.module.scss'
import React from 'react';

const HeaderLoft = (props) => {
    debugger;
    return (
        <div className={ss.header_loft}>
            <NavLink to='news' > <img className={ss.loft_nav} src="https://banner2.cleanpng.com/20180614/jt/kisspng-computer-icons-test-icon-meal-k-hoch-paid-survey-5b230a49d12356.7685679415290230498566.jpg" alt="LO" /> </NavLink>
            <NavLink to='/music'><img className={ss.loft_nav} src="https://i.ya-webdesign.com/images/png-music-download-6.png" alt="" /></NavLink>
            <NavLink to='/message/'><img className={ss.loft_nav} src="http://smartstar.ulcraft.com/uploads/s/z/m/u/zmumom9ovepz/img/full_FdnfvqRY.png" alt="" /></NavLink>
            <NavLink to='/setter'><img className={ss.loft_nav} src="https://icon-library.com/images/white-gear-icon-png/white-gear-icon-png-24.jpg" alt="" /></NavLink>

            {props.isStatus ? props.login : <NavLink className={ss.loft_acc_nav} to='/login'>
                <div className={ss.loft_acc}>
                    <img className={ss.loft_acc_im} src="https://www.freeiconspng.com/uploads/man-icon-png-29.png" alt="" />
                    <nav className={ss.loft_acc_name}>L_O_G_I_N</nav>
                </div></NavLink> }
        </div> 
    )
}

export default HeaderLoft;