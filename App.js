import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogBox, StyleSheet } from 'react-native';
// import firebase from 'firebase/app';
// import 'firebase/auth';

import Login from "./views/Login";
import Home from './views/Home';
import SundayService from './views/SundayService';
import BibleSchool from './views/BibleSchool';
import Video from './views/Video';


LogBox.ignoreLogs(['Setting a timer']); // ignora alcuni warning noti

// // 🔧 Configura Firebase
// const firebaseConfig = {
//     apiKey: "TUO_API_KEY",
//     authDomain: "tuo-progetto.firebaseapp.com",
//     projectId: "tuo-progetto",
//     storageBucket: "tuo-progetto.appspot.com",
//     messagingSenderId: "1234567890",
//     appId: "1:1234567890:web:abc123",
// };

// // if (!firebase.apps.length) {
// //     firebase.initializeApp(firebaseConfig);
// // }

const Stack = createNativeStackNavigator();

export default function App() {


    return (
        <NavigationContainer
            style={styles.baseText}>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="SundayService" component={SundayService} />
                <Stack.Screen name="BibleSchool" component={BibleSchool} />
                <Stack.Screen name="Video" component={Video} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Nunito',
    },
})