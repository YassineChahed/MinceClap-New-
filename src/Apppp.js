import logo from "./assets/img/logo.png"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import toogle from "./assets/img/toogle.png"
import topsearch from "./assets/img/topsearch.png"
// import menuprofileimg from "./assets/img/menuprofileimg.png"
import Filter from "./assets/img/Filter.png"
import Settings from "./assets/img/Settings.png"
import searchpro from "./assets/img/searchpro.png"
import prosearch1 from "./assets/img/prosearch1.png"
import prosearch2 from "./assets/img/prosearch2.png"
import prosearch3 from "./assets/img/prosearch3.png"
import prosearch4 from "./assets/img/prosearch4.png"
import prosearch5 from "./assets/img/prosearch5.png"
import chartfilter from "./assets/img/chartfilter.png"
import menuprofileimg from "./assets/img/menuprofileimg.png"

import discover from "./assets/img/discover.png"
import discoversettings from "./assets/img/discoversettings.png"
import lives from "./assets/img/lives.png"
import viewers from "./assets/img/viewers.png"
import LIVE from "./assets/img/LIVE.png"

import clapico from "./assets/img/clapico.png"
import subscribeico from "./assets/img/subscribeico.png"
import supportico from "./assets/img/supportico.png"
import shareico from "./assets/img/shareico.png"

import playlist from "./assets/img/playlist.png"
import descriptiondwn from "./assets/img/descriptiondwn.png"
// import profilepic2 from "./assets/img/profilepic2.png"


import profilepic2 from "./assets/img/profilepic2.png"

import moreico from "./assets/img/moreico.png"
import coverpic from "./assets/img/coverpic.png"
import editcover from "./assets/img/editcover.png"

import shortcut1 from "./assets/img/shortcut1.png"
import msgicon from "./assets/img/msgicon.png"
import followicon from "./assets/img/followicon.png"
import subscribeicon from "./assets/img/subscribeicon.png"
import shareicon from "./assets/img/shareicon.png"

import idicon from "./assets/img/idicon.png"
import profilephoto from "./assets/img/profilephoto.png"
import editprofile from "./assets/img/editprofile.png"
import badge1 from "./assets/img/badge1.png"
import badge2 from "./assets/img/badge2.png"
import badge3 from "./assets/img/badge3.png"
import badge4 from "./assets/img/badge4.png"
import badge5 from "./assets/img/badge5.png"
import badge6 from "./assets/img/badge6.png"
import badge7 from "./assets/img/badge7.png"
import countryicon from "./assets/img/countryicon.png"
import blogicon from "./assets/img/blogicon.png"

import galleryicon from "./assets/img/galleryicon.png"
import presskiticon from "./assets/img/presskiticon.png"
import callendericon from "./assets/img/callendericon.png"
import tokenicon from "./assets/img/tokenicon.png"
import contactsicon from "./assets/img/contactsicon.png"
import manageicon from "./assets/img/manageicon.png"
import statusicon from "./assets/img/statusicon.png"
import musicicon from "./assets/img/musicicon.png"
import photoicon from "./assets/img/photoicon.png"
import videoicon from "./assets/img/videoicon.png"
import contentcreator from "./assets/img/contentcreator.png"
import videocontent from "./assets/img/videocontent.png"
import videoplay from "./assets/img/videoplay.png"
import viewers1 from "./assets/img/viewers1.png"
import viewers2 from "./assets/img/viewers2.png"
import viewers3 from "./assets/img/viewers3.png"
import viewers4 from "./assets/img/viewers4.png"
import viewers5 from "./assets/img/viewers5.png"
import claponpost from "./assets/img/claponpost.png"
import postfollow from "./assets/img/postfollow.png"
import postsubcribe from "./assets/img/postsubcribe.png"
import postshare from "./assets/img/postshare.png"
import postsupport from "./assets/img/postsupport.png"
import followico from "./assets/img/followico.png"
import servicesicon from "./assets/img/servicesicon.png"
import postplaylist from "./assets/img/postplaylist.png"
import nordvpn from "./assets/img/nordvpn.png"
import leftarrow from "./assets/img/leftarrow.png"
import rightarrow from "./assets/img/rightarrow.png"
import eventcolor1 from "./assets/img/eventcolor1.png"
import eventcolor2 from "./assets/img/eventcolor2.png"


