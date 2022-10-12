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

function Home(props) {
  return (
<div  style={{marginTop : 5}}>
<MediaPlayer />
<div className="heroarea">
        <div className="heroareamain">
          <div className="heromainarea">
            {/* Profile Head */}
          
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
                  {/* <div className="mainpost">
                    <div className="commentpro2">
                      <img src="img/contentcreator.png" className="commentpropic" />
                      <div className="commentname">
                        <div className="commentowner">
                          <p>Marina Valentine</p>
                          <img src="img/moreico.png" />
                        </div>
                        <h6>29 minutes ago</h6>
                      </div>
                    </div>
                    <div className="videocontent">
                      <div className="videoplay">
                        <img src="img/videocontent.png" />
                        <img src="img/videoplay.png" className="videoplayer" />
                      </div>
                      <div className="videotext">
                        <h2>Kolok Showcase Aftermovie</h2>
                        <p>So perhaps, you've generated some fancy text, and you're content that you can
                          now copy and paste your fancy text in the comments section of funny cat
                          videos.
                        </p>
                      </div>
                    </div>
                    <div className="viewersdiv">
                      <div className="viwes1">
                        <div className="viewersclap">
                          <img src="img/claponpost.png" />
                          <p>4</p>
                        </div>
                        <div className="viewershow">
                          <div className="viewersimges">
                            <img src="img/viewers1.png" />
                            <img src="img/viewers2.png" className="viewersicon" />
                            <img src="img/viewers3.png" className="viewersicon" />
                            <img src="img/viewers4.png" className="viewersicon" />
                            <img src="img/viewers5.png" className="viewersicon" />
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
                        <img src="img/claponpost.png" />
                        <p>Clap</p>
                      </div>
                      <div className="reactitems reactitems2">
                        <img src="img/postfollow.png" />
                        <p>Follow</p>
                      </div>
                      <div className="reactitems">
                        <img src="img/postsubcribe.png" />
                        <p>Subscribe</p>
                      </div>
                      <div className="reactitems">
                        <img src="img/postshare.png" />
                        <p>Share</p>
                      </div>
                      <div className="reactitems">
                        <img src="img/postsupport.png" />
                        <p>Support</p>
                      </div>
                      <div className="reactitems">
                        <img src="img/postplaylist.png" />
                        <p>Playlist</p>
                      </div>
                    </div>
                  </div>
                  <div className="mainpost">
                    <div className="commentpro2">
                      <img src="img/contentcreator.png" className="commentpropic" />
                      <div className="commentname">
                        <div className="commentowner">
                          <p>Marina Valentine</p>
                          <img src="img/moreico.png" />
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
                          <img src="img/claponpost.png" />
                          <p>4</p>
                        </div>
                        <div className="viewershow">
                          <div className="viewersimges">
                            <img src="img/viewers1.png" />
                            <img src="img/viewers2.png" className="viewersicon" />
                            <img src="img/viewers3.png" className="viewersicon" />
                            <img src="img/viewers4.png" className="viewersicon" />
                            <img src="img/viewers5.png" className="viewersicon" />
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
                        <img src="img/claponpost.png" />
                        <p>Clap</p>
                      </div>
                      <div className="reactitems reactitems2">
                        <img src="img/postfollow.png" />
                        <p>Follow</p>
                      </div>
                      <div className="reactitems">
                        <img src="img/postsubcribe.png" />
                        <p>Subscribe</p>
                      </div>
                      <div className="reactitems">
                        <img src="img/postshare.png" />
                        <p>Share</p>
                      </div>
                      <div className="reactitems">
                        <img src="img/postsupport.png" />
                        <p>Support</p>
                      </div>
                      <div className="reactitems">
                        <img src="img/postplaylist.png" />
                        <p>Playlist</p>
                      </div>
                    </div>
                  </div>
                  <div className="mainpost">
                    <div className="commentpro2">
                      <img src="img/contentcreator.png" className="commentpropic" />
                      <div className="commentname">
                        <div className="commentowner">
                          <p>Marina Valentine</p>
                          <img src="img/moreico.png" />
                        </div>
                        <h6>29 minutes ago</h6>
                      </div>
                    </div>
                    <div className="videocontent">
                      <div className="videoplay">
                        <img src="img/videocontent.png" />
                        <img src="img/videoplay.png" className="videoplayer" />
                      </div>
                      <div className="videotext">
                        <h2>Kolok Showcase Aftermovie</h2>
                        <p>So perhaps, you've generated some fancy text, and you're content that you can
                          now copy and paste your fancy text in the comments section of funny cat
                          videos.
                        </p>
                      </div>
                    </div>
                    <div className="viewersdiv">
                      <div className="viwes1">
                        <div className="viewersclap">
                          <img src="img/claponpost.png" />
                          <p>4</p>
                        </div>
                        <div className="viewershow">
                          <div className="viewersimges">
                            <img src="img/viewers1.png" />
                            <img src="img/viewers2.png" className="viewersicon" />
                            <img src="img/viewers3.png" className="viewersicon" />
                            <img src="img/viewers4.png" className="viewersicon" />
                            <img src="img/viewers5.png" className="viewersicon" />
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
                        <img src="img/claponpost.png" />
                        <p>Clap</p>
                      </div>
                      <div className="reactitems reactitems2">
                        <img src="img/postfollow.png" />
                        <p>Follow</p>
                      </div>
                      <div className="reactitems">
                        <img src="img/postsubcribe.png" />
                        <p>Subscribe</p>
                      </div>
                      <div className="reactitems">
                        <img src="img/postshare.png" />
                        <p>Share</p>
                      </div>
                      <div className="reactitems">
                        <img src="img/postsupport.png" />
                        <p>Support</p>
                      </div>
                      <div className="reactitems">
                        <img src="img/postplaylist.png" />
                        <p>Playlist</p>
                      </div>
                    </div>
                  </div>
                  <div className="mainpost">
                    <div className="commentpro2">
                      <img src="img/contentcreator.png" className="commentpropic" />
                      <div className="commentname">
                        <div className="commentowner">
                          <p>Marina Valentine</p>
                          <img src="img/moreico.png" />
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
                          <img src="img/claponpost.png" />
                          <p>4</p>
                        </div>
                        <div className="viewershow">
                          <div className="viewersimges">
                            <img src="img/viewers1.png" />
                            <img src="img/viewers2.png" className="viewersicon" />
                            <img src="img/viewers3.png" className="viewersicon" />
                            <img src="img/viewers4.png" className="viewersicon" />
                            <img src="img/viewers5.png" className="viewersicon" />
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
                        <img src="img/claponpost.png" />
                        <p>Clap</p>
                      </div>
                      <div className="reactitems reactitems2">
                        <img src="img/postfollow.png" />
                        <p>Follow</p>
                      </div>
                      <div className="reactitems">
                        <img src="img/postsubcribe.png" />
                        <p>Subscribe</p>
                      </div>
                      <div className="reactitems">
                        <img src="img/postshare.png" />
                        <p>Share</p>
                      </div>
                      <div className="reactitems">
                        <img src="img/postsupport.png" />
                        <p>Support</p>
                      </div>
                      <div className="reactitems">
                        <img src="img/postplaylist.png" />
                        <p>Playlist</p>
                      </div>
                    </div>
                  </div> */}
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



export default Home
