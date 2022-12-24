import {Formik} from 'formik';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Yup from 'yup';
import {firebase} from '../../../firebase';
import {handleSignup} from '../../backend';
import FailureOverlay from '../../components/failure-overlay';
import Loading from '../../components/loading';
import SuccessOverlay from '../../components/success-overlay';
import constants from '../../utils/constants';

const SignUpSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  cnf_password: Yup.string()
    .min(5, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  name: Yup.string().required('Required'),
  mobile: Yup.number().required('Required'),
});

const SignUp = ({navigation}) => {
  const [showOverlay, setShowOverlay] = useState('');
  const [showMessage, setShowMessage] = useState('');
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.topText}> {constants.appName} </Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}> Create {'\n'} Account </Text>
          <Formik
            initialValues={{
              email: 'sourav.kumar@gmail.com',
              password: 'sourav',
              cnf_password: 'sourav',
              name: 'sourav',
              mobile: '7992401159',
            }}
            validationSchema={SignUpSchema}
            onSubmit={async values => {
              setLoading(true);
              const res = await handleSignup(values.email, values.password);

              if (res?._tokenResponse) {
                setLoading(false);
                setVisible(true);
                setShowOverlay('success');
              } else {
                setLoading(false);
                setVisible(true);
                setShowOverlay('failure');
                if (res === 'Firebase: Error (auth/email-already-in-use).') {
                  console.log(res);
                  setShowMessage(
                    'email already in use, please choose another email.',
                  );
                }
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
                    style={
                      errors.name && touched.name
                        ? styles.errorTextInput
                        : styles.textInput
                    }
                    value={values.name}
                    placeholder="Name*"
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                  />
                  {errors.name && touched.name ? (
                    <Text style={styles.errorText}> {errors.name} </Text>
                  ) : null}
                  <TextInput
                    style={
                      errors.email && touched.email
                        ? styles.errorTextInput
                        : styles.textInput
                    }
                    value={values.email}
                    placeholder="Email*"
                    keyboardType="email-address"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                  />
                  {errors.email && touched.email ? (
                    <Text style={styles.errorText}> {errors.email} </Text>
                  ) : null}

                  <TextInput
                    style={
                      errors.mobile && touched.mobile
                        ? styles.errorTextInput
                        : styles.textInput
                    }
                    value={values.mobile}
                    placeholder="Mobile*"
                    keyboardType="number"
                    onChangeText={handleChange('mobile')}
                    onBlur={handleBlur('mobile')}
                  />
                  {errors.mobile && touched.mobile ? (
                    <Text style={styles.errorText}> {errors.mobile} </Text>
                  ) : null}
                  <TextInput
                    style={
                      errors.password && touched.password
                        ? styles.errorTextInput
                        : styles.textInput
                    }
                    value={values.password}
                    placeholder="Password*"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    secureTextEntry
                  />
                  {errors.password && touched.password ? (
                    <Text style={styles.errorText}> {errors.password} </Text>
                  ) : null}
                  <TextInput
                    style={
                      errors.cnf_password && touched.cnf_password
                        ? styles.errorTextInput
                        : styles.textInput
                    }
                    value={values.cnf_password}
                    placeholder="Confirm Password*"
                    onChangeText={handleChange('cnf_password')}
                    onBlur={handleBlur('cnf_password')}
                    secureTextEntry
                  />
                  {errors.cnf_password && touched.cnf_password ? (
                    <Text style={styles.errorText}>
                      {' '}
                      {errors.cnf_password}{' '}
                    </Text>
                  ) : null}
                  <TouchableOpacity onPress={handleSubmit}>
                    <Text style={styles.button}> Sign Up </Text>
                  </TouchableOpacity>
                </>
              );
            }}
          </Formik>
          <Text
            style={{color: '#fff', textAlign: 'center', fontSize: 15}}
            onPress={() => navigation.navigate('SignIn')}>
            Already have an account?{' '}
            <Text style={{color: 'white', fontWeight: 'bold'}}>Sign In</Text>
          </Text>
        </View>
      </View>
      {showOverlay === 'success' ? (
        <SuccessOverlay
          visible={visible}
          setVisible={setVisible}
          successText="Your Account has been created successfully. Please go ahead and login."
        />
      ) : showOverlay === 'failure' ? (
        <FailureOverlay
          visible={visible}
          setVisible={setVisible}
          failureText={showMessage}
        />
      ) : loading ? (
        <Loading />
      ) : null}
    </>
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
    placeholderTextColor: '#ffffff',
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
    placeholderTextColor: '#ffffff',
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
export default SignUp;
