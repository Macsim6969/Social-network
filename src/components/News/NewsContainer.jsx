import { connect } from "react-redux";
import {addNews , addNewsAC} from '../../Redux/News-reducer';
import React from "react";
import News from "./News";


class NewsContainerAPI extends React.Component{
    render() {
        return(
            <News news={this.props.news} 
            addNews={this.props.addNews}  addNewsAC={this.props.addNewsAC}  
            />
        )
    }
}


let mapStateToProps = (state) =>{
    return{
        news: state.news
    }
}


export default connect(mapStateToProps , {addNews , addNewsAC })(NewsContainerAPI);