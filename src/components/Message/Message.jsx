import ss from './Message.module.scss'
import MessageDialogs from './MessageDialogs/MessageDialogs';
import MessageList from './MessageList/MessageList';


const Message = (props) => { 
let messel = props.state.mess.map( m => <MessageList name={m.name} id={m.id}/>);


    return (
        <div className={ss.mess}>
            <div className={ss.mess_peaple}>
                {messel}
            </div>
            <div className={ss.mess_dialogs}>
                <MessageDialogs />
            </div>
        </div>
    )
}

export default Message;