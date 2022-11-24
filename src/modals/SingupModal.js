import React, { useState, useEffect, useMemo, useContext } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import "../css/signupin.css";

import Dropdown from "react-bootstrap/Dropdown";
import Select from "react-select";
import countryList from "react-select-country-list";
import dwnarrow from "../assets/img/dwnarrow.png";
import cross from "../assets/img/cross.png";
import { AuthContext } from "../context/AuthContext";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
  },
};

const customStylesSelect = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "grey" : "black",
    backgroundColor: state.isSelected ? "lightgrey" : "white",
    //   padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    color: "black",
    fontFamily: "MetronicPro",
    fontSize: "13px",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

function SingupModal(props) {
  const { login, createAccount } = useContext(AuthContext);
  const [signInInputs, setSignInInputs] = useState({ email: "", password: "" });
  const [signUpInputs, setSignUpInputs] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    phoneNumber: "",
    country: "",
    address: "",
    confirmPassword: "",
  });
  const [termOfUse, setTermOfUser] = useState(false);
  const [signInValidation, setSignInValidation] = useState(false);
  const [signUpValidation, setSignUpValidation] = useState(false);
  useEffect(() => {
    if (
      (signInInputs.email || signInInputs.email !== "") &&
      (signInInputs.password || signInInputs.password !== "") &&
      valideEmail(signInInputs.email)
    ) {
      setSignInValidation(true);
    }
    if (
      !signInInputs.email ||
      signInInputs.email === "" ||
      valideEmail(signInInputs.email) === false ||
      !signInInputs.password ||
      signInInputs.password === ""
    ) {
      setSignInValidation(false);
    }
  }, [signInInputs]);
  useEffect(() => {
    const {
      email,
      password,
      firstName,
      lastName,
      dob,
      phoneNumber,
      country,
      address,
      confirmPassword,
    } = signUpInputs;
    if (
      termOfUse &&
      (email || email !== "") &&
      valideEmail(email) &&
      validePhoneNumber(phoneNumber) &&
      (password || password !== "") &&
      (firstName || firstName !== "") &&
      (lastName || lastName !== "") &&
      (dob || dob !== "") &&
      (phoneNumber || phoneNumber !== "") &&
      (country || country !== "") &&
      (address || address !== "") &&
      (confirmPassword || confirmPassword !== "") &&
      password === confirmPassword
    ) {
      setSignUpValidation(true);
    }
    if (
      termOfUse === false ||
      validePhoneNumber(phoneNumber) === false ||
      valideEmail(email) === false ||
      !email ||
      email === "" ||
      !password ||
      password === "" ||
      !firstName ||
      firstName === "" ||
      !lastName ||
      lastName === "" ||
      !dob ||
      dob === "" ||
      !phoneNumber ||
      phoneNumber === "" ||
      !country ||
      country === "" ||
      !address ||
      address === "" ||
      !confirmPassword ||
      confirmPassword === "" ||
      password !== confirmPassword
    ) {
      setSignUpValidation(false);
    }
  }, [signUpInputs, termOfUse]);
  const [signUp, setSignUp] = useState(false);
  const [country, setCountry] = useState("");
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(true);

  const options = useMemo(() => countryList().getData(), []);
  const handleSelectCountry = (selectedCountry) => {
    setCountry(selectedCountry);
  };
  const handleChange = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    setSignUpInputs({ ...signUpInputs, [field]: value });
  };
  useEffect(() => {
    setSignUpInputs({ ...signUpInputs, country: country });
  }, [country]);
  function openModal() {
    setIsOpen(true);
  }

  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  let phoneNumberRegex = /^[/0-9]{8}$/;
  const valideEmail = (email) => {
    if (String(email).toLowerCase().match(emailRegex)) {
      return true;
    } else {
      return false;
    }
  };
  const validePhoneNumber = (phoneNumber) => {
    if (String(phoneNumber).toLowerCase().match(phoneNumberRegex)) {
      return true;
    } else {
      return false;
    }
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }
  const connectUser = async () => {
    return await login({
      variables: {
        input: {
          email: signInInputs.email,
          password: signInInputs.password,
        },
      },
    });
  };

  const signup = async () => {
    return await createAccount({
      variables: {
        input: {
          firstName: signUpInputs.firstName,
          lastName: signUpInputs.lastName,
          email: signUpInputs.email,
          password: signUpInputs.password,
          birthDate: signUpInputs.dob,
          phoneNumber: signUpInputs.phoneNumber,
          address: signUpInputs.address,
        },
      },
    });
  };

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
          <button
            className={signUp ? "signinbtn" : "signupbtn activebtn"}
            onClick={() => setSignUp(false)}
          >
            Sign In
          </button>
          <button
            className={!signUp ? "signinbtn" : "signupbtn activebtn"}
            onClick={() => setSignUp(true)}
          >
            Sign Up
          </button>
        </div>

        <img style={{ float: "right" }} src={cross} />
      </div>
      <div className="signheroarea">
        <div className="signheroareamain">
          {signUp ? (
            <div className="signformarea">
              <input
                type="text"
                placeholder="First name..."
                name="firstName"
                onChange={(e) => {
                  handleChange(e);
                }}
              />

              <input
                type="text"
                placeholder="Last name..."
                name="lastName"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <input
                type="text"
                placeholder="Date of Birth..."
                name="dob"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <input
                type="text"
                placeholder="E-mail.."
                name="email"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <input
                type="text"
                placeholder="Phone number..."
                name="phoneNumber"
                onChange={(e) => {
                  handleChange(e);
                }}
              />

              <Select
                styles={customStylesSelect}
                className="selectCountry"
                options={options}
                value={country}
                onChange={handleSelectCountry}
                isSearchable
                placeholder={"Country"}
              />

              <input
                type="text"
                placeholder="Address..."
                name="address"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <div className="signpassdiv">
                <input
                  type="password"
                  placeholder="Password..."
                  name="password"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <img src="img/visibility.png" />
              </div>
              <div className="signpassdiv">
                <input
                  type="password"
                  placeholder="Confirm password..."
                  name="confirmPassword"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <img src="img/visibility.png" />
              </div>
              <div className="signconditions">
                <p>
                  I acknowledge that i have read and agree with the{" "}
                  <a className="signdropdown-item" href>
                    Terms of use
                  </a>
                </p>
                <input
                  type="checkbox"
                  className="signform-check-input"
                  checked={termOfUse}
                  onClick={() => setTermOfUser(!termOfUse)}
                />
              </div>
              <button
                className="signjoinbtn"
                disabled={!signUpValidation}
                onClick={signup}
              >
                JOIN NOW
              </button>
            </div>
          ) : (
            <div className="signformarea">
              <input
                type="text"
                placeholder="E-mail.."
                onChange={(e) => {
                  setSignInInputs((prev) => ({
                    email: e.target.value,
                    password: prev.password,
                  }));
                }}
              />
              <div className="signpassdiv">
                <input
                  type="password"
                  placeholder="Password..."
                  onChange={(e) => {
                    setSignInInputs((prev) => ({
                      email: prev.email,
                      password: e.target.value,
                    }));
                  }}
                />
                <img src="img/visibility.png" />
              </div>
              <div className="signconditions">
                <p>Keep me logged in</p>
                <input type="checkbox" className="signform-check-input" />
              </div>
              <div className="signforgot">
                <p>
                  <a href="#">Forgot password ?</a>
                </p>
              </div>
              <button
                className="signjoinbtn"
                disabled={!signInValidation}
                onClick={() => connectUser()}
              >
                SIGN IN
              </button>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}

SingupModal.propTypes = {};

export default SingupModal;
