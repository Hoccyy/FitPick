import { StyleSheet, Text, View, Image, Button, ScrollView, TouchableOpacity } from 'react-native';


const googleIcon = require('./public/google.jpeg');

export default function SignInScreen({ promptAsync }) {
    return (
        <View style={styles.signInBackground}>
            <Text style={styles.header}>Sign in with Google</Text>
            <Image source={googleIcon} style={styles.googleLogo}/>

            <Button
                title='Login'
                onPress={() => promptAsync()}
                styles={styles.loginButton}

            />

            <Button
                title='Sign up'
                onPress={() => promptAsync()}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    signInBackground: {
        backgroundColor: 'black',
        height: '100%',
        width: '100%',
    },
    header: {
        color: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '100v%',
        marginTop: 80,
        fontSize: 30
    },
    googleLogo: {
        alignItems: 'center',
        height: 190,
        width: '100%'
    },
});
