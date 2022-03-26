import ss from './Findfriend.module.scss'
import React, { FC } from 'react';
import Paginator from './Paginator.tsx';
import Friends from './Friends.tsx';
import { UserType } from '../../Types/Types';


type PropsType ={
    currentPage: number
    onpageClick: () => void
    totalUsersCount: number
    pageSize: number
    users: UserType
    followFetching: () => void
    acceptDelete: (userId: number) => void 
    acceptAdd: (userId: number) => void

}

const Findfriends: FC<PropsType> = (props) => {

    return (
        <div className={ss.log_find}>
           <h1>People You May Know</h1>
            <Paginator currentPage={props.currentPage} onpageClick={props.onpageClick} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}/>
            <div className={ss.find}>{props.users.map(u => <Friends user={u} key={u.id}  followFetching={props.followFetching} acceptDelete={props.acceptDelete} acceptAdd={props.acceptAdd}/>
                )}
            </div>
        </div >
    )
}

export default Findfriends; 