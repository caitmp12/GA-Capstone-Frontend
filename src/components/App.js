// import logo from './logo.svg';
import '../App.css';
import React from "react";
import { Route, Link, Switch } from "react-router-dom"
import Home from "../components/Home"
import Auth from "../pages/Auth.jsx"
import Nav from "../pages/Nav.jsx"
import Dashboard from "../pages/Dashboard.jsx"
import { useAppState } from "../AppState.jsx"


function App(props) {

    const { state, dispatch } = useAppState()
    React.useState(() => {
        const auth = JSON.parse(window.localStorage.getItem("auth"))
        if (auth) {
            dispatch({ type: "auth", payload: auth })
            props.history.push("/dashboard")
        } else {
            props.history.push("/")
        }
    }, [])


    return (
        <div className="App">
            <Route path="/" component={Nav} />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/auth/:form" component={Auth} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </div>
    );
}

export default App;