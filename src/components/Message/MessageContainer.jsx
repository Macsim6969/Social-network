import { connect } from 'react-redux';
import { compose } from 'redux';
import { hocRedirect } from '../../HOC/HocRedirect';
import { addSaveDialog} from '../../Redux/Message-reducer';
import Message from './Message';



let mapStateToProps = (state) => {
    return {
        message: state.message, 
    } 
} 
let mapDispatchToProps = (dispatch) => {
    return { 
        addSaveDialog: (NewDialog) => {
            dispatch(addSaveDialog(NewDialog));
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps) ,hocRedirect)(Message);