import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import RandomIndex from './components/RandomIndex';
import PickedOutfitCard from './components/PickedOutfitCard';
import { SceneMap } from 'react-native-tab-view';
import { useWindowDimensions } from 'react-native';
import React from 'react';
import { TabView } from 'react-native-tab-view';
import Navbar from './components/Navbar';

const logo = require('./favicon.webp');
const defaultOutfitUri = 'https://stylecaster.com/wp-content/uploads/2020/10/fall-outfit-inspo-pants-.jpeg?w=495';

const FirstRoute = () => (
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

const SecondRoute = () => (
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
  first: FirstRoute,
  second: SecondRoute,
});

export default function App() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

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
