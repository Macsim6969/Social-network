import React from "react";
import { addCommActionCreater, postChangeComCreater } from '../../Redux/Mainreview-reducer';
import ss from './Maininner.module.css'
import Main_rew from './Main_but/Main_rew';


const Maininner = (props) => {

    let state = props.store.getState();
    let postText = state.postText;

    let addcomm = () =>{
        props.store.dispatch(addCommActionCreater());
    }

    let onchangeCom = (e) =>{
        let text = e.target.value;
        props.store.dispatch(postChangeComCreater(text));
    }

    return (
        <div className={ss.log}>
            <h1 className={ss.log_title}>HOME 'Faceebok'</h1>
            <div className={ss.log_spam}>Interest module for you . Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Ab eveniet est deleniti ut, sapiente similique dolor ipsa. Rem, dolore ipsa? Fugit voluptas, 
                consectetur libero rem mollitia tempore porro dicta placeat?</div>
            <div>
                <Main_rew store={props.store}  />
            </div>
            <div>
                <input  value={postText} onChange={onchangeCom} type="text" placeholder="type comment pls"/>
                <button onClick={addcomm}>Type</button>
            </div>
                
        </div>

    )
}

export default Maininner;