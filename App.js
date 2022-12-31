import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';
import Apparel from './src/screens/Apparel';
import Notifications from './src/screens/Notifications';
import Settings from './src/screens/Settings';
import {auth} from './firebase';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      {!loggedIn ? (
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarActiveTintColor: '#2FBBF0',
            tabBarInactiveTintColor: '#7A8FA6',
            tabBarStyle: {
              backgroundColor: 'white',
              borderTopWidth: 0,
            },
          })}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              tabBarLabel: 'Home',
              tabBarIcon: ({focused, color, size}) => (
                <Image
                  source={
                    focused
                      ? require('./src/assets/images/home-active.png')
                      : require('./src/assets/images/home-not-active.png')
                  }
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Drinks"
            component={Apparel}
            options={{
              headerShown: false,
              tabBarLabel: 'Drinks',
              tabBarIcon: ({focused, color, size}) => (
                <Image
                  source={
                    focused
                      ? require('./src/assets/images/apparel-active.png')
                      : require('./src/assets/images/apparel-not-active.png')
                  }
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Notification"
            component={Notifications}
            options={{
              headerShown: false,
              tabBarLabel: 'Notification',
              tabBarIcon: ({focused, color, size}) => (
                <Image
                  source={
                    focused
                      ? require('./src/assets/images/notification-active.png')
                      : require('./src/assets/images/notification-not-active.png')
                  }
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Settings}
            options={{
              headerShown: false,
              tabBarLabel: 'Profile',
              tabBarIcon: ({focused, color, size}) => (
                <Image
                  source={
                    focused
                      ? require('./src/assets/images/profile-active.png')
                      : require('./src/assets/images/profile-not-active.png')
                  }
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
