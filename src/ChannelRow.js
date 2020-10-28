import React from 'react'
import "./ChannelRow.css"
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { Avatar } from '@material-ui/core';
function ChannelRow({image, channel, verified, subs, noOfVideos, description}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" alt={channel} src={image}/>
            <div className="channelRow__text">
    <h4>{channel}{verified && <CheckCircleOutlineIcon/>}</h4>
    <p>{subs} subscribers • {noOfVideos} videos</p>
    <p>{description}</p>   
            </div>
        </div>
    )
}

export default ChannelRow
