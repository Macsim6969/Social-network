import ss from './Findfriend.module.scss'
import React, { useState } from 'react';


const Paginator = ({ totalUsersCount, pageSize, currentPage, onpageClick, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber , setportionNumber] = useState(1);
    let leftPortionNumber = (portionNumber- 1) * portionSize +1;
    let rightPortionNumber = portionNumber * portionSize;
    return (
        <div className={ss.log_find}>
            People You May Know
            <div>
                {portionNumber >1 && 
                <button onClick={() =>{setportionNumber(portionNumber -1)}}>PR</button>
                }
            </div>
            <div className={ss.logg}>
                {pages.filter(p => p >= leftPortionNumber && p<= rightPortionNumber).map(p => {
                    return <span className={currentPage === p && ss.selector}
                        onClick={(e) => { onpageClick(p) }}>{p}</span>
                })}

            </div>
            <div>
                {portionCount > portionNumber &&
                <button onClick={() =>{setportionNumber(portionNumber +1)}}>Next</button>
                }
            </div>

        </div >
    )
}

export default Paginator;