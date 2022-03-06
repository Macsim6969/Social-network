import React from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";

const SavesFormula = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} name={'postSave'} type={'text'} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const SavesFormRedux = reduxForm({ form: 'SavesForm' })(SavesFormula)

const SavesForm = (props) => {
    return (
        <div>
            <SavesFormRedux onSubmit={props.onSubmit} />
        </div>
    )
}

export default SavesForm 