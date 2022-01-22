import React from 'react';
import ss from './MessageDialogs.module.scss'

const MessageDialogs = () => {


    let posss = React.createRef();

    let click= ()=>{
        let text = posss.current.value;
        alert(text);
    }

    return (
        <div className={ss.dialogs}>
            <h1 className={ss.dialog_log}>Alya</h1>
            <div className={ss.dialog_conf}>
                <div>Hy , how are you ?</div>
                <div>I miss for you</div>
            </div> 
            <div>
                <input ref={posss} type="text" placeholder='sfddfsdf'/>
                <button onClick={click}>Click</button>
            </div>
        </div >
    )
}


export default MessageDialogs;