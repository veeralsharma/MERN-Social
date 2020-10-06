import { Hidden } from '@material-ui/core'
import React from 'react'
import "../css/Widgets.css"

function Widgets() {
    return (
        <div className="widgets">
            <iframe 
                src="https://bharat.republicworld.com/livetv"
                width="340"
                height="100%"
                style={{border:"none",overflow:"hidden"}}
                scrolling="no"
                frameholder="0"
                allow="encrypted-media"
            />
        </div>
    )
}

export default Widgets
