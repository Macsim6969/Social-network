import ss from './Findfriend.module.scss'
import React from 'react';


const Paginator = ({totalUsersCount , pageSize, currentPage , onpageClick}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i);
        }
    }

    return (
        <div className={ss.log_find}>
            People You May Know
            <div className={ss.logg}>
                {pages.map(p => {
                    return <span className={currentPage === p && ss.selector}
                        onClick={(e) => {onpageClick(p) }}>{p}</span>
                })}

            </div>

        </div >
    )
}

export default Paginator;