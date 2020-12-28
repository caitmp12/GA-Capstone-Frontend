import React from "react"
import { Route, Link, Switch } from "react-router-dom"
import { useAppState } from "../AppState"
import { Button } from '@material-ui/core'

const Nav = (props) => {

    const { state, dispatch } = useAppState()


    return (
        <header>
            <h1>sayHi!</h1>
            <nav>
                <Link to="/"><Button>Home</Button></Link>
                {!state.token ? (<><Link to="/auth/signup"><Button>Signup</Button></Link>
                    <Link to="/auth/login"><Button>Login</Button></Link></>) : null}
                {state.token ? <div onClick={() => {
                    dispatch({ type: "logout" })
                    props.history.push("/")
                }}><Button>Logout</Button></div> : null}
            </nav>
        </header>
    )
}

export default Nav