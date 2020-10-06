import React from 'react'
import SidebarRow from './SidebarRow'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';
import "../css/Sidebar.css"
import { useStateValue } from '../context-api/StateProvider';

function Sidebar() {

    const [{user},dispatch] = useStateValue()

    return (
        <div className="sidebar">
            <SidebarRow
                src={user.photoURL}
                title={user.displayName}
            />
            <SidebarRow
                Icon={LocalHospitalOutlinedIcon}
                title="COVID-19 Information"
             />
            <SidebarRow 
                Icon={EmojiFlagsIcon}
                title="Pages"                
            />
            <SidebarRow 
                Icon={PeopleIcon}
                title="Friends"                
            />
            <SidebarRow 
                Icon={ChatIcon}
                title="Messenger"                
            />
            <SidebarRow 
                Icon={StorefrontIcon}
                title="Marketplace"                
            />
            <SidebarRow 
                Icon={VideoLibraryIcon}
                title="Videos"                
            />
            <SidebarRow 
                Icon={ExpandMoreOutlinedIcon}
                title="More.."
            />
        </div>
    )
}

export default Sidebar
