import ss from './Link.module.scss'

const Link = (props) =>{
    return ( 
        <div className={ss.link}>{props.name}</div>
    )
}

export default Link;