import { connect } from "react-redux";
import React from "react";
import * as axios from "axios";
import ProfileUSers from "./ProfileUSers.tsx";
import { getUserID, saveProfile } from '../../Redux/Acount-reducer.ts';
import { ProfileType } from "../../Types/Types";
import {AppStateType} from '../../Redux/Redux-store.ts'

type PropsType = MapType & DispatchType
type DispatchType = {
    getUserID: (response) => void
    saveProfile: () => void
}
type MapType = {
    profile: Array<ProfileType>
}

class ProfileUSersContainerAPI extends React.Component<PropsType>{

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(response => {
            this.props.getUserID(response.data)
        })
    }

    render() {
        return (
            <ProfileUSers {...this.props} profile={this.props.profile} saveProfile={this.props.saveProfile} />
        )
    }
}

let mapStateToProps = (state:AppStateType): MapType => {
    return {
        profile: state.acount.profile
    }
}

export default connect<MapType, DispatchType, {} , AppStateType>(mapStateToProps, { getUserID, saveProfile })(ProfileUSersContainerAPI)