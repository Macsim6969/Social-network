import React from 'react';
import { connect } from "react-redux";
import { acceptAdd, acceptDelete, followAC, getUsersThunk, setCurrentAC, FilterForm } from "../../Redux/Friend-reducer.ts";
import Findfriends from './FIndfriends.tsx';

import Loader from '../../assets/image/loaders.svg';
import {UserType} from '../../Types/Types'
import {AppStateType} from '../../Redux/Redux-store.ts'
import { getUsersFilter } from '../../Redux/Users-selector.ts';



type MapDispatchType ={
    getUsersThunk: (currentPage: number ,pageSize: number, filter: FilterForm ) => void
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
    filter: FilterForm  
}

type PropsType = MapDispatchType & MapStateType

class FindfriendsAPI extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage, pageSize, filter} = this.props
        this.props.getUsersThunk(currentPage, pageSize, filter);
    }

    onpageClick = (current: number) => {
        const { pageSize, filter} = this.props
        this.props.getUsersThunk(current, pageSize, filter)
    }

    onFilterChanged = (filter: FilterForm) =>{
        const {pageSize} = this.props
        this.props.getUsersThunk(1, pageSize, filter)
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
                    onFilterChanged={this.onFilterChanged}
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
        followFetching: state.friends.followFetching,
        filter: getUsersFilter(state) 
    }
}


export default connect<MapStateType, MapDispatchType, {} ,AppStateType>(mapStateToProps, { acceptAdd, acceptDelete, getUsersThunk })(FindfriendsAPI);