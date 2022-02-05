import { connect } from 'react-redux';
import { addSaveDialog, postSaveDialog } from '../../Redux/Message-reducer';
import Message from './Message';



let mapStateToProps = (state) => {
    return {
        message: state.message
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addSaveDialog: () => {
            dispatch.dispatch(addSaveDialog());
        },
        postSaveDialog: (body) => {
            dispatch.dispatch(postSaveDialog(body));
        }

    }
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageContainer;