/* eslint-disable prettier/prettier */

import axios from 'axios';
import {auth, db} from '../../firebase';
import {collection, getDoc} from 'firebase/firestore';

const handleSignup = async details => {
  try {
    const {email, password, name, mobile} = details;
    const result = await auth.createUserWithEmailAndPassword(email, password);
    await db.collection('users').doc(result.user.email).set({
      user_id: result.user.uid,
      username: name,
      email: email,
      phone: mobile,
    });
    return {status: 200, result};
  } catch (error) {
    console.log('error while sign up', error.message);
    return error.message;
  }
};

const handleSignin = async details => {
  try {
    const {email, password} = details;
    const result = await auth.signInWithEmailAndPassword(email, password);
    return {status: 200, result};
  } catch (error) {
    console.log('error while sign in', error);
    return {status: 400, error};
  }
};

const getTheBobBurgers = async () => {
  const res = await axios.get(
    'https://bobsburgers-api.herokuapp.com/characters',
  );

  return res;
};

const getCurrentUser = async () => {
  const userEmail = await auth.currentUser?.email;
  console.log(userEmail.toLowerCase());
  const colRef = collection(db, 'users');
  const snapshots = await getDoc(colRef);

  const docs = snapshots.docs.map(doc => doc.data());
  console.log(docs);
};

export {handleSignup, handleSignin, getTheBobBurgers, getCurrentUser};
