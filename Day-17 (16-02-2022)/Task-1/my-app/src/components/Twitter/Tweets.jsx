import React, { useState } from 'react';
import Tweet from './Tweet';
 
const Tweets = () => {
    const [tweets,setTweets]=useState(
        [
            {
                id:1,
                name:"Elon Musk",
                twitterhandle:"elonmusk",
                tweet:"Lorem ipsum dolor sit",
                likes:0
            },{
                id:2,
                name:"Jeff Bezos",
                twitterhandle:"jeffbezos",
                tweet:"Lorem ipsum dolor sit",
                likes:0
            },
            {
                id:3,
                name:"Mukesh Ambani",
                twitterhandle:"mukambani",
                tweet:"Lorem ipsum dolor sit",
                likes:0
            },
            {
                id:4,
                name:"Gautam Adani",
                twitterhandle:"gautamadani",
                tweet:"Lorem ipsum dolor sit",
                likes:0
            }
   
        ]
    );
    // Like Function
    const handleLike=(id)=>{
        const latestState=[...tweets];
        const index=tweets.findIndex(el=>el.id===id);
        latestState[index].likes+=1
        setTweets(latestState);
    }
    const handleDislike=(id)=>{
        const latestState=[...tweets];
        const index=tweets.findIndex(el=>el.id===id);
        if(latestState[index].likes>0){
            latestState[index].likes-=1
        }
       
        setTweets(latestState);
    }
    const renderTweets=()=>{
        return tweets.map(item=>{
            return <Tweet tweet={item} handleLike={handleLike} handleDislike={handleDislike}/>
        })
    }
  return (
    <>
     {renderTweets()}
    </>
  )
}
 
export default Tweets
