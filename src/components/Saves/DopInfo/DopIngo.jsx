import Rev from "../../Rev/Rev";



const DopInfo = (props) =>{
    let state = props.store.getState().mainreview;

    let newrew = state.home.map(r => <Rev message={r.text}  src={r.src}/>);
    
    return(
        <div>
            {newrew}
        </div>
    )
}

export default DopInfo;