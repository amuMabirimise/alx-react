import React from 'react';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

function Notifications() {
  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <button 
        style={{ float: 'right' }}
        aria-label="Close" 
        onClick={handleClick}
      >
        <img src={closeIcon} alt="Close Icon" />
      </button>
      <p>{getLatestNotification()}</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}

export default Notifications;