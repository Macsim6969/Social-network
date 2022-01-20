import ss from './Content.module.scss'

const Content = (props) => {
    return (
        <a className={ss.nav_col} href="#">
            <img src="https://cdn.oboi7.com/da1367f44655b012660d0661c030ac51c2334c10/cowboy-bebop-edvard.jpg" alt="" />
            <nav className={ss.nav_nam}> {props.name} </nav>
        </a>
    )
}

export default Content;