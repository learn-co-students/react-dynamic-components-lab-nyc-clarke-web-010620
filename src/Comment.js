//your code here
import React , { Component } from "react"

class Comment extends Component {
    render() {
    return (
    <div className="comment">
    <h1>{this.props.commentText}</h1>
    </div>    
    )}
} //Comment class

export default Comment