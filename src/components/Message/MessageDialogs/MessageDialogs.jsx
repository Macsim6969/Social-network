import ss from './MessageDialogs.module.scss'

const MessageDialogs = () => {
    return (
        <div className={ss.dialogs}>
            <h1 className={ss.dialog_log}>Alya</h1>
            <div className={ss.dialog_conf}>
                <div>Hy , how are you ?</div>
                <div>I miss for you</div>
            </div> 
        </div >
    )
}


export default MessageDialogs;