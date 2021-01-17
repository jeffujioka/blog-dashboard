import './StatCard.scss';

import React from 'react';

class StatCard extends React.Component {

  render() {
    const { label, icon, color, value } = this.props;
    const iconColor = color || '#000';
    const iconClass = icon || 'fa fa-question';

    console.log(value);
    return (
      <div className="stat-card">
        <div className="stat-card-icon">
          <i className={iconClass} style={{ color: iconColor }} />
        </div>
        <div className="stat-card-info">
          <span className="stat-title">
            { label }
          </span>
          <span className="stat-value">
            { value }
          </span>
        </div>
      </div>
    );
  }
}

export default StatCard;