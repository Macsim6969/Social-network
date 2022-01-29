import Rev from "../../Rev/Rev";



const DopInfo = (props) =>{
    let newrew = props.state.text.map(r => <Rev message={r.message}  src={r.src}/>);
    
    return(
        <div>
            {newrew}
        </div>
    )
}

export default DopInfo;