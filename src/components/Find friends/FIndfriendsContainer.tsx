import React, { FC } from 'react';
import { useSelector } from "react-redux";
import Findfriends from './FIndfriends.tsx';
import Loader from '../../assets/image/loaders.svg';
import { getisFetching } from '../../Redux/Friend-selector.ts';


type FindFriendPage = {

}
const FindFriendPage: FC<FindFriendPage> = (props) => {

    const isFetching = useSelector(getisFetching)

    return (
        <>
            {isFetching ? <img src={Loader} /> : null}
            <Findfriends />
        </>
    )
}

export default FindFriendPage
