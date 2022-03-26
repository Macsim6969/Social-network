import { FC, useState } from "react";
import ProfileDataFormRedux from "./ProfleDataForm";
import React from "react";
import { ProfileType } from "../../Types/Types";

type PropsType = {
    profile: ProfileType
    saveProfile: (formData) => void 
}

const ProfileUSers: FC<PropsType> = ({ profile, saveProfile }) => {

    let [editMode, seteditMode] = useState(false)

    

    if (!profile) {
        return (
            <img src="https://image.flaticon.com/icons/png/512/146/146018.png" alt="" />
        )
    }

    const onSubmit = (formData) =>{
        saveProfile(formData)
        seteditMode(false)
    }
    return (
        <div>
            <div>
                <img src={profile.photos.large} alt="" />
                <div>{profile.fullName}</div>
            </div>
            {editMode ?
             <ProfileDataFormRedux initialValues={profile} profile={profile} onSubmit={onSubmit}/> : 
            <ProfileData profile={profile} toEditeMod={() => {seteditMode(true)}} />}
        </div>
    )
}

const ProfileData = ({ profile , toEditeMod}) => {
    return (
        <div>
            <div><button onClick={toEditeMod}>Change </button></div>
            <div>
                <b>Name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking For A Job</b>: {profile.lookingForAJob ? 'Yes' : 'No'}
            </div>
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Status</b>: {profile.status || '------'}
            </div>
            <div>
                <b>Contacts</b> : {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}
            </div>
        </div>

    )
}



const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

export default ProfileUSers;