import React from 'react';
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

export default Notification;
