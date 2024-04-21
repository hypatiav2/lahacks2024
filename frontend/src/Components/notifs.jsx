import React, { useEffect } from 'react';
import {requestPermissionAndToken} from '../firebase'; // Adjust the path as needed

const PushNotificationComponent = () => {
  useEffect(() => {
    requestPermissionAndToken(); // Call the function when component mounts
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  return <div>Push Notification Component</div>;
};

export default PushNotificationComponent;
