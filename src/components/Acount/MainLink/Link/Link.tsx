import ss from './Link.module.scss'
import React from 'react';

const Link = (props) =>{
    return ( 
        <div className={ss.link}>{props.name}</div>
    )
}

export default Link;