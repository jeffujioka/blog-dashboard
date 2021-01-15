import React from 'react';
import { Link } from 'react-router-dom';

import './UserDropdown.scss';

const UserDropdown = ({ user }) => {
  const logout = () => {
    console.log(`${user.name} is logging out...`);
  }

  return (
    <div className="user-dropdown">
      <div className="user-dropdown-button">
        <span>{ user.name }</span>
        <div className="user-dropdown-img">
          <img
            src={ user.avatarSRC }
            alt={ user.name }
          />
        </div>
        <i className="dropdown icon"></i>
      </div>
      <div className="user-dropdown-content">
        <Link to="/admin">Administration</Link>
        <Link to="/" onClick={ logout } >Log Out</Link>
      </div>
    </div>
  );
}

export default UserDropdown;