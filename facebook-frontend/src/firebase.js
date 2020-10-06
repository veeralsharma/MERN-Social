import firebase from "firebase"


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_DOMAIN,
    databaseURL: process.env.REACT_APP_DB_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE,
    messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth,provider};

export default auth