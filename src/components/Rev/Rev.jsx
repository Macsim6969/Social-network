import ss from './Rev.module.scss'

const Rev =(props) =>{
    return(
        <div className={ss.rev}>{props.message}
        <img className={ss.image} src="https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg" alt="" />
        </div>
    )
}

export default Rev;