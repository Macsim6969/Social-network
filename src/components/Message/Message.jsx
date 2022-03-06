import NewsForm from '../Form/NewsForm';
import ss from './Message.module.scss'
import MessageDialogs from './MessageDialogs/MessageDialogs';
import MessageList from './MessageList/MessageList';


const Message = (props) => {
    let messel = props.message.mess.map(m => <MessageList name={m.name} id={m.id} />);
    let newdilogs = props.message.dia.map(n => <MessageDialogs name={n.name} />);

    let newdialog = props.message.newdialog;
    
    let onNewsForm = (value) =>{
        props.addSaveDialog(value.NewDialog)
    }
    return ( 
        
        <div className={ss.mess}>
            <div className={ss.mess_peaple}>
                {messel}
            </div> 
            <div className={ss.mess_dialogs}>
                {newdilogs}
                <div>
                    <NewsForm onSubmit={onNewsForm}/>
                </div>
            </div>
        </div>
    )
}

export default Message;