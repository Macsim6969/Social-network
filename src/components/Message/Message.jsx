import ss from './Message.module.scss'
import MessageDialogs from './MessageDialogs/MessageDialogs';
import MessageList from './MessageList/MessageList';




const Message = () => { 
    let mess = [
        {name: 'Vanya' , id :5 },
        {name:'Dmitryi', id :6 },
        {name: 'Oleg' , id: 4},
        {name:'Andreu' , id:3 },
        {name:'ALya' , id:1},
        {name:'MAcs', id :2}
    ]

let messel = mess.map( m => <MessageList name={m.name} id={m.id}/>);


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