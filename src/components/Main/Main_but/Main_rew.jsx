import ss from './Main_rew.module.scss'
import Rew from './Rew/Rew'



const Main_rew = (props) =>{

    let newrew = props.mainreview.text.map(r => <Rew message={r.message}  src={r.src}/>);
    return(        
        <div className={ss.rew} >
            {newrew}
        </div>

        
    )
}

export default Main_rew;