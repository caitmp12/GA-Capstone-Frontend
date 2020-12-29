import React from "react"
import { useAppState } from "../AppState"
import { Route, Link } from "react-router-dom"
import Form from "./Form"
import { Button } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'

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
            <div className="dashboard">
                <div className="username">
                <h1>Welcome {username}!</h1>
                </div>
                <div class="hostheader">
                <h2>Your Host Profiles</h2>
                    <Link to="/dashboard/new"><Button color="secondary" variant="contained">Create a New Profile</Button></Link>
                <Route path="/dashboard/:action" render={(rp) => <Form {...rp} getHosts={getHosts} />} />
                </div>
                <ul>
                    {hosts.map(host => (
                        <div key={host.id}>
                            <div className="img-div">
                            <img src="https://vetmed.tamu.edu/news/wp-content/uploads/sites/9/2018/05/20150804-doghouse.jpg"/>
                            </div>
                            <div className="info-div">
                            <h2>Name: {host.name}</h2>
                            <h2>ZipCode: {host.zipcode}</h2>
                            <h2>Current Rate: ${host.rate}</h2>
                            <h2>You Host: {host.animals}</h2>
                            </div>
                            <Button variant="outlined" onClick={() => {
                                dispatch({ type: "select", payload: host })
                                props.history.push("/dashboard/edit")
                            }}>Edit Profile</Button>
                            <Button color="primary" variant="contained" onClick={() => {
                                fetch(url + "/hosts/" + host.id, {
                                    method: "delete",
                                    headers: {
                                        Authorization: "bearer " + token
                                    }
                                })
                                .then(() => getHosts())
                            }}>Delete Profile</Button>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }

    

    return hosts ? loaded() : <h1>Loading...</h1>
}

export default Dashboard