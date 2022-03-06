import React from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";


const NewsFormaRedux = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} type={'text'} name={'NewDialog'} />
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