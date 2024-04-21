import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5WRtxHQrdE8qkLEJcH8ASpyWwaW4Qjxw",
  authDomain: "touchgrass-a07f7.firebaseapp.com",
  databaseURL: "https://touchgrass-a07f7-default-rtdb.firebaseio.com",
  projectId: "touchgrass-a07f7",
  storageBucket: "touchgrass-a07f7.appspot.com",
  messagingSenderId: "360547043141",
  appId: "1:360547043141:web:d6b63c97c8ab5f0071e02c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);


const messaging = getMessaging();
export const auth = getAuth();

const requestNotificationPermission = async () => {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');}
    })
}


export const requestPermissionAndToken = async () => {
  // Request permission
  await requestNotificationPermission();
  
    // Get registration token. Initially this makes a network call, once retrieved
  // subsequent calls to getToken will return from cache.
  getToken(messaging, { vapidKey: 'BBKSVFaVJE-05VHWhqGhzavKHAfuajR0B7AIiUIolYzicxO1V4b6hf4O7ko0BKUGqWzZ5rlJKcyru8-QIOitPjQ' }).then((currentToken) => {
    if (currentToken) {
      console.log(currentToken);
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });
};

onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // Update the UI to include the received message.
});