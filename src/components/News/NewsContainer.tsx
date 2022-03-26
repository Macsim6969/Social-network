import { connect } from "react-redux";
import { actions, newsType} from '../../Redux/News-reducer';
import React from "react";
import News from "./News";
import { AppStateType } from "../../Redux/Redux-store";

type MapProps = {
    news: Array<newsType>
}
type ActionsProps ={
    addNews : () => void
    addNewsAC: (text: string) => void
}

type PropsType = MapProps & ActionsProps

class NewsContainerAPI extends React.Component<PropsType>{
    render() {
        return(
            <News news={this.props.news} 
            addNews={this.props.addNews}  addNewsAC={this.props.addNewsAC}  
            />
        )
    }
}

 
let mapStateToProps = (state: AppStateType): MapProps =>{
    return{
        news: state.news
    }
}


export default connect<MapProps, ActionsProps , {} , AppStateType>(mapStateToProps , {addNews: actions.addNews , addNewsAC: actions.addNewsAC })(NewsContainerAPI);