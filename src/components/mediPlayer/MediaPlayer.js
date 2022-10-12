import React from 'react'
import PropTypes from 'prop-types'
import "../../App.css"

import menuprofileimg from "../../assets/img/menuprofileimg.png"
import discover from "../../assets/img/discover.png"
import discoversettings from "../../assets/img/discoversettings.png"
import lives from "../../assets/img/lives.png"
import viewers from "../../assets/img/viewers.png"
import LIVE from "../../assets/img/LIVE.png"
import clapico from "../../assets/img/clapico.png"
import followico from "../../assets/img/followico.png"
import subscribeico from "../../assets/img/subscribeico.png"
import shareico from "../../assets/img/shareico.png"
import playlist from "../../assets/img/playlist.png"
import descriptiondwn from "../../assets/img/descriptiondwn.png"
import profilepic2 from "../../assets/img/profilepic2.png"
import moreico from "../../assets/img/moreico.png"
import supportico from "../../assets/img/supportico.png"






function MediaPlayer(props) {
  return (
    <div style={{position : 'sticky' , top : 10}}>


    <div className="leftrightarea">
    <div className="leftrightareamain">
    <div className="leftarea">
    <div className="leftareamain">
      <div className="livehead">
        <div className="liveheadtitle">
          <img src={menuprofileimg} />
          <div className="livenames">
            <p>Mohammed Wissem Boujdaria</p>
            <h5>Live session: Hogwarts Express</h5>
          </div>
        </div>
        <div className="liveheadiscover">
          <img src={discover} />
          <img src={discoversettings} />
        </div>
      </div>
      <div className="liveshow">
        <div className="livevideo">
          {/* <img src={lives} className="livesvid" /> */}
          {/* <ReactPlayer  className="livesvid" url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"  /> */}

          <video className="livesvid" controls={true} >
                <source controls={true}  type="video/mp4" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"  />
            </video>
          <div className="livevideoviews">
            <div className="mainviews">
              <img src={viewers} />
              <p>10 229</p>
            </div>
            <img src={LIVE} />
          </div>
        </div>
        <div className="livesreactions">
          <div className="reactions">
            <img src={clapico} />
            <p>Clap</p>
          </div>
          <div className="reactions">
            <img src={followico} />
            <p>Follow</p>
          </div>
          <div className="reactions">
            <img src={subscribeico} />
            <p>Subscribe</p>
          </div>
          <div className="reactions">
            <img src={supportico} />
            <p>Support</p>
          </div>
          <div className="reactions">
            <img src={shareico} />
            <p>Share</p>
          </div>
          <div className="reactions">
            <img src={playlist} />
            <p>Playlist</p>
          </div>
        </div>
      </div>
      <div className="descriptionbox">
        <div className="describs">
          <h5>Description</h5>
          <img src={descriptiondwn} />
        </div>
        <p>So perhaps, you've generated some fancy text, and you're content that you can now copy and
          paste your fancy text in the comments section of funny cat videos.
        </p>
      </div>
      <div className="commentbox">
        <div className="comments">
          <div className="commentpro">
            <img src={profilepic2} className="commentpropic" />
            <div className="commentname">
              <div className="commentowner">
                <p>Marina Valentine</p>
                <img src={moreico} />
              </div>
              <h6>29 minutes ago</h6>
            </div>
          </div>
          <p className="maincomment">So perhaps, you've generated some fancy text, and you're content that
            you can now copy and paste your fancy text in the comments section of funny cat videos.
          </p>
        </div>
        <div className="comments">
          <div className="commentpro">
            <img src={profilepic2} className="commentpropic" />
            <div className="commentname">
              <div className="commentowner">
                <p>Marina Valentine</p>
                <img src={moreico} />
              </div>
              <h6>29 minutes ago</h6>
            </div>
          </div>
          <p className="maincomment">So perhaps, you've generated some fancy text, and you're content that
            you can now copy and paste your fancy text in the comments section of funny cat videos.
          </p>
        </div>
        <div className="comments">
          <div className="commentpro">
            <img src={profilepic2} className="commentpropic" />
            <div className="commentname">
              <div className="commentowner">
                <p>Marina Valentine</p>
                <img src={moreico} />
              </div>
              <h6>29 minutes ago</h6>
            </div>
          </div>
          <p className="maincomment">So perhaps, you've generated some fancy text, and you're content that
            you can now copy and paste your fancy text in the comments section of funny cat videos.
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  )
}

MediaPlayer.propTypes = {}

export default MediaPlayer
