import React ,{useState} from 'react'
import PropTypes from 'prop-types'
import logo from "../../assets/img/logo.png"
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import toogle from "../../assets/img/toogle.png"
import topsearch from "../../assets/img/topsearch.png"
import Filter from "../../assets/img/Filter.png"
import Settings from "../../assets/img/Settings.png"

import menuprofileimg from "../../assets/img/menuprofileimg.png"

import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { NavLink } from "react-router-dom";


function NavBar(props) {
    const [open, setOpen] = useState(false);

    const [routes] = useState([
        { route: '', name: 'Home', isSelected: true },
        { route: 'profile', name: 'Profile', isSelected: false },
        { route: 'likes', name: 'Likes', isSelected: false },
        { route: 'events', name: 'Events', isSelected: false },
        { route: 'finder', name: 'Finder', isSelected: false },
        { route: 'deals', name: 'Deals', isSelected: false },
      ])

  return (
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
            //   aria-expanded="false"
              aria-label="Toggle navigation"
              aria-expanded={open}
              onClick={() => setOpen(!open)}

            >
              {/* <span class="navbar-toggler-icon"></span> */}
              <img src={toogle} alt="" />
              <img src="../../assets" alt="" />
            </button>
            <div className={ "collapse"} id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink
                      to="Home" >
                  <a className="nav-link" >
                    Home
                  </a>
                  </NavLink>
                </li>
             
                <li className="nav-item">
                <NavLink
                      to="Profile" >
                  <a className="nav-link" href="#">
                    Profile
                  </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                      to="Likes" >
                  <a className="nav-link" >
                    Likes
                  </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                      to="Events" >
                  <a className="nav-link" >
                    Events
                  </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                      to="Finder" >
                  <a className="nav-link" >
                    Finder
                  </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                      to="Deals" >
                  <a className="nav-link" >
                    Deals
                  </a>
                  </NavLink>
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

            <Collapse in={open}>
            <div className={"navbar-collapse" } id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink
                      to="Home" >
                  <a className="nav-link" href="#" >
                    Home
                  </a>
                  </NavLink>
                </li>
             
                <li className="nav-item">
                <NavLink
                      to="Profile" >
                  <a className="nav-link" href="#">
                    Profile
                  </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                      to="Likes" >
                  <a className="nav-link" href="#">
                    Likes
                  </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                      to="Events" >
                  <a className="nav-link" href="#">
                    Events
                  </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                      to="Finder" >
                  <a className="nav-link" href="#">
                    Finder
                  </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                      to="Deals" >
                  <a className="nav-link" href="#" >
                    Deals
                  </a>
                  </NavLink>
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
           </Collapse>
          </div>
        </nav>
      </div>
    </div>
  )
}

NavBar.propTypes = {}

export default NavBar
