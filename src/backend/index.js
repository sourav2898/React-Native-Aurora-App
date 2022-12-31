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

const getTheBobBurgersById = async id => {
  const res = await axios.get(
    `https://bobsburgers-api.herokuapp.com/characters/${id}`,
  );

  return res;
};

const getCurrentUser = async () => {
  const userEmail = await auth.currentUser?.email;
  return userEmail;
};

const getDrinks = async () => {
  const res = await axios.get(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita',
  );

  return res;
};

export {
  handleSignup,
  handleSignin,
  getTheBobBurgers,
  getCurrentUser,
  getDrinks,
  getTheBobBurgersById,
};
