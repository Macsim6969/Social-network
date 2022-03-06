import React from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";


const HomeFormasRedux = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} name={'postText'} type={'text'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const HomeForma = reduxForm({ form: 'homeForm' })(HomeFormasRedux);

const HomeForm = (props) => {
    return (
        <div>
            <HomeForma onSubmit={props.onSubmit} />
        </div>
    )
}



export default HomeForm;