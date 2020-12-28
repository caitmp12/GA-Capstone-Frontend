import React from "react"
import { useAppState } from "../AppState"
import { Route, Link } from "react-router-dom"
import Form from "./Form"

const Dashboard = (props) => {

    const { state, dispatch } = useAppState()
    const { token, url, hosts, username } = state

    const getHosts = async () => {
        const response = await fetch(url + "/hosts", {
            method: "get",
            headers: {
                Authorization: "bearer " + token
            }
        })
        const fetchedHosts = await response.json()
        dispatch({ type: "getHosts", payload: fetchedHosts })
    }

    React.useEffect(() => {
        getHosts()
    }, [])

    const loaded = () => {
        return (
            <div>
                <h1>dashboard</h1>
                <h1>{username}'s</h1>
                <h2>Profile</h2>
                <Link to="/dashboard/new">New to sayHi? Make A New Profile Here<button>New</button></Link>
                <Route path="/dashboard/:action" render={(rp) => <Form {...rp} getHosts={getHosts} />} />
                <ul>
                    {hosts.map(host => (
                        <div key={host.id}>
                            <h2>{host.name}</h2>
                            <h2>{host.zipcode}</h2>
                            <button onClick={() => {
                                dispatch({ type: "select", payload: host })
                                props.history.push("/dashboard/edit")
                            }}>Edit Host</button>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }

    

    return hosts ? loaded() : <h1>Loading...</h1>
}

export default Dashboard