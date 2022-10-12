import React from 'react'
import PropTypes from 'prop-types'

function ChatMember(props) {
    const {data} = props
  return (
    <div className="searchproitem">
    <img src={data.image} />
    <div className="pronames">
      <div className="proname">
        <p>{data.fullName}</p>
        <span>{data.lastSeen}</span>
      </div>
      <h5>{data.lastMessage}</h5>
    </div>
  </div>
  )
}

ChatMember.propTypes = {}

export default ChatMember
