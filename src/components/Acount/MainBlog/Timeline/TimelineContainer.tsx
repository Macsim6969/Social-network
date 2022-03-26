import {connect} from "react-redux";
import { revType } from "../../../../Redux/Mainreview-reducer";
import Timeline from "./Timeline.tsx";

type MapType ={
    mainreview:  revType
}
let mapStateToProps: MapType =(state)=>{
    return{
        mainreview: state.mainreview.rev
    }
}
const TimelineContainer = connect(mapStateToProps)(Timeline)

export default TimelineContainer;
