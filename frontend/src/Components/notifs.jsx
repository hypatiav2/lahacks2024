/*import React, { useEffect } from 'react';

const publicVapidKey = "BBKSVFaVJE-05VHWhqGhzavKHAfuajR0B7AIiUIolYzicxO1V4b6hf4O7ko0BKUGqWzZ5rlJKcyru8-QIOitPjQ";

async function registerServiceWorker() {
    const register = await navigator.serviceWorker.register('./worker.js', {
        scope: '/'
    });

    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicVapidKey,
    });

    await fetch("http://localhost:5000/subscribe", {
        method: "POST",
        body: JSON.stringify(subscription),
        headers: {
            "Content-Type": "application/json",
        }
    })
}

const PushNotificationComponent = () => {
    registerServiceWorker();
    return <div></div>;
};

export default PushNotificationComponent;
*/
import React, { useEffect } from 'react';

const PushNotificationComponent = () => {
    useEffect(() => {

        // Function to display notification
        const showNotification = () => {
            new Notification("Grasshopper", {
            body: "Time to touch grass!",
            icon: 'https://touchgrass-a07f7.web.app/gh.svg',
            data: {
                url: '/map' // Include the URL in the data property
              }
            });
        
        };
        // Set up interval to log message every 10 seconds
                // Schedule notifications every 1 minute
        const intervalId = setInterval(showNotification, 3 * 60 * 1000);

        // Clean up interval when component unmounts
        return () => clearInterval(intervalId);
      }, []);

  return <div></div>;
};

export default PushNotificationComponent;
