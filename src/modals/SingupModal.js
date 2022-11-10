import React , {useState , useEffect , useMemo} from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal';
import '../css/signupin.css'

import Dropdown from 'react-bootstrap/Dropdown';
import Select from 'react-select'
import countryList from 'react-select-country-list'
import dwnarrow from '../assets/img/dwnarrow.png'
import cross from '../assets/img/cross.png'


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding : 0 ,
  },
};

const customStylesSelect = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'grey' : 'black',
      backgroundColor: state.isSelected ? 'lightgrey' : 'white',
    //   padding: 20,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: '100%',
     display : 'flex',
     justifyContent : 'space-between',
     color: 'black',
     fontFamily: 'MetronicPro',
     fontSize: '13px',
     
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }


function SingupModal(props) {
    const [signUp, setSignUp] = useState(false)

    const [country, setCountry] = useState('')
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(true);
    const options = useMemo(() => countryList().getData(), [])


    const handleSelectCountry = (selectedCountry) => {
        console.log(selectedCountry)
       setCountry(selectedCountry)
      }

 
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  return (
 
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="authentification Modal"
    >
    
          <div className="signherohead">
            <div>
            <button className={signUp ? "signinbtn" : "signupbtn activebtn" } onClick={()=>setSignUp(false)}>Sign In</button>
            <button className={!signUp ? "signinbtn" : "signupbtn activebtn" } onClick={()=>setSignUp(true)}>Sign Up</button>
            </div>
          
            <img style={{float : 'right'}} src={cross} />
          </div>
          <div className='signheroarea'>
            <div className='signheroareamain'>
          {
            signUp ? 
            <div className="signformarea">
            <input type="text" placeholder="First name..." />
            <input type="text" placeholder="Last name..." />
            <input type="text" placeholder="Date of Birth..." />
            <input type="text" placeholder="E-mail.." />
            <input type="text" placeholder="Phone number..." />

               

            <Select    styles={customStylesSelect} className="selectCountry" options={options} value={country} onChange={handleSelectCountry} isSearchable placeholder={"Country"} />
         


            
   
            <input type="text" placeholder="Address..." />
            <div className="signpassdiv">
              <input type="password" placeholder="Password..." />
              <img src="img/visibility.png" />
            </div>
            <div className="signpassdiv">
              <input type="password" placeholder="Confirm password..." />
              <img src="img/visibility.png" />
            </div>
            <div className="signconditions">
              <p>I acknowledge that i have read and agree with the <a className="signdropdown-item" href>Terms of use</a></p>
              <input type="checkbox" className="signform-check-input" />
            </div>
            <button className="signjoinbtn">JOIN NOW</button>
          </div>
            :
            <div className="signformarea">
            <input type="text" placeholder="E-mail.." />
            <div className="signpassdiv">
              <input type="password" placeholder="Password..." />
              <img src="img/visibility.png" />
            </div>
            <div className="signconditions">
              <p>Keep me logged in</p>
              <input type="checkbox" className="signform-check-input" />
            </div>
            <div className="signforgot">
              <p><a href="#">Forgot password ?</a></p>
            </div>
            <button className="signjoinbtn">SIGN IN</button>
          </div>
          }
        
        </div>
        </div>

    </Modal>

  )
}

SingupModal.propTypes = {}

export default SingupModal
