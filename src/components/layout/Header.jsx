import './Header.scss'
import React from 'react';
import { Link } from 'react-router-dom';

import UserDropdown from '../modules/UserDropdown';

const user = {
  name: 'Jefferson M Fujioka',
  avatarSRC: 'https://www.gravatar.com/avatar/c19e3645ca160317ae0032d07015b037?s=80&d=retro&r=g'
};

const Header = ({ title }) => {
  return (
    <div className="header">
      <div className="header-toggle">
        <i className="angle left icon"></i>
      </div>
      <Link to="/" className="header-title">{title}</Link>
      <UserDropdown user={user} />
    </div>
  );
}

export default Header;