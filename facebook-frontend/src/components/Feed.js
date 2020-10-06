import React, { useEffect, useState } from 'react'
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender"
import "../css/Feed.css"
import Post from './Post'
import Pusher from 'pusher-js'
import Api from "../Api"

function Feed() {

    const [feed,setFeed] = useState([])

    useEffect(() => {
        Api.get('/post/all').then((res) => {
            setFeed(res.data=res.data.sort((a,b) => {
              return b.timestamp - a.timestamp
            }))
          })
    },[])

    useEffect(() => {
        var pusher = new Pusher('ddf5c82c2e1904542eb9', {
            cluster: 'ap2'
          });
    
        var channel = pusher.subscribe('postchange');
        channel.bind('inserted', function(data) {
          console.log("some thing inserted");
          setFeed([data,...feed])
        });
    
        return () => {
          channel.unbind_all()
          channel.unsubscribe()
        }
        
      },[feed])

    return (
        <div className="feed">
            <StoryReel  />
            <MessageSender />
            {feed.map((f) =>{
              return(
                <Post
                    profilePic={f.photoURL}
                    message={f.post_message }
                    username={f.displayName}
                    image={f.post_image}
                    timestamp={f.timestamp}
                />
            )})}           
        </div>
    )
}


export default Feed
