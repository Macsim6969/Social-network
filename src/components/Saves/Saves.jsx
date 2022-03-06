import DopInfo from "./DopInfo/DopIngo";
import React from  'react';
import SavesForm from "../Form/SavesForm";



const  Saves = (props) =>{

    let postSave = props.mainreview.postSave;
  
    let ChangeText = (value) =>{
       props.addSaveAction(value.postSave)
    } 
    return(
        <div>
            <DopInfo  mainreview={props.mainreview}/>
            <div>
                <SavesForm onSubmit={ChangeText}/>
            </div>
        </div>
    )
} 

export default Saves ;