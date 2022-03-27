import ss from './Findfriend.module.scss'
import React, { FC, useEffect } from 'react';
import Paginator from './Paginator.tsx';
import Friends from './Friends.tsx';
import SearchFormik from './Formik.tsx';
import { FilterForm, getUsersThunk, acceptAdd,acceptDelete  } from '../../Redux/Friend-reducer.ts';
import { useDispatch, useSelector } from 'react-redux';
import {gettotalUsersCount, getcurrentPage,frienUserdSeletor, getfollowFetching,  getPageSize, getUsersFilter} from '../../Redux/Friend-selector.ts'
import useHistory from 'use-history'

type PropsType ={
    
}

const Findfriends: FC<PropsType> = (props) => {

    const users = useSelector(frienUserdSeletor)
    const followFetching = useSelector(getfollowFetching)
    const totalUsersCount = useSelector(gettotalUsersCount);
    const currentPage = useSelector(getcurrentPage);
    const pageSize = useSelector(getPageSize);
    const filter = useSelector(getUsersFilter)
    const dispatch = useDispatch() 

    // const history = useHistory();

    // useEffect(() =>{
    //     history.push({
    //         pathname: '/friends',
    //         search: `?term=${filter.term}&friend=${filter.friend}&paage=${currentPage}`
    //     })
    // }, [history. currentPage])

    useEffect(() =>{
        dispatch(getUsersThunk(currentPage, pageSize, filter))
    },[])

    const onpageClick = (current: number) =>{
        dispatch(getUsersThunk(current, pageSize, filter))
    }

    const onFilterChanged = (filter: FilterForm) =>{
        dispatch(getUsersThunk(1, pageSize, filter))
    }

    const setacceptAdd = (userId: number) => {
        dispatch(acceptAdd(userId))
    }
    const setacceptDelete = (userId: number) => {
        dispatch(acceptDelete(userId))
    } 
    return (
        <div className={ss.log_find}>
           <div>
               <SearchFormik onFilterChanged={onFilterChanged} />
           </div>
            <Paginator currentPage={currentPage} onpageClick={onpageClick} totalUsersCount={totalUsersCount} pageSize={pageSize}/>
            <div className={ss.find}>{users.map(u => <Friends user={u} key={u.id}  followFetching={followFetching} acceptDelete={setacceptDelete} acceptAdd={setacceptAdd}/>
                )}
            </div>
        </div >
    )
}

export default Findfriends; 