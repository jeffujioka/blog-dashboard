import './StatCard.scss';

import React from 'react';

class StatCard extends React.Component {
  state = { counter: 0 }

  render() {
    const { label } = this.props;

    return (
      <div className="stat-card">
        <div className="stat-card-icon">
          <i className="fa fa-folder" />
        </div>
        <div className="stat-card-info">
          <span className="stat-title">
            { label }
          </span>
          <span className="stat-value">
            { this.state.counter }
          </span>
        </div>
      </div>
    );
  }
}

export default StatCard;