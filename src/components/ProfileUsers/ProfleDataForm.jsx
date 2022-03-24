import React from 'react'
import { reduxForm } from 'redux-form'
import { dopFields, Input, Textarea } from '../../Common/FormsControl/FormsControls.tsx'

const ProfileDataForm = ({ handleSubmit, profile }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <b>Name</b>: {dopFields('Full name', 'name', [], Input)}
            </div>
            <div>
                <b>Looking For A Job</b>: {dopFields('', 'lookingForJob', [], Input, { type: 'checkbox' })}
            </div>
            <div>
                <b>About me</b>:{dopFields('About me', 'about me', [], Textarea)}
            </div>
            <div>
                <b>Status</b>: {dopFields('Status', 'status', [], Input)}
            </div>
            <div>
                <b>Contacts</b> : {Object.keys(profile.contacts).map(key => {
                    return (
                        <div>
                            {key}: {dopFields(key, 'contacts' + key, [], Input)}
                        </div>
                    )
                })}
            </div>
            <button>Save</button>
        </form>

    )
}

const ProfileDataFormRedux = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormRedux