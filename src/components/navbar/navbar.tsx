import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css';
import HomeIcon from "./navbar_icons/home.svg"
import ManuscriptIcon from "./navbar_icons/manuscript.svg"
import MessageIcon from "./navbar_icons/message.svg"
import ProfileIcon from "./navbar_icons/profile.svg"
import SettingsIcon from "./navbar_icons/settings.svg"


class Navbar extends Component {
    render(){
        return(
            <div className="outerContainer">
                <div>
                    <NavLink exact to="/" activeClassName="active">
                        <img className="navbar-icon" src={HomeIcon} alt="home icon"></img>
                        <p className="navbar-text">Home</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/manuscripts" activeClassName="active">
                        <img className="navbar-icon" src={ManuscriptIcon} alt="home icon"></img>
                        <p className="navbar-text">Manuscripts</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/messages" activeClassName="active">
                        <img className="navbar-icon" src={MessageIcon} alt="home icon"></img>
                        <p className="navbar-text">Messages</p>
                    </NavLink>
                    </div>
                <div>
                    <NavLink to="/profile" activeClassName="active">
                        <img className="navbar-icon" src={ProfileIcon} alt="home icon"></img>
                        <p className="navbar-text">Profile</p>
                        </NavLink>
                    </div>
                <div>
                    <NavLink to="/settings" activeClassName="active">
                        <img className="navbar-icon" src={SettingsIcon} alt="home icon"></img>
                        <p className="navbar-text">Settings</p>
                    </NavLink>
                    </div>
            </div>
        );
    }
}
export default Navbar;