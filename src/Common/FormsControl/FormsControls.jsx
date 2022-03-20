import React from "react"
import { Field } from "redux-form";
import ss from './FormsControls.module.scss'

const FormControl = ({ input, meta, child, ...props }) => {
    const showError = meta.touched && meta.error;
    return (
        <div className={ss.formControl + " " + (showError ? ss.error : '')}>
            <div>
                {props.children}
            </div>
            {showError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, children, ...restProps } = props
    return (
        <FormControl {...props}><textarea {...input}  {...restProps}  /></FormControl>
    )
}


export const Input = (props) => {
    const { input, meta, children, ...restProps } = props
    return (
        <FormControl {...props}><input {...input}  {...restProps}  />
        </FormControl>
    )
}

export const dopFields = (placeholder, name, validator, component, props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder} name={name} validate={validator} component={component} {...props} /> {text}
    </div>
)
