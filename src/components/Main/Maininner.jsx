import React from "react";
import ss from './Maininner.module.css'
import Main_rew from './Main_but/Main_rew';


const Maininner = (props) => {

    let post = React.createRef();

    let typess = () =>{
        let text = post.current.value;
        alert(text);
    }


    return (
        <div className={ss.log}>
            <h1 className={ss.log_title}>HOME 'Faceebok'</h1>
            <div className={ss.log_spam}>Interest module for you . Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Ab eveniet est deleniti ut, sapiente similique dolor ipsa. Rem, dolore ipsa? Fugit voluptas, 
                consectetur libero rem mollitia tempore porro dicta placeat?</div>
            <div>
                <Main_rew state={props.state.rev} />
            </div>
            <div>
                <input ref={post} type="text" placeholder="type comment pls"/>
                <button onClick={typess}>Type</button>
            </div>
                
        </div>

    )
}

export default Maininner;