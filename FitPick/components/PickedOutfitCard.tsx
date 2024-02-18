import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { FetchCloset } from './FetchCloset';

// TODO
const PickedOutfitCard = ({ imageUrl, local }) => {
    if (local) {
        return (
        <View style={styles.container}>
            <Image
            source={ imageUrl }
            style={styles.image}
            resizeMode="cover"
            onError={() => console.log('Error loading image')}
            />
        </View>
        );
    }
    return (
        <View style={styles.container}>
            <Image
            source={ { uri : imageUrl } }
            style={styles.image}
            resizeMode="cover"
            onError={() => console.log('Error loading image')}
            />
        </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden', // Ensure image doesn't overflow its container
    elevation: 3, // Shadow on Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    backgroundColor: 'grey',
    width: 350,
    height: 400,
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    borderRadius: 10,
  },
});

export default PickedOutfitCard;
