import React from "react"
import { Route, Link, Switch } from "react-router-dom"
import {useAppState} from "../AppState.jsx"

const Nav = (props) => {

    const {dispatch} = useAppState()


    return (
        <header>
            <h1>sayHi!</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/auth/signup">Signup</Link>
                <Link to="/auth/login">Login</Link>
                <div onClick={() => {
                    dispatch({type: "logout"})
                }}>Logout</div>
            </nav>
        </header>
    )
}

export default Nav