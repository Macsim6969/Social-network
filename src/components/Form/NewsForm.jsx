import React from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { Textarea } from "../../Common/FormsControl/FormsControls";
import { maxLengthCreator, required } from "../../utilits/validators/validator";


const maxLength = maxLengthCreator(30)

const NewsFormaRedux = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} type={'text'} name={'NewDialog'}  validate={[required , maxLength]} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const NewsForma = reduxForm({ form: 'newsform' })(NewsFormaRedux)

const NewsForm = (props) => {
    return (
        <div>
            <NewsForma onSubmit={props.onSubmit} />
        </div>
    )
}


export default NewsForm