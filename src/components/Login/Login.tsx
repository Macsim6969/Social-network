import React, { FC } from "react"
import ss from './Login.module.scss'
import { connect } from "react-redux"
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { Input } from "../../Common/FormsControl/FormsControls.tsx"
import { required } from "../../utilits/validators/validator.ts"
import {logine } from '../../Redux/auth-reducer.ts'
import { Navigate } from "react-router-dom"

type IPropsForm ={
    onSubmit: (formData) => void
}

const LoginForm: FC<InjectedFormProps<LoginFormValuesType, IPropsForm> & IPropsForm> = ({handleSubmit , error} ) => {
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Input} name={"email"} type="email" placeholder="email" validate={[required]} />
            </div>
            <div>
                <Field component={Input} name={"password"} type="password" placeholder="password" validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type="checkbox" /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
           { error && <div className={ss.form_erroe}>
                {error}
            </div>} 
        </form>
    )  
}   

const LoginReduxForm = reduxForm<LoginFormValuesType , IPropsForm>({form: 'login'})(LoginForm);

type MapStateType ={
    isStatus: boolean
}
type MapDispatchType ={
    logine  : (email: string, password:string, rememberMe: boolean) => void 
}

type LoginFormValuesType ={
    email: string
    password : string
    rememberMe: boolean
}
const Login: FC<MapStateType & MapDispatchType>  = (props) => {
    const onSubmit = (formData) =>{
       props.logine(formData.email , formData.password , formData.rememberMe)
    }

    if(props.isStatus){
        return <Navigate replace to='/' />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isStatus: state.auth.isStatus
})

export default connect (mapStateToProps , {logine })(Login)