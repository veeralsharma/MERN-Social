import { Avatar } from '@material-ui/core'
import React from 'react'
import "../css/Story.css"

function Story({image,profileSrc,title}) {
    return (
        <div className="story" style={{backgroundImage:`url(${image})`}}>
            <Avatar className="story_avatar" src={profileSrc} />
            <h4>{title}</h4>
        </div>
    )
}

export default Story
