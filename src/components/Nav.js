import React from "react"
import { Route, Link, Switch } from "react-router-dom"

const Nav = (props) => {
    return (
        <header>
            <h1>sayHi!</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/auth/signup">Signup</Link>
                <Link to="/auth/login">Login</Link>
            </nav>
        </header>
    )
}

export default Nav