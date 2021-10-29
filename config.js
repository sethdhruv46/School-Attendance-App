import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyDoaqrtS6riQwz9bsQoHLH6ljEiZHb_X8Q",
  authDomain: "school-attendance-app-adbb5.firebaseapp.com",
  databaseURL: "https://school-attendance-app-adbb5-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-adbb5",
  storageBucket: "school-attendance-app-adbb5.appspot.com",
  messagingSenderId: "439023682407",
  appId: "1:439023682407:web:47845f101eee9c1a9725c2"
};
firebase.initializeApp(firebaseConfig);
export default firebase.database() 