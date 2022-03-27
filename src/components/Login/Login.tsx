import React, { FC } from "react"
import ss from './Login.module.scss'
import { connect, useDispatch, useSelector } from "react-redux"
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { Input } from "../../Common/FormsControl/FormsControls.tsx"
import { required } from "../../utilits/validators/validator.ts"
import { logine } from '../../Redux/auth-reducer.ts'
import { Navigate } from "react-router-dom"
import { AppStateType } from '../../Redux/Redux-store.ts'

type IPropsForm = {
    onSubmit: (formData) => void
}

const LoginForm: FC<InjectedFormProps<LoginFormValuesType, IPropsForm> & IPropsForm> = ({ handleSubmit, error }) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Input} name={"email"} type="email" placeholder="email" validate={[required]} />
            </div>
            <div>
                <Field component={Input} name={"password"} type="password" placeholder="password" validate={[required]} />
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type="checkbox" /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
            {error && <div className={ss.form_erroe}>
                {error}
            </div>}
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, IPropsForm>({ form: 'login' })(LoginForm);


type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
}
const Login: FC = () => {

    const isStatus = useSelector((state: AppStateType) => state.auth.isStatus)

    const dispatch = useDispatch()

    const onSubmit = (formData) => {
        dispatch(logine(formData.email, formData.password, formData.rememberMe))
    }

    if (isStatus) {
        return <Navigate replace to='/' />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login