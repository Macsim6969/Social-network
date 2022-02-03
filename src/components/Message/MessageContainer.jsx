import { addSaveDialog  ,postSaveDialog } from '../../Redux/Message-reducer';
import Message from './Message';



const MessageContainer = (props) => {
    let post = props.store.getState();

    let addNewDialogs = ()=>{
        props.store.dispatch(addSaveDialog());
    }
    let onNewMessDial =(body) =>{
      props.store.dispatch(postSaveDialog(body));
    }
    return (
        <Message addSaveDialog={addNewDialogs} postSaveDialog={onNewMessDial} state={post.message} />
    )
}

export default MessageContainer;