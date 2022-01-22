import ss from './Main_rew.module.css'
import Rew from './Rew/Rew'



const Main_rew = () =>{
    return(
        <div className={ss.rew} >
            <Rew message="Hy , it's my first comment. I like this project !!! . I think he help me to quickly start in this language. I love React ."/>
            <Rew message="Lorem ipsum dolor sit amet consectetur adipisicing elit. " / >
            <Rew message="Alias illo vel reprehenderit similique voluptatibus libero ex et, dolor facere illum sit error deleniti officia consequuntur animi. Cum totam sequi aut!"/>
            <Rew message="Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias illo vel reprehenderit similique voluptatibus libero ex et, dolor facere illum sit error deleniti officia consequuntur animi. Cum totam sequi aut! "/>
        </div>

        
    )
}

export default Main_rew;