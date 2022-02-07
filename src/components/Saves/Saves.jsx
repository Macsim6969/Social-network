import DopInfo from "./DopInfo/DopIngo";
import React from  'react';



const  Saves = (props) =>{

    let postSave = props.mainreview.postSave;

    let  addClickSave = () =>{
        props.addSaveAction();
    }    
    let ChangeSaves = (e) =>{
        let textsave = e.target.value;
        props.postSaveCreater(textsave);
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