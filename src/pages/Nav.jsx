import React from "react"
import { Route, Link, Switch } from "react-router-dom"
import { useAppState } from "../AppState"

const Nav = (props) => {

    const { state, dispatch } = useAppState()


    return (
        <header>
            <h1>sayHi!</h1>
            <nav>
                <Link to="/">Home</Link>
                {!state.token ? (<><Link to="/auth/signup">Signup</Link>
                    <Link to="/auth/login">Login</Link></>) : null}
                {state.token ? <div onClick={() => {
                    dispatch({ type: "logout" })
                    props.history.push("/")
                }}>Logout</div> : null}
            </nav>
        </header>
    )
}

export default Nav