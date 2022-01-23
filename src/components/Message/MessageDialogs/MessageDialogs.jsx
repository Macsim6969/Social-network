import React from 'react';
import ss from './MessageDialogs.module.scss'

const MessageDialogs = (props) => {


    

    return (
        <div className={ss.dialogs}>
            <div>{props.name}</div>
        </div >
    )
}


export default MessageDialogs;