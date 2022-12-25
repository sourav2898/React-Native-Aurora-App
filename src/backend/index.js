/* eslint-disable prettier/prettier */

import {auth, db} from '../../firebase';

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

export {handleSignup, handleSignin};
