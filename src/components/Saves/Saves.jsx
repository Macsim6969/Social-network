import DopInfo from "./DopInfo/DopIngo";
import React from  'react';
import { addSaveAction, postSaveCreater } from "../../Redux/State";


const  Saves = (props) =>{

    let addsave = React.createRef();

    let  addClickSave = () =>{
        props.dispatch(addSaveAction());
    }    
    let ChangeSaves = () =>{
        let text = addsave.current.value;
        props.dispatch(postSaveCreater(text));
    }
    return(
        <div>
            <DopInfo  state={props.state.mainreview}/>
            <div>
                <input type="text" ref={addsave}  placeholder="write something ......." value={props.postSave} onChange={ChangeSaves}/>
                <button onClick={addClickSave}>Click</button>
            </div>
        </div>
    )
} 

export default Saves ;