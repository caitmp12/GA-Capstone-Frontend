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
                <h1>Welcome {username}!</h1>
                <div class="hostheader">
                <h2>Your Host Profiles</h2>
                <Link to="/dashboard/new"><button>Create a New Profile</button></Link>
                <Route path="/dashboard/:action" render={(rp) => <Form {...rp} getHosts={getHosts} />} />
                </div>
                <ul>
                    {hosts.map(host => (
                        <div key={host.id}>
                            <img src="https://vetmed.tamu.edu/news/wp-content/uploads/sites/9/2018/05/20150804-doghouse.jpg"/>
                            <h2>Name: {host.name}</h2>
                            <h2>ZipCode: {host.zipcode}</h2>
                            <h2>Current Rate: ${host.rate}</h2>
                            <h2>You Host: {host.animals}</h2>
                            <button onClick={() => {
                                dispatch({ type: "select", payload: host })
                                props.history.push("/dashboard/edit")
                            }}>Edit Profile</button>
                            <button onClick={() => {
                                fetch(url + "/hosts/" + host.id, {
                                    method: "delete",
                                    headers: {
                                        Authorization: "bearer " + token
                                    }
                                })
                                .then(() => getHosts())
                            }}>Delete Profile</button>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }

    

    return hosts ? loaded() : <h1>Loading...</h1>
}

export default Dashboard