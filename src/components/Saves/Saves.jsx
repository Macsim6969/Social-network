import DopInfo from "./DopInfo/DopIngo";
import React from  'react';
import { addSaveAction ,postSaveCreater } from "../../Redux/Mainreview-reducer";



const  Saves = (props) =>{

    let postSave = props.mainreview.postSave;

    let  addClickSave = () =>{
        props.store.dispatch(addSaveAction());
    }    
    let ChangeSaves = (e) =>{
        let textsave = e.target.value;
        props.store.dispatch(postSaveCreater(textsave));
    }
    return(
        <div>
            <DopInfo  mainreview={props.mainreview}/>
            <div>
                <input type="text"   placeholder="write something ......." value={postSave} onChange={ChangeSaves}/>
                <button onClick={addClickSave}>Click</button>
            </div>
        </div>
    )
} 

export default Saves ;