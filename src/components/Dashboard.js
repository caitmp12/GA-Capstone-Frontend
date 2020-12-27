import React from "react"
import {useAppState} from "../AppState.jsx"

const Dashboard = (props) => {

    const {state, dispatch} = useAppState()
    const {token, url, hosts, username} = state

    const getHosts = async () => {
        const response = fetch(url + "/hosts/")
        const hosts = await response.json()
        dispatch({type: "getHosts", payload: hosts})
    }

    React.useEffect(() => {
        getHosts()
    }, [])

    const loaded = () => (
        <div>
            <h1>{username}'s</h1>
            <h2>Profile</h2>
        </div>
    )

    return hosts ? loaded() : <h1>Loading...</h1>
}

export default Dashboard