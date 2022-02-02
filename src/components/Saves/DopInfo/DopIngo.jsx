import Rev from "../../Rev/Rev";



const DopInfo = (props) =>{
    let state = props.store.getState().mainreview;

    let newrew = state.text.map(r => <Rev message={r.message}  src={r.src}/>);
    
    return(
        <div>
            {newrew}
        </div>
    )
}

export default DopInfo;