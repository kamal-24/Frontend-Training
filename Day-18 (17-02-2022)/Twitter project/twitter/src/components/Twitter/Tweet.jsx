import React from 'react'
import './Tweet.css'

const Tweet = (props) => {
  return (
    <div className='container'>
        <div className="top-bar">
            <p className='name'>{props.tweet.name}</p>
            <p className='username'>{props.tweet.username}</p>
        </div>
        
        <div className="content">
        <p className="tweet">{props.tweet.tweet}</p>
        <div className="actions">
            <button onClick={()=>props.handleLikes(props.tweet.id)}><i className="bi bi-hand-thumbs-up">{props.tweet.likes}</i></button>
            <button onClick={()=>props.handleDislikes(props.tweet.id)}><i className="bi bi-hand-thumbs-down">{props.tweet.dislikes}</i></button>
        </div>
        </div>
    </div>
  )
}

export default Tweet