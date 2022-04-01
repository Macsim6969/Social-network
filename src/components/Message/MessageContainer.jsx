import { connect } from 'react-redux';
import { compose } from 'redux';
import actions from 'redux-form/lib/actions';
import { hocRedirect } from '../../HOC/HocRedirect';
import { addSaveDialog ,savePhoto} from '../../Redux/Message-reducer.ts';
import Message from './Message.tsx';



let mapStateToProps = (state) => {
    return {
        message: state.message, 
    } 
} 


export default compose(connect(mapStateToProps, {savePhoto ,addSaveDialog: actions.addSaveDialog }) ,hocRedirect)(Message);