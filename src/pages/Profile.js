import React from 'react'
import "../MyPage.css"
import Post from '../components/post/Post'
import statusicon from '../assets/img/statusicon.png'
import musicicon from '../assets/img/musicicon.png'
import photoicon from '../assets/img/photoicon.png'
import videoicon from '../assets/img/videoicon.png'
import MediaPlayer from '../components/mediPlayer/MediaPlayer'
import RightSide from '../components/post/RightSide'
import TextPost from '../components/post/TextPost'
import ProfileHeader from '../components/profile/ProfileHeader'


function Profile(props) {
  return (
    <div  style={{marginTop : 5}}>
    <MediaPlayer />
    <div className="heroarea">
            <div className="heroareamain">
              <div className="heromainarea">
                {/* Profile Head */}
              <ProfileHeader />
                {/* Profile Head End */}
                {/* Main Contents */}
                <div className="maincontents">
                  <div className="maincontent1">
                    <div className="content1head">
                      <div className="contentitems">
                        <img src={statusicon} />
                        <p>Status</p>
                      </div>
                      <div className="contentitems">
                        <img src={musicicon} />
                        <p>Music</p>
                      </div>
                      <div className="contentitems">
                        <img src={photoicon} />
                        <p>Photo</p>
                      </div>
                      <div className="contentitems">
                        <img src={videoicon} />
                        <p>Video</p>
                      </div>
                    </div>
                    <div className="posts">
                     
                      <Post />
                      <TextPost />
                      <Post />
                      <Post />
                      <Post />
                      <Post />
                    </div>
                  </div>
                 <RightSide />
                </div>
                {/* Main Contents End */}
              </div>
            </div>
          </div>
     </div>




    
  )
}

Profile.propTypes = {}

export default Profile
