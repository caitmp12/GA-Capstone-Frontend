import React from "react"
import {useContext, useReducer} from "react"


//Initial State

const initialState = {
    url: "https://sayhi-backend2.herokuapp.com",
    token: null,
    username: null,
    hosts: null,
    new: {
        name: "",
        zipcode: "",
        rate: "",
        animals: ""    
    },
    edit: {
        id: 0,
        name: "",
        zipcode: "",
        rate: "",
        animals: ""         
    },
}

//Reducer

//action = {type: "", payload: ---}

const reducer = (state, action) => {
    let newState
    switch (action.type) {
        case "auth":
            newState = { ...state, ...action.payload }
            return newState
            break
        case "logout":
            newState = {...state, token: null, username: null}
            window.localStorage.removeItem("auth")
            return newState 
            break
        case "getHosts":
            newState = {...state, hosts: action.payload}
            return newState 
            break   
        case "select":
            newState = {...state, edit: action.payload} 
            return newState
            break        
        default:
            return state
            break    
    }
}


//App Context

const AppContext = React.createContext(null)

//AppState Component

export const AppState = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return <AppContext.Provider value={{state, dispatch}}>
        {props.children}
    </AppContext.Provider>

}

//useAppState Hook

export const useAppState = () => {
    return React.useContext(AppContext)
}
