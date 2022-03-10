import ss from './LinkLog.module.scss'
import React from 'react';
import StatusHook from '../LinkStatus/Status';

const LinkLog = (props) => { 
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
            <StatusHook status ={props.status} updateStatus={props.updateStatus} />
        </div>
    )
}

export default LinkLog
