import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import constants from '../../utils/constants';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {handleSignin} from '../../backend';
import FailureOverlay from '../../components/failure-overlay';
import Loading from '../../components/loading';

const SignInSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const SignIn = ({navigation}) => {
  const [showOverlay, setShowOverlay] = useState('');
  const [showMessage, setShowMessage] = useState('');
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.topText}> {constants.appName} </Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.bottomText}> Weclome {'\n'} Back </Text>
        <Formik
          initialValues={{email: 'soura.kumar@gmail.com', password: 'sourav'}}
          validationSchema={SignInSchema}
          onSubmit={async values => {
            setLoading(true);
            const res = await handleSignin(values);

            if (res.status === 200) {
              setLoading(false);
            } else {
              setLoading(false);
              setShowOverlay('failure');
              setShowMessage(
                'There was some error in loging you in. Please try later.',
              );
            }
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => {
            return (
              <>
                <TextInput
                  name="email"
                  id="email"
                  style={
                    errors?.email && touched?.email
                      ? styles.errorTextInput
                      : styles.textInput
                  }
                  value={values.email}
                  placeholder="Email*"
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                {errors?.email && touched?.email ? (
                  <Text style={styles.errorText}> {errors.email} </Text>
                ) : null}
                <TextInput
                  name="password"
                  id="password"
                  style={
                    errors?.password && touched?.password
                      ? styles.errorTextInput
                      : styles.textInput
                  }
                  value={values.password}
                  placeholder="Password*"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry
                />
                {errors?.password && touched?.password ? (
                  <Text style={styles.errorText}> {errors.password} </Text>
                ) : null}
                <TouchableOpacity onPress={handleSubmit}>
                  <Text style={styles.button}> Sign In </Text>
                </TouchableOpacity>
              </>
            );
          }}
        </Formik>
        <Text
          style={{color: '#fff', textAlign: 'center', fontSize: 15}}
          onPress={() => navigation.navigate('SignUp')}>
          Don't have an account?{' '}
          <Text style={{color: 'white', fontWeight: 'bold'}}>Sign Up</Text>
        </Text>
      </View>
      {showOverlay === 'failure' ? (
        <FailureOverlay
          visible={visible}
          setVisible={setVisible}
          failureText={showMessage}
        />
      ) : loading ? (
        <Loading />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  top: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    color: '#111',
    fontSize: 50,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  bottom: {
    flexDirection: 'column',
    width: '100%',
    padding: 10,
    backgroundColor: '#111',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  bottomText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    width: '100%',
    height: 50,
    color: 'white',
    padding: 10,
    marginTop: 20,
  },
  errorTextInput: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    width: '100%',
    height: 50,
    color: 'white',
    padding: 10,
    marginTop: 20,
  },
  button: {
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
  },
});

export default SignIn;
