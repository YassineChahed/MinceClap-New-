import React from 'react'
import PropTypes from 'prop-types'
import '../../MyPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import postplaylist from "../../assets/img/postplaylist.png"
import postsupport from "../../assets/img/postsupport.png"
import postshare from "../../assets/img/postshare.png"
import postsubcribe from "../../assets/img/postsubcribe.png"
import postfollow from "../../assets/img/postfollow.png"
import claponpost from "../../assets/img/claponpost.png"
import viewers1 from "../../assets/img/viewers1.png"
import viewers2 from "../../assets/img/viewers2.png"
import videoplay from "../../assets/img/videoplay.png"
import videocontent from "../../assets/img/videocontent.png"

import moreico from "../../assets/img/moreico.png"
function TextPost(props) {
  return (



<div className="mainpost">
<div className="commentpro2">
  <img src="https://picsum.photos/200/300" className="commentpropic" />
  <div className="commentname">
    <div className="commentowner">
      <p>Marina Valentine</p>
      <img src={moreico} />
    </div>
    <h6>29 minutes ago</h6>
  </div>
</div>
<div className="postcontent">
          <p>So perhaps, you've generated some fancy text, and you're content that you can
            now copy and paste your fancy text in the comments section of funny cat videos
            but perhaps you're wondering how it's even possible to change the font of your
            text?
            Is it some sort of hack? Are you copying and pasting an actual font?
            Well, the answer is actually no - rather than generating fancy fonts <br /> <br />
            This converter creates fancy symbols. The explanation starts with unicodebolard.
          </p>
        </div>
<div className="viewersdiv">
  <div className="viwes1">
    <div className="viewersclap">
    <img src={claponpost} />
      <p>4</p>
    </div>
    <div className="viewershow">
      <div className="viewersimges">
        <img src={viewers1} />
        <img src={viewers2} className="viewersicon" />
        <img src={viewers2} className="viewersicon" />
        <img src={viewers2} className="viewersicon" />
        <img src={viewers2} className="viewersicon" />
      </div>
      <p>7 Participants</p>
    </div>
  </div>
  <div className="viwes2">
    <p>8 Comments</p>
    <p>0 Shares</p>
  </div>
</div>
<div className="postreations">
  <div className="reactitems">
    <img src={claponpost} />
    <p>Clap</p>
  </div>
  <div className="reactitems reactitems2">
    <img src={postfollow} />
    <p>Follow</p>
  </div>
  <div className="reactitems">
    <img src={postsubcribe} />
    <p>Subscribe</p>
  </div>
  <div className="reactitems">
    <img src={postshare} />
    <p>Share</p>
  </div>
  <div className="reactitems">
    <img src={postsupport} />
    <p>Support</p>
  </div>
  <div className="reactitems">
    <img src={postplaylist} />
    <p>Playlist</p>
  </div>
</div>
</div>
  )
}

TextPost.propTypes = {}

export default TextPost
