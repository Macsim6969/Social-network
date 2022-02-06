import Rev from "../../Rev/Rev";



const DopInfo = (props) =>{

    let newrew = props.mainreview.home.map(r => <Rev message={r.text}  src={r.src}/>);
    
    return(
        <div>
            {newrew}
        </div>
    )
}

export default DopInfo;