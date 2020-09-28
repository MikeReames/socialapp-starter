import React from "react";
import MenuAuthenticated from "../components/menu/MenuAuthenticated";
import { userIsAuthenticated } from "../redux/HOCs";
import MessageFeed2 from "../components/feed2/Feed2"
import TextInput from "../components/TextInput/TextInput"
import AllProfiles from "../components/AllProfiles/AllProfiles"

import "../components/feed2/feed2.css"
const loginData = JSON.stringify(localStorage.getItem("login"));

class MessageFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: ""
    }
  }
  
  stateChange= (event) => {
    
    
    this.setState({post: event.target.value});
    console.log(this.state.post)
    
  }
  
  clicked(){
    console.log("clicked")
  }
  
  
  render() {
    const loginData2 = JSON.parse(localStorage.getItem("login"));
    let username = loginData2.result.username
    return (
      <div className="feed">
        <MenuAuthenticated isAuthenticated={this.props.isAuthenticated} />
            <div id="feedInputProfiles">

              <div id="feedAndInput">
                <MessageFeed2 />
                <TextInput />

              </div>
              <AllProfiles />
            </div>

      </div>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
