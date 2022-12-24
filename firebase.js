/* eslint-disable prettier/prettier */
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {getAuth} from 'firebase/auth';
import 'firebase/firestore';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCS4jOimrw3IsfcZ28QTAg8LBQGvzL43Ug',
  authDomain: 'aurora-f19b7.firebaseapp.com',
  projectId: 'aurora-f19b7',
  storageBucket: 'aurora-f19b7.appspot.com',
  messagingSenderId: '849353125547',
  appId: '1:849353125547:web:5b38857f322ae14519d1ee',
  measurementId: 'G-MKTSKY4K4Q',
};

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export {firebase, auth, db};
