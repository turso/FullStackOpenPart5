import React from 'react';
import PropTypes from 'prop-types';
import '../StyleZ.css';

const Notification = ({ error, notification }) => {
  if (error !== null) {
    return <div className="error">{error}</div>;
  }

  if (notification !== null) {
    return <div className="notification">{notification}</div>;
  }

  return null;
};

Notification.propTypes = {
  error: PropTypes.string,
  notification: PropTypes.string
};

export default Notification;
