import React from 'react';
import ss from './Header.module.scss'
import HeaderLoftContainer from './HeaderLoft/HeaderLoftContainer';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderSearch from './HeaderSerch/HeaderSearch';

const Header = (props) =>{
    return (
        <header>
            <div className={ss.header}>
                <HeaderLogo /> 
                <HeaderSearch />
                <HeaderLoftContainer />
            </div>
        </header>
    )
}

export default Header;