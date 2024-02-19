import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import RandomIndex from './components/RandomIndex';
import PickedOutfitCard from './components/PickedOutfitCard';
import { SceneMap } from 'react-native-tab-view';
import { useWindowDimensions } from 'react-native';
import * as React from 'react';
import { TabView } from 'react-native-tab-view';
import Navbar from './components/Navbar';
import SignInScreen from './SignInScreen';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from 'firebase/auth';
import { auth } from './firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

/*
const EXPO_REDIRECT_PARAMS = {
  useProxy: true,
  projectNameForProxy: `@username/<YOURSCHEME>`
};

const NATIVE_REDIRECT_PARAMS = { native: '<YOURSCHEME>://' };
const REDIRECT_PARAMS =
  Constants.appOwnership === 'expo'
      ? EXPO_REDIRECT_PARAMS
      : NATIVE_REDIRECT_PARAMS;

const [request, response, promptAsync] = Google.useAuthRequest({
  expoClientId: '10784791395-b2djj04t3afo4g8l5amqg9cvv7m10j2g.apps.googleusercontent.com',
  androidClientId: '10784791395-7lk4jsdpgm1isg8qu88vj9fmfcdkpc12.apps.googleusercontent.com',
  webClientId: '10784791395-b2djj04t3afo4g8l5amqg9cvv7m10j2g.apps.googleusercontent.com',
  iosClientId: '10784791395-fsu37876k7chvibjr6rqkm3n2t7fahkc.apps.googleusercontent.com',
  scopes: ['profile', 'email'],

});
*/


const logo = require('./favicon.webp');
const defaultOutfitUri = 'https://stylecaster.com/wp-content/uploads/2020/10/fall-outfit-inspo-pants-.jpeg?w=495';

const Main = () => (
  <View style={styles.container}>
      <Text style={styles.appTitle}>FitPick</Text>

      <PickedOutfitCard imageUrl={defaultOutfitUri} local={false}/>

      <Button
        title="Upload"
        color="yellow"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
);

const Closet = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }}>
    <ScrollView>
    {/* TODO */}
    <Image source={logo} style={styles.closetImage}/>
    <Image source={logo} style={styles.closetImage}/>
    <Image source={logo} style={styles.closetImage}/>
    <Image source={logo} style={styles.closetImage}/>
    <Image source={logo} style={styles.closetImage}/>
    <Image source={logo} style={styles.closetImage}/>
    <Image source={logo} style={styles.closetImage}/>
    </ScrollView>
  </View>
);

const renderScene = SceneMap({
  first: Main,
  second: Closet,
});

export default function App() {
  const [userInfo, setUserInfo] =  React.useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: '10784791395-fsu37876k7chvibjr6rqkm3n2t7fahkc.apps.googleusercontent.com',
    androidClientId:'10784791395-7lk4jsdpgm1isg8qu88vj9fmfcdkpc12.apps.googleusercontent.com',
    webClientId: '10784791395-b2djj04t3afo4g8l5amqg9cvv7m10j2g.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    // TODO
    if (response?.type == 'success') {
      console.log(response.url);

      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
    if (response?.type == 'error') {
      console.log(response.url);
      console.log(response.type);
    }
  }, [response])

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Main' },
    { key: 'second', title: 'Closet' },
  ]);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async(user) => {
      if (user) {
        console.log(JSON.stringify(user, null, 2));
        setUserInfo(user);
      } else {
        console.log('Not authenticated');
      }
    });

    return () => unsubscribe();
  }, [])

  // Entry 
  return userInfo ? <TabView
  navigationState={{ index, routes }}
  renderScene={renderScene}
  onIndexChange={setIndex}
  initialLayout={{ width: layout.width }}
/> : <SignInScreen promptAsync={promptAsync}/>;

  return <SignInScreen promptAsync={promptAsync}/>

  if (13 == 13) {
    return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    )
  }

  return (
    
    <View style={styles.container}>
      <Text style={styles.appTitle}>FitPick</Text>
      

      <View style={styles.tabs}>

      <Button
        title="Main"
        color="yellow"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        title="Closet"
        color="yellow"
        accessibilityLabel="Learn more about this purple button"
      />

      </View>
      
      <Image source={logo}/>

      <PickedOutfitCard imageUrl={logo} />
      <Button
        title="Upload"
        color="yellow"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    color: 'yellow',
    fontSize: 40,
    fontWeight: 500,
  },
  tabs: {
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    maxHeight: 50,
  },
  closetImage: {
    width: '98.13vw',
    height: 250,
    borderRadius: 13,
    margin: 10,
    borderColor: 'black',
    borderWidth: 0.813,
  }
});
