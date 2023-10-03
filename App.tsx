/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1042749152833-13ilqcgq50g2ceqojmu977eaja346pg1.apps.googleusercontent.com',
    });
  }, []);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const signIn = async () => {
    try {
      const a = await GoogleSignin.hasPlayServices();
      console.log(a);
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error: any) {
      console.log('err');
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput
          secureTextEntry
          placeholder="Password"
          style={styles.input}
        />
        <TextInput
          secureTextEntry
          placeholder="Repeat Password"
          style={styles.input}
        />
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}> Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.textMessage}> Or sign up with</Text>
        <View style={styles.loginServiceContainer}>
          <TouchableOpacity style={styles.loginServiceButton}>
            <Text style={styles.actionButtonText}> Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={signIn} style={styles.loginServiceButton}>
            <Text style={styles.actionButtonText}> Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    textAlign: 'center',
    backgroundColor: 'white',
    color: '#1D1D1D',
    paddingVertical: 80,
  },
  input: {
    backgroundColor: '#ECEDEE',
    borderRadius: 200,
    color: '#787878',
    paddingLeft: 20,
    fontSize: 16,
    marginVertical: 10,
    height: 50,
  },
  actionButton: {
    backgroundColor: '#ED6756',
    borderRadius: 200,
    marginVertical: 10,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  actionButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  inputContainer: {
    paddingHorizontal: 30,
    backgroundColor: 'white',
  },
  textMessage: {
    marginVertical: 10,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
  },
  loginServiceButton: {
    backgroundColor: '#1E4259',
    borderRadius: 200,
    marginVertical: 10,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 120,
  },
  loginServiceContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 'auto',
    justifyContent: 'space-evenly',
  },
});

export default App;
