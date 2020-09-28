import React from "react"
import "./message.css"
import QuestboardService from "../../pages/ServicePage"
import { Button } from 'antd';

class Message extends React.Component {

    state = {
        likecount: this.props.likes.length}

handleLike = () => {
    const questboardService = new QuestboardService
    const loggedInUsername = questboardService.getUsername()
    if (this.props.likes.some(likeObject => likeObject.username === loggedInUsername)) return
    
    questboardService.Like(this.props.id)
    .then(likeObject => {
        console.log(likeObject)
        this.setState(latestState => ({likecount: latestState.likecount + 1}))
    
    })
}

    render () {
        return (
            <div className="Message">
                At {this.props.createdAt}, {this.props.username} posted:
                <br />
                {this.props.text}
        <div className="like-count">Likes: {this.state.likecount}</div>
        <Button onClick={this.handleLike}>+</Button>
            </div>
        )
    }
}

export default Message