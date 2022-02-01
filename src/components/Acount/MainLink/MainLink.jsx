import { NavLink } from "react-router-dom";
import Link from "./Link/Link";
import  './MainLink.scss';
import React from 'react';

const MainLink = (props) => {

    return (
        <div className="main__block">
            <NavLink className="mainn"  to='timeline' ><Link name="Timeline" /></NavLink>
            <NavLink className="mainn" to='about'><Link name="About" /></NavLink>
            <NavLink className="mainn" to='friends'><Link name="Friends" /></NavLink>
            <NavLink className="mainn" to='photos'><Link name="Photos" /></NavLink>
        </div>

    )
}

export default MainLink;