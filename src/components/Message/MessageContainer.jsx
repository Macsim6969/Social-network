import { connect } from 'react-redux';
import { compose } from 'redux';
import { hocRedirect } from '../../HOC/HocRedirect';
import { addSaveDialog, postSaveDialog } from '../../Redux/Message-reducer';
import Message from './Message';



let mapStateToProps = (state) => {
    return {
        message: state.message, 
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addSaveDialog: () => {
            dispatch(addSaveDialog());
        },
        postSaveDialog: (body) => {
            dispatch(postSaveDialog(body));
        }

    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps) ,hocRedirect)(Message);