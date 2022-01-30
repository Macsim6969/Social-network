import { addSaveDialog  ,postSaveDialog } from '../../Redux/Message-reducer';
import ss from './Message.module.scss'
import MessageDialogs from './MessageDialogs/MessageDialogs';
import MessageList from './MessageList/MessageList';


const Message = (props) => {

    let state = props.store.getState().message;

    let messel = state.mess.map(m => <MessageList name={m.name} id={m.id} />);
    let newdilogs = state.dia.map(n => <MessageDialogs name={n.name} />);

    let newdialog = state.newdialog;

    let addNewDialogs = ()=>{
        props.store.dispatch(addSaveDialog());
    }
    let onNewMessDial =(e) =>{
      let body =  e.target.value;
      props.store.dispatch(postSaveDialog(body));
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