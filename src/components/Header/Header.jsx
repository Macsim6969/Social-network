import React from 'react';
import ss from './Header.module.scss'
import HeaderLoft from './HeaderLoft/HeaderLoft';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderSearch from './HeaderSerch/HeaderSearch';

const Header = (props) =>{
    return (
        <header>
            <div className={ss.header}>
                <HeaderLogo /> 
                <HeaderSearch />
                <HeaderLoft />
            </div>
        </header>
    )
}

export default Header;