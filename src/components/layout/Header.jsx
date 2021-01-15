import './Header.scss'
import React from 'react';

import UserMenu from './UserMenu';

const Header = ({ title }) => {
  return (
    <div className="header">
      <a className="header-toggle"><i className="angle left icon"></i></a>
      <span>{title}</span>
      <UserMenu />
    </div>
  );
}

export default Header;