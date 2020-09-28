import React from "react"
import IndividualProfile from "../IndividualProfile/IndividualProfile"
import QuestboardService from "../../pages/ServicePage"

import "./AllProfiles.css"

class Profiles extends React.Component {
constructor(props){
    super(props)
    this.state = {
        AllProfiles: []
    }
}

    componentDidMount() {
        new QuestboardService().Users().then(AllProfiles => {
        this.setState({ AllProfiles })
    })
}

    render() {
        let numberOfUsers = this.state.AllProfiles.length
        console.log(this.state.AllProfiles)
        if (this.state.length === 0)
        return (
                <div id="AllProfilesBox">
                    <h1>Profiles</h1>
                    <h3>loading...</h3>
                </div>
        )
        return (
            
            <div>
                <div id="AllProfilesBox">
                    <h1>{numberOfUsers} Users Online</h1>
                    {this.state.AllProfiles.map(msg => <IndividualProfile key={msg.id} {...msg}/>)}
                    
                </div>
            </div>

            
        )
    }
}

export default Profiles