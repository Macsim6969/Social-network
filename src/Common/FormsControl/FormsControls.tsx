import React, { Component, FC } from "react"
import { Field, WrappedFieldProps } from "redux-form";
import { FiledValodatorType } from "../../utilits/validators/validator";
import ss from './FormsControls.module.scss'


const FormControl:FC<WrappedFieldProps> = ({ input, meta, children }) => {
    const showError = meta.touched && meta.error;
    return (
        <div className={ss.formControl + " " + (showError ? ss.error : '')}>
            <div>
                {children}
            </div>
            {showError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, children, ...restProps } = props
    return (
        <FormControl {...props}><textarea {...input}  {...restProps} /></FormControl>
    )
}


export const Input = (props) => {
    const { input, meta, children, ...restProps } = props
    return (
        <FormControl {...props}><input {...input}  {...restProps} />
        </FormControl>
    )
}

export const dopFields = (placeholder: string | undefined, name: string, validator: Array<FiledValodatorType>,
    component: string | Component | FC,
    props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder} name={name} validate={validator} component={component} {...props} /> {text}
    </div>
)
