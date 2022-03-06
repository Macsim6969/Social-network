import React from "react"
import ss from './FormsControls.module.scss'

const FormControl = ({input , meta , child , ...props}) =>{
    const showError = meta.touched && meta.error;
    return (
        <div className={ss.formControl + " " + (showError ? ss.error : '')}>
            <div>
            {props.child }
            </div>
            {showError && <span>{meta.error}</span>}
        </div>
    )   
}

export const Textarea = (props) => {
   
    return (
        <FormControl {...props}><textarea {...input}  {...props} placeholder='sdfsdfsdfsdf' /></FormControl>
    )
}


export const Input = ({ input, meta, ...props }) => {
   
    return (
        <FormControl {...props}><input {...input}  {...props} placeholder='sdfsdfsdfsdf' />
        </FormControl>
    )
}
