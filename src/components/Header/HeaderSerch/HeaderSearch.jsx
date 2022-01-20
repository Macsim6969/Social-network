import ss from './HeaderSearch.module.scss'

const HeaderSearch = () => {
    return (
        <div className={ss.header_search}>
            <input className={ss.header_search} type="search" placeholder='Search on the Tarknet' />
            <img  className={ss.header_img} src="http://cdn.onlinewebfonts.com/svg/img_114824.png" alt="" />
        </div>
    )
}

export default HeaderSearch;