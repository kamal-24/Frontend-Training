import React,{useState} from 'react'
import Tweet from './Tweet'

const Tweets = () => {

    const [tweets,setTweets]=useState([
        {
            id:1,
            name:"Mark Zuckerburg",
            username:"@markmedown007",
            tweet:"Lorem ipsum dolor sit amet consectetur.",
            likes:0,
            dislikes:0
        },
        {
            id:2,
            name:"Jeff bezos",
            username:"@no1entrepreneur",
            tweet:"Lorem ipsum dolor sit amet consectetur.",
            likes:0,
            dislikes:0
        },
        {
            id:3,
            name:"Elon Musk",
            username:"@martian001",
            tweet:"Lorem ipsum dolor sit amet consectetur.",
            likes:0,
            dislikes:0
        },
        {
            id:4,
            name:"John Cena",
            username:"@youcantseemee",
            tweet:"Lorem ipsum dolor sit amet consectetur.",
            likes:0,
            dislikes:0
        }
    ])
    const handleLikes=(id)=>{
        const latestTweet=[...tweets];
        const index=tweets.findIndex(el=>el.id===id)
        latestTweet[index].likes+=1;
        setTweets(latestTweet)  //setTweets([..tweets],tweets(index).likes+=1)
        console.log(latestTweet)
    }
    const handleDislikes=(id)=>{
        const latestTweet=[...tweets];
        const index=tweets.findIndex(el=>el.id===id)
        latestTweet[index].dislikes+=1;
        setTweets(latestTweet) //setTweets([..tweets],tweets(index).dislikes+=1)
        console.log(latestTweet)

    }

    const renderTweet=()=>{
        return tweets.map(item=>{
            return <Tweet tweet={item} handleLikes={handleLikes} handleDislikes={handleDislikes}/>
        })
    }


  return (
    <>
    {renderTweet()}
    </>
  )
}

export default Tweets