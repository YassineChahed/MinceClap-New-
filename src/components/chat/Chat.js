import React , {useState} from 'react'

import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import searchpro from "../../assets/img/searchpro.png"

import chartfilter from "../../assets/img/chartfilter.png"
import ChatMember from './ChatMember';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'react-chatbox-component/dist/style.css';
import {ChatBox} from 'react-chatbox-component';

function Chat(props) {
  const [chatOpen, setChatOpen] = useState(false)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(!show);
  const handleShow = () => setShow(!show);
  const  data =[{fullName : "Nick Grissom" , image : 'https://picsum.photos/200/300' , lastSeen : "2hrs" , lastMessage :"Can you stream the new game?"},
  {fullName : "Matt Parker" , image : 'https://picsum.photos/200/300' , lastSeen : "2hrs" , lastMessage :"Can you stream the new game?"},
  {fullName : "Neko Bebop" , image : 'https://picsum.photos/200/300' , lastSeen : "2hrs" , lastMessage :"Can you stream the new game?"},
  {fullName : "Bearded Wonder" , image : 'https://picsum.photos/200/300' , lastSeen : "2hrs" , lastMessage :"Can you stream the new game?"},
  {fullName : "Sandra Strange" , image : 'https://picsum.photos/200/300' , lastSeen : "2hrs" , lastMessage :"Can you stream the new game?"},
  {fullName : "Nick Grissom" , image : 'https://picsum.photos/200/300' , lastSeen : "2hrs" , lastMessage :"Can you stream the new game?"}]
  const messages = [
    {
      "text": "Hello there",
      "id": "1",
      "sender": {
        "name": "Ironman",
        "uid": "user1",
        "avatar": "https://data.cometchat.com/assets/images/avatars/ironman.png",
      },
    },
  ]
  return (<>

    <Offcanvas style={{height : 0 , position :'fixed' , top : 110}} show={show} onHide={handleClose} placement={'end'} backdrop={false}  scroll ={true}>
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
           
            { data.map(el => <ChatMember data={el}/>)}
            <div >
            <ChatBox 
  messages={messages}
/>
            </div>
 
          </div>
          <div className="btmbuttons">
            <img src={chartfilter} onClick={handleShow} />
            <button className="chatsbtn">Chat</button>
            <button className="demosbtn">Demos</button>
          </div>
        </div>
      </div>

    </div>
  </div>
  </Offcanvas>
  <button style={{position : 'fixed' , bottom : 50 , right : 50 , width :70 , height : 70 , borderRadius : '50%' , borderColor : 'lightblue'}} onClick={handleShow} >
  <img src={chartfilter}  />

      </button>


  </>
  )
}

Chat.propTypes = {}

export default Chat
