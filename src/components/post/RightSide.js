import React ,{useState} from 'react'
import PropTypes from 'prop-types'
import nordvpn from '../../assets/img/nordvpn.png'
import leftarrow from '../../assets/img/leftarrow.png'
import rightarrow from '../../assets/img/rightarrow.png'

import Calendar from 'moedim';


function RightSide(props) {

    const [dateValue, setDateValue] = useState(new Date())

  return (

    <div className="maincontents">
    <div className="maincontent2">
    <div style={{position : 'sticky' , top : 10}}>
        <img src={nordvpn} className="nordvpn" />
        <div className="calenderdiv">
          <div className="calender">
            
            <div className="maincalender">
            <Calendar value={dateValue} onChange={(d) => setDateValue(d)} />

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
                <img src="img/eventcolor1.png" />
              </div>
              <div className="eventxt">
                <p>Breakfast with neko</p>
                <h5>Hi Neki! I'm creating this event to invite you to have breakfast before
                  work. Meet me at Coffebucks</h5>
              </div>
            </div>
            <div className="eventsitem eventlast">
              <div className="times">
                <p>8:30</p>
                <h6>AM</h6>
              </div>
              <div className="eventcolor">
                <img src="img/eventcolor2.png" />
              </div>
              <div className="eventxt">
                <p>Streaming Party</p>
                <h5>Hi Neki! I'm creating this event to invite you to have breakfast before
                  work.</h5>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
   
  )
}

RightSide.propTypes = {}

export default RightSide
