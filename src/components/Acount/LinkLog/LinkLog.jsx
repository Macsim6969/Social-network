import ss from './LinkLog.module.scss'
import React from 'react';

const LinkLog = (props) => {
    debugger;
    if (!props.profile) {
        return (
            <div className={ss.log}>
                <img className={ss.log_img} src="https://image.flaticon.com/icons/png/512/146/146018.png" alt="" />
                <div className={ss.log_name}>{props.name}</div>
            </div>
        )
    }

    return (
        <div className={ss.log}>
            <img className={ss.log_img} src={props.profile.photos.small} alt="" />
            <div className={ss.log_name}>{props.profile.fullName}</div>
        </div>
    )
}

export default LinkLog
