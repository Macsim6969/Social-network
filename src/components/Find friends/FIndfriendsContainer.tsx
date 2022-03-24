import React from 'react';
import { connect } from "react-redux";
import { acceptAdd, acceptDelete, followAC, getUsersThunk, setCurrentAC, } from "../../Redux/Friend-reducer.ts";
import Findfriends from './FIndfriends';

import Loader from '../../assets/image/loaders.svg';
import {UserType} from '../../Types/Types'
import {AppStateType} from '../../Redux/Redux-store.ts'



type MapDispatchType ={
    getUsersThunk: (currentPage: number ,pageSize: number ) => void
    acceptAdd: () => void
    acceptDelete: () => void
}

type MapStateType={
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    followFetching: Array<number>
    users: Array<UserType>    
}

type PropsType = MapDispatchType & MapStateType

class FindfriendsAPI extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }

    onpageClick = (current) => {
        this.props.getUsersThunk(current, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <img src={Loader} /> : null}
                <Findfriends
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    acceptAdd={this.props.acceptAdd}
                    acceptDelete={this.props.acceptDelete}
                    onpageClick={this.onpageClick}
                    users={this.props.users}
                    followFetching={this.props.followFetching}
                    //followAC={this.props.followAC}
                />
            </>
        )
    }
}


let mapStateToProps = (state: AppStateType):MapStateType => {
    return {
        users: state.friends.users,
        pageSize: state.friends.pageSize,
        totalUsersCount: state.friends.totalUsersCount,
        currentPage: state.friends.currentPage,
        isFetching: state.friends.isFetching,
        followFetching: state.friends.followFetching
    }
}


export default connect<MapDispatchType,MapStateType ,AppStateType>(mapStateToProps, { acceptAdd, acceptDelete, getUsersThunk })(FindfriendsAPI);