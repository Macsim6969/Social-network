import { addSaveDialog  ,postSaveDialog } from '../../Redux/Message-reducer';
import ss from './Message.module.scss'
import MessageDialogs from './MessageDialogs/MessageDialogs';
import MessageList from './MessageList/MessageList';


const Message = (props) => {
    let messel = props.message.mess.map(m => <MessageList name={m.name} id={m.id} />);
    let newdilogs = props.message.dia.map(n => <MessageDialogs name={n.name} />);

    let newdialog = props.message.newdialog;
 
    let addNewDialogs = ()=>{
        props.addSaveDialog();
    } 
    let onNewMessDial =(e) =>{
      let body =  e.target.value;  
      props.postSaveDialog(body);
    }
    return (
        <div className={ss.mess}>
            <div className={ss.mess_peaple}>
                {messel}
            </div> 
            <div className={ss.mess_dialogs}>
                {newdilogs}

                <div>
                    <input value={newdialog} onChange={onNewMessDial} type="text" placeholder='Enter your message'/>
                </div>
                <div>
                    <button onClick={addNewDialogs}>CLick</button>
                </div>
            </div>
        </div>
    )
}

export default Message;