import React from 'react';

import './UserMenu.scss';

const Menu = () => {
  return (
    <div className="user-dropdown">
      <div className="user-dropdown-button">
        <span>Jefferson M Fujioka</span>
        <div className="user-dropdown-img">
          <img
            src="https://www.gravatar.com/avatar/c19e3645ca160317ae0032d07015b037?s=80&d=retro&r=g"
            alt="user"
          />
        </div>
        <i class="dropdown icon"></i>
      </div>
      <div className="user-dropdown-content">
        <a>Administration</a>
        <a>Log Out</a>
      </div>
    </div>
  );
}

export default Menu;