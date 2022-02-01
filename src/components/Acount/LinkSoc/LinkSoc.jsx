import ss from './LinkSoc.module.scss'
import React from 'react';

const LinkSoc = (props) => {
    return (
        <a target='_blank' className={ss.link_img} href="https://www.facebook.com/"><img className={ss.img_post} src={props.link} alt="" /></a>
    )
}

export default LinkSoc;