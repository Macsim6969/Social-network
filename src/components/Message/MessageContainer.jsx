import { connect } from 'react-redux';
import { compose } from 'redux';
import { hocRedirect } from '../../HOC/HocRedirect';
import { addSaveDialog ,savePhoto} from '../../Redux/Message-reducer';
import Message from './Message';



let mapStateToProps = (state) => {
    return {
        message: state.message, 
    } 
} 


export default compose(connect(mapStateToProps, {savePhoto ,addSaveDialog }) ,hocRedirect)(Message);