import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD53q594AlVVT1RAU-vyzvTb_JpDq0H2ps",
  authDomain: "cashmoney-925eb.firebaseapp.com",
  projectId: "cashmoney-925eb",
  storageBucket: "cashmoney-925eb.appspot.com",
  messagingSenderId: "38230919554",
  appId: "1:38230919554:web:db3c88f8330251158ca79b"
};


// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore();

export { projectFirestore }