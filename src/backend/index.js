/* eslint-disable prettier/prettier */
import {auth, firebase} from '../../firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';

const handleSignup = async(email, password) => {
  try {
    console.log(email, password);
    const result = await createUserWithEmailAndPassword(auth, email, password);
    console.log('result', result);
    return result;
  } catch (error) {
    console.log('error', error.message);
    return error.message;
  }
};

export {handleSignup};
