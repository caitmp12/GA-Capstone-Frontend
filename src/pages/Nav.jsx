import React from "react"
import { Route, Link, Switch } from "react-router-dom"
import { useAppState } from "../AppState"
import { Button, Typography } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { makeStyles } from "@material-ui/core/styles"
import red from '@material-ui/core/colors/red'

const useStyles = makeStyles({
    navStyle: {
        backgroundColor: red[700]
    }
})


const Nav = (props) => {

    const { state, dispatch } = useAppState()


    return (
        <div className="nav">
        <header>
            <div className="title">
            <h1>sayHi!</h1>
            </div>
            <nav className="buttons">
                <Link to="/"><Button variant="contained" color="secondary" underline="none">Home</Button></Link>
                {!state.token ? (<><Link to="/auth/signup"><Button variant="contained" color="secondary">Signup</Button></Link>
                <Link to="/auth/login"><Button variant="contained" color="secondary">Login</Button></Link></>) : null}
                {state.token ? <div onClick={() => {
                dispatch({ type: "logout" })
                props.history.push("/")
                }}><Button variant="contained" color="secondary">Logout</Button></div> : null}
                <Button variant="contained" color="secondary" underline="none">Pet Owners</Button>
            </nav>
        </header>
        </div>
    )
}

export default Nav