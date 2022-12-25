import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCS4jOimrw3IsfcZ28QTAg8LBQGvzL43Ug',
  authDomain: 'aurora-f19b7.firebaseapp.com',
  projectId: 'aurora-f19b7',
  storageBucket: 'aurora-f19b7.appspot.com',
  messagingSenderId: '849353125547',
  appId: '1:849353125547:web:5b38857f322ae14519d1ee',
  measurementId: 'G-MKTSKY4K4Q',
};

firebase.initializeApp(firebaseConfig);
firebase
  .firestore()
  .settings({experimentalForceLongPolling: true, merge: true});
const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth};
