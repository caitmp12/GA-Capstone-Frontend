import React from "react"
import {useAppState} from "../AppState.jsx"
import {Route, Link} from "react-router-dom"

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
            <Link to="/dashboard/new">New to sayHi? Make A New Profile Here<button>New</button></Link>
            <Route path="/dashboard/new" component={Form} />
            <ul>
                {hosts.map(note => {
                    <div key={host.id}>
                        <h2>{host.name}</h2>
                        <h2>{host.zipcode}</h2>
                    </div>
                })}
            </ul>
        </div>
    )

    return hosts ? loaded() : <h1>Loading...</h1>
}

export default Dashboard