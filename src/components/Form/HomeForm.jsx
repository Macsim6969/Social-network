import React from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { Textarea } from "../../Common/FormsControl/FormsControls.tsx";
import { maxLengthCreator, required } from "../../utilits/validators/validator.ts";

const maxLenght = maxLengthCreator(100)

const HomeFormasRedux = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required , maxLenght ]} name={'postText'} type={'text'} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const HomeForma = reduxForm({ form: 'homeforma' })(HomeFormasRedux);

const HomeForm = (props) => { 
    return (
        <div>
            <HomeForma onSubmit={props.onSubmit} />
        </div>
    )
}



export default HomeForm;