import logo from './logo.svg';
import './App.css';
import React from "react";
import { Route, Link, Switch } from "react-router-dom"
import Home from "./components/Home"
import Auth from "./components/Auth"
import Nav from "./components/Nav"
import Dashboard from "./components/Dashboard"
import {useAppState} from "./AppState.jsx"


function App(props) {

const {state, dispatch} = useAppState()
React.useState(() => {
  const auth = JSON.parse(window.localStorage.getItem("auth"))
  if (auth) {
    dispatch({type: "auth", payload: auth})
    props.history.push("/dashboard")
  } else {
    props.history.push("/")
  }
}, [])


  return (
    <div className="App">
      <Route path="/" component={Nav} />
      <h1>Say Hi!</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth/:form" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
