import React from "react"
import {useContext, useReducer} from "react"


//Initial State

const initialState = {
    url: "http://localhost:3000",
    token: null,
    username: null
}

//Reducer

//action = {type: "", payload: ---}

const reducer = (state, action) => {

    switch(action.type){
        case "signup":
            fetch("http://localhost:3000/users/", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(action.payload)
            })
            .then(response => response.json())
            .then(user => {
                return {
                    ...state,
                    token: user.token,
                    username: user.username,
                }
            })
        break
        case "login":
            fetch("http://localhost:3000/login/", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(action.payload),
            })
                .then(response => response.json())
                .then(user => {
                    return {
                        ...state,
                        token: user.token,
                        username: user.username,
                    }
                })  
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
