import React from 'react'
import PropTypes from 'prop-types'

import coverpic from "../../assets/img/coverpic.png"
import editcover from "../../assets/img/editcover.png"
import shortcut1 from "../../assets/img/shortcut1.png"
import msgicon from "../../assets/img/msgicon.png"
import followicon from "../../assets/img/followicon.png"
import subscribeicon from "../../assets/img/subscribeicon.png"
import shareicon from "../../assets/img/shareicon.png"
import idicon from "../../assets/img/idicon.png"
import profilephoto from "../../assets/img/profilephoto.png"
import editprofile from "../../assets/img/editprofile.png"
import badge1 from "../../assets/img/badge1.png"
import badge2 from "../../assets/img/badge2.png"
import badge3 from "../../assets/img/badge3.png"
import badge4 from "../../assets/img/badge4.png"
import badge5 from "../../assets/img/badge5.png"
import badge6 from "../../assets/img/badge6.png"
import badge7 from "../../assets/img/badge7.png"
import countryicon from "../../assets/img/countryicon.png"
import blogicon from "../../assets/img/blogicon.png"
import servicesicon from "../../assets/img/servicesicon.png"
import galleryicon from "../../assets/img/galleryicon.png"
import presskiticon from "../../assets/img/presskiticon.png"
import callendericon from "../../assets/img/callendericon.png"
import tokenicon from "../../assets/img/tokenicon.png"
import contactsicon from "../../assets/img/contactsicon.png"
import manageicon from "../../assets/img/manageicon.png"



function ProfileHeader(props) {
  return (
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
              <h5>This is a description test for a profile on <br /> MineClap ..</h5>
            </div>
            <div className="profilepics">
              <div className="proimg">
                <img src={profilephoto} />
                <img src={editprofile} className="editpro" />
              </div>
              {/* <div className="probadges">
                <img src={badge1} className="badge1" />
                <img src={badge2} className="badge2" />
                <img src={badge3} className="badge3" />
                <img src={badge4} className="badge4" />
                <img src={badge5} className="badge5" />
                <img src={badge6} className="badge6" />
                <img src={badge7} className="badge7" />
              </div> */}
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
  )
}

ProfileHeader.propTypes = {}

export default ProfileHeader