function App() {
  return (
    <>
    {/* Header */}
    <div className="header">
      <div className="headermain">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <span class="navbar-toggler-icon"></span> */}
              <img src={toogle} alt="" />
              <img src="./assets" alt="" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Likes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Events
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Finder
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Deals
                  </a>
                </li>
              </ul>
              <div className="topsearch">
                <input type="text" placeholder="Search..." />
                <img src={topsearch} />
              </div>
              <div className="navproitems">
                <img src={menuprofileimg} className="menuproimg" />
                <img src={Filter} className="menufilter" />
                <img src={Notification} className="notification" />
                <img src={Settings} className="settings" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    {/* Header end */}
    {/* Left Right Area */}
    <div className="leftrightarea">
      <div className="leftrightareamain">
        {/* Right Side Area */}
        <div className="rightarea">
          <div className="rightareamain">
            <div className="rightitems">
              <div className="searchbar">
                <input type="text" placeholder="Search messages" />
                <img src={searchpro} />
              </div>
              <div className="searchpro">
                <div className="searchproitem">
                  <img src={prosearch1} />
                  <div className="pronames">
                    <div className="proname">
                      <p>Nick Grissom</p>
                      <span>2hrs</span>
                    </div>
                    <h5>Can you stream the new game?</h5>
                  </div>
                </div>
                <div className="searchproitem">
                  <img src={prosearch2} />
                  <div className="pronames">
                    <div className="proname">
                      <p>Matt Parker</p>
                      <span>2hrs</span>
                    </div>
                    <h5>Can you stream the new game?</h5>
                  </div>
                </div>
                <div className="searchproitem">
                  <img src={prosearch3} />
                  <div className="pronames">
                    <div className="proname">
                      <p>Neko Bebop</p>
                      <span>2hrs</span>
                    </div>
                    <h5>Awesome! I'll see you there!</h5>
                  </div>
                </div>
                <div className="searchproitem">
                  <img src={prosearch4} />
                  <div className="pronames">
                    <div className="proname">
                      <p>Bearded Wonder</p>
                      <span>2hrs</span>
                    </div>
                    <h5>Great! Then we'll meet with them at...</h5>
                  </div>
                </div>
                <div className="searchproitem">
                  <img src={prosearch5} />
                  <div className="pronames">
                    <div className="proname">
                      <p>Sandra Strange</p>
                      <span>2hrs</span>
                    </div>
                    <h5>Can you stream the new game?</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="btmbuttons">
              <img src={chartfilter} />
              <button className="chatsbtn">Chat</button>
              <button className="demosbtn">Demos</button>
            </div>
          </div>
        </div>
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
                <img src={lives} className="livesvid" />
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
              <p>
                So perhaps, you've generated some fancy text, and you're content
                that you can now copy and paste your fancy text in the comments
                section of funny cat videos.
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
                <p className="maincomment">
                  So perhaps, you've generated some fancy text, and you're content
                  that you can now copy and paste your fancy text in the comments
                  section of funny cat videos.
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
                <p className="maincomment">
                  So perhaps, you've generated some fancy text, and you're content
                  that you can now copy and paste your fancy text in the comments
                  section of funny cat videos.
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
                <p className="maincomment">
                  So perhaps, you've generated some fancy text, and you're content
                  that you can now copy and paste your fancy text in the comments
                  section of funny cat videos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Hero Area */}
    <div className="heroarea">
      <div className="heroareamain">
        <div className="heromainarea">
          {/* Profile Head */}
          <div className="profilehead">
            <div className="profiledtls">
              <div className="profilecover">
                <img src={coverpic} className="coverpic" />
                <div className="coveredit">
                  <img src={editcover} />
                </div>
                <div className="covershortcuts">
                  <img src={shortcut1} />
                  <img src={msgicon} />
                  <img src={followicon} />
                  <img src={subscribeicon} />
                  <img src={shareicon} />
                  <img src={idicon} />
                </div>
              </div>
              <div className="profilepictures">
                <div className="namediv">
                  <p>Abd Al Mohamed Skander Ben Hadj Hassine </p>
                  <h5>
                    This is a description test for a profile on <br /> MineClap ..
                  </h5>
                </div>
                <div className="profilepics">
                  <div className="proimg">
                    <img src={profilephoto} />
                    <img src={editprofile} className="editpro" />
                  </div>
                  <div className="probadges">
                    <img src={badge1} className="badge1" />
                    <img src={badge2} className="badge2" />
                    <img src={badge3} className="badge3" />
                    <img src={badge4} className="badge4" />
                    <img src={badge5} className="badge5" />
                    <img src={badge6} className="badge6" />
                    <img src={badge7} className="badge7" />
                  </div>
                </div>
                <div className="profileactivitis">
                  <div className="activity1">
                    <p>930</p>
                    <h6>POSTS</h6>
                  </div>
                  <div className="activity1">
                    <p>82</p>
                    <h6>FOLLOWERS</h6>
                  </div>
                  <div className="activity1">
                    <p>5.7K</p>
                    <h6>XP</h6>
                  </div>
                  <div className="activity1">
                    <img src={countryicon} />
                    <h6 className="countryname">TUN</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard">
              <div className="dashitems dashitemactive">
                <img src={blogicon} />
              </div>
              <div className="dashitems">
                <img src={servicesicon} />
              </div>
              <div className="dashitems">
                <img src={galleryicon} />
              </div>
              <div className="dashitems">
                <img src={presskiticon} />
              </div>
              <div className="dashitems">
                <img src={callendericon} />
              </div>
              <div className="dashitems">
                <img src={tokenicon} />
              </div>
              <div className="dashitems">
                <img src={contactsicon} />
              </div>
              <div className="dashitems">
                <img src={manageicon} />
              </div>
            </div>
          </div>
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
                <div className="mainpost">
                  <div className="commentpro2">
                    <img src={contentcreator} className="commentpropic" />
                    <div className="commentname">
                      <div className="commentowner">
                        <p>Marina Valentine</p>
                        <img src={moreico} />
                      </div>
                      <h6>29 minutes ago</h6>
                    </div>
                  </div>
                  <div className="videocontent">
                    <div className="videoplay">
                      <img src={videocontent} />
                      <img src={videoplay} className="videoplayer" />
                    </div>
                    <div className="videotext">
                      <h2>Kolok Showcase Aftermovie</h2>
                      <p>
                        So perhaps, you've generated some fancy text, and you're
                        content that you can now copy and paste your fancy text in
                        the comments section of funny cat videos.
                      </p>
                    </div>
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
                          <img src={viewers3} className="viewersicon" />
                          <img src={viewers4} className="viewersicon" />
                          <img src={viewers5} className="viewersicon" />
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
                <div className="mainpost">
                  <div className="commentpro2">
                    <img src={contentcreator} className="commentpropic" />
                    <div className="commentname">
                      <div className="commentowner">
                        <p>Marina Valentine</p>
                        <img src={moreico} />
                      </div>
                      <h6>29 minutes ago</h6>
                    </div>
                  </div>
                  <div className="postcontent">
                    <p>
                      So perhaps, you've generated some fancy text, and you're
                      content that you can now copy and paste your fancy text in
                      the comments section of funny cat videos but perhaps you're
                      wondering how it's even possible to change the font of your
                      text? Is it some sort of hack? Are you copying and pasting
                      an actual font? Well, the answer is actually no - rather
                      than generating fancy fonts <br /> <br />
                      This converter creates fancy symbols. The explanation starts
                      with unicodebolard.
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
                          <img src={viewers3} className="viewersicon" />
                          <img src={viewers4} className="viewersicon" />
                          <img src={viewers5} className="viewersicon" />
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
                <div className="mainpost">
                  <div className="commentpro2">
                    <img src={contentcreator} className="commentpropic" />
                    <div className="commentname">
                      <div className="commentowner">
                        <p>Marina Valentine</p>
                        <img src={moreico} />
                      </div>
                      <h6>29 minutes ago</h6>
                    </div>
                  </div>
                  <div className="videocontent">
                    <div className="videoplay">
                      <img src={videocontent} />
                      <img src={videoplay} className="videoplayer" />
                    </div>
                    <div className="videotext">
                      <h2>Kolok Showcase Aftermovie</h2>
                      <p>
                        So perhaps, you've generated some fancy text, and you're
                        content that you can now copy and paste your fancy text in
                        the comments section of funny cat videos.
                      </p>
                    </div>
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
                          <img src={viewers3} className="viewersicon" />
                          <img src={viewers4} className="viewersicon" />
                          <img src={viewers5} className="viewersicon" />
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
                <div className="mainpost">
                  <div className="commentpro2">
                    <img src={contentcreator} className="commentpropic" />
                    <div className="commentname">
                      <div className="commentowner">
                        <p>Marina Valentine</p>
                        <img src={moreico} />
                      </div>
                      <h6>29 minutes ago</h6>
                    </div>
                  </div>
                  <div className="postcontent">
                    <p>
                      So perhaps, you've generated some fancy text, and you're
                      content that you can now copy and paste your fancy text in
                      the comments section of funny cat videos but perhaps you're
                      wondering how it's even possible to change the font of your
                      text? Is it some sort of hack? Are you copying and pasting
                      an actual font? Well, the answer is actually no - rather
                      than generating fancy fonts <br /> <br />
                      This converter creates fancy symbols. The explanation starts
                      with unicodebolard.
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
                          <img src={viewers3} className="viewersicon" />
                          <img src={viewers4} className="viewersicon" />
                          <img src={viewers5} className="viewersicon" />
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
              </div>
            </div>
            <div className="maincontent2">
              <img src={nordvpn} className="nordvpn" />
              <div className="calenderdiv">
                <div className="calender">
                  <div className="calendertiltle">
                    <p>August 2022</p>
                    <div className="calenderlr">
                      <img src={leftarrow} />
                      <img src={rightarrow} />
                    </div>
                  </div>
                  <div className="maincalender">
                    <table>
                      <tbody>
                        <tr>
                          <th>Sun</th>
                          <th>Mon</th>
                          <th>Tue</th>
                          <th>Wed</th>
                          <th>Wed</th>
                          <th>Fri</th>
                          <th>Sat</th>
                        </tr>
                        <tr>
                          <td>29</td>
                          <td>30</td>
                          <td>31</td>
                          <td>1</td>
                          <td>2</td>
                          <td>3</td>
                          <td>4</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>6</td>
                          <td>7</td>
                          <td>8</td>
                          <td>9</td>
                          <td>10</td>
                          <td>11</td>
                        </tr>
                        <tr>
                          <td>12</td>
                          <td className="tableselected">13</td>
                          <td>14</td>
                          <td>15</td>
                          <td>16</td>
                          <td>17</td>
                          <td>18</td>
                        </tr>
                        <tr>
                          <td>19</td>
                          <td>20</td>
                          <td>21</td>
                          <td>22</td>
                          <td>23</td>
                          <td>24</td>
                          <td>25</td>
                        </tr>
                        <tr>
                          <td>26</td>
                          <td>27</td>
                          <td>28</td>
                          <td>29</td>
                          <td>30</td>
                          <td>31</td>
                          <td>1</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="calenderevents">
                  <div className="eventtitle">
                    <p>Monday 13th</p>
                  </div>
                  <div className="eventsitem">
                    <div className="times">
                      <p>8:30</p>
                      <h6>AM</h6>
                    </div>
                    <div className="eventcolor">
                      <img src={eventcolor1} />
                    </div>
                    <div className="eventxt">
                      <p>Breakfast with neko</p>
                      <h5>
                        Hi Neki! I'm creating this event to invite you to have
                        breakfast before work. Meet me at Coffebucks
                      </h5>
                    </div>
                  </div>
                  <div className="eventsitem eventlast">
                    <div className="times">
                      <p>8:30</p>
                      <h6>AM</h6>
                    </div>
                    <div className="eventcolor">
                      <img src={eventcolor2} />
                    </div>
                    <div className="eventxt">
                      <p>Streaming Party</p>
                      <h5>
                        Hi Neki! I'm creating this event to invite you to have
                        breakfast before work.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Main Contents End */}
        </div>
      </div>
    </div>
  </>
  
  );
}

export default App;
