import { Button } from '@material-ui/core'
import React from 'react'
import { actionTypes } from '../context-api/reducer'
import { useStateValue } from '../context-api/StateProvider'
import "../css/Login.css"
import {auth , provider} from "../firebase"

function Login() {

    const [state,dispatch] = useStateValue()

    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithPopup(provider).then((res) => {
            dispatch({
                type:actionTypes.SET_USER,
                user:res.user
            })
        }).catch((err) => alert(err.message))
    }

    return (
        <div className="login">
            <div className="login_logo">
                <img 
                src="https://cdn.iconscout.com/icon/free/png-512/facebook-logo-2019-1597680-1350125.png"
                alt=""
                />
                <img 
                src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                alt=""
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
