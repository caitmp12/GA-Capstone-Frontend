import React from "react"
import { useAppState } from "../AppState.jsx"

const Form = (props) => {

    const { state, dispatch } = useAppState()


    return (
        <div>
            <form>
            </form> 
        </div>
          
    )
}

export default Form