import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwttOH78HPnFt4o3JPUE9L4NNpLyaLoXM",
  authDomain: "vue-firebase-site-5fd55.firebaseapp.com",
  projectId: "vue-firebase-site-5fd55",
  storageBucket: "vue-firebase-site-5fd55.appspot.com",
  messagingSenderId: "615506454398",
  appId: "1:615506454398:web:82c4fa8cdf30f3a5dbb52f",
  measurementId: "G-F859SVXFHZ"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timeStamp }