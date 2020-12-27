import React from "react"
import { useAppState } from "../AppState.jsx"



const Form = (props) => {

    const { state, dispatch } = useAppState()
    const action = props.match.params.action
    const [formData, setFormData] = React.useState(state[action])

    //Action Function
    const actions = {
        new: () => {
            return fetch(state.url + "/hosts", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }).then((response) => response.json())
        },
        edit: () => {
            return fetch(state.url + "/hosts/" + state.edit.id, {
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }).then((response) => response.json())
        },
    }

    //HandleChange Function
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    //HandleSubmit Function
    const handleSubmit = (event) => {
        event.preventDefault()
        actions[action]().then((data) => {
            props.getHosts()
            props.history.push("/dashboard/")
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <input type="text" name="zipcode" value={formData.zipcode} onChange={handleChange} />
                <input type="text" name="rate" value={formData.rate} onChange={handleChange} />
                <input type="text" name="animals" value={formData.animals} onChange={handleChange} />
                <input type="submit" value={action} />
            </form> 
        </div>
          
    )
}

export default Form