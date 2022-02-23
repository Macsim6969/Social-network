import React from 'react'
import { connect } from 'react-redux';
import Login from '../components/Login/Login';
let mapStateRedirectToProps = (state) =>{
    return{
        isStatus : state.auth.isStatus
    }
}

export const hocRedirect = (Component) => {
    class Redirectomponnet extends React.Component {
        render() {
            if (!this.props.isStatus) return <Login to='/login' />
            return <Component {...this.props} />

        }
    }

    let ConntectRedirectComponent = connect(mapStateRedirectToProps)(Redirectomponnet)
    return ConntectRedirectComponent;
}