import React from 'react'
import "../css/Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from '../context-api/StateProvider';


function Header() {

    const [{user},dispatch]= useStateValue()

    return (
        <div className="header">
            <div className="header_left">
                <img src="https://cdn.iconscout.com/icon/free/png-512/facebook-logo-2019-1597680-1350125.png" alt=" " />
                <div className="header_input">
                    <SearchIcon />
                    <input type="text" placeholder="Search on funbook" />
                </div>
            </div>
            <div className="header_center">
                <div className="header_option header_option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <SubscriptionsIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <StorefrontIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>
            <div className="header_right">
                <div className="header_info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                    <IconButton>
                        <ForumIcon />
                    </IconButton>
                    <IconButton>
                        <NotificationsActiveIcon />
                    </IconButton>
                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Header

 