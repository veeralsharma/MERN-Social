import { Avatar } from '@material-ui/core'
import React , {useState} from 'react'
import "../css/MessageSender.css"
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../context-api/StateProvider';
import Api from '../Api'


function MessageSender() {

    const [{user},dispatch] = useStateValue()

    const [input,setInput] = useState("")

    const [URL,setURL] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await Api.post('/post/new',{
            post_message:input,
            displayName:user.displayName,
            post_image:URL,
            timestamp:Date.now().toString(),
            photoURL:user.photoURL
          })
        setInput("")
        setURL("")
    }

    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar 
                    src={user.photoURL}
                />
                <form>
                <input type="text" className="messageSender_input"
                placeholder={`What's on your mind , ${user.displayName}`}
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                />
                <input
                 value={URL}
                 onChange={(e) => setURL(e.target.value)}
                 type="text" placeholder="image URL (optional)" />
                <button onClick={handleSubmit} type="submit">
                    Hidden button
                </button>
                </form>
            </div>
            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideocamIcon style={{color:"red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{color:"green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticonIcon style={{color:"orange"}} />
                    <h3>Feeling /Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
