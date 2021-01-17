import './PageTitle.scss';

import React from 'react';

const PageTitle = ({ icon, title, subtitle }) => {
  const iconClass = icon || 'fa fa-home';

  return (
    <div className="page-title">
      <h1>
        <i className={iconClass}></i>
        {title}
      </h1>
      <hr style={{ color: 'slategray' }} />
      <h2>{subtitle ? subtitle : null}</h2>
    </div>
  );
}

export default PageTitle;