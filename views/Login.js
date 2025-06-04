import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Button,
    Alert,
} from 'react-native';
// import firebase from 'firebase/app';
// import 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
// import { AuthenticationToken, LoginManager } from 'react-native-fbsdk-next';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const navigation = useNavigation();

    useEffect(() => {
        // Facebook.initializeAsync({
        //     appId: 'TUO_FACEBOOK_APP_ID',
        // });
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const { isValid, errors } = validateCredentials(email, password);

        if (!isValid) {
            const errorMessages = Object.values(errors).join('\n');
            Alert.alert(errorMessages);
            return;
        }
        try {
            // const result = await Facebook.logInWithReadPermissionsAsync({
            //     permissions: ['public_profile', 'email'],
            // });

            // if (result.type === 'success') {
            //     const credential = firebase.auth.FacebookAuthProvider.credential(result.token);
            //     await firebase.auth().signInWithCredential(credential);
            setEmail(email.toLowerCase())
            axios.post('http://localhost:3000/api/users/login',
                { email, password })
                .then(res => {
                    navigation.replace('Home', res.data);
                })
                .catch(error => {
                    if (error.response.data && error.response.data.message)
                        Alert.alert(error.response.data.message)
                })
            // } else {
            //     Alert.alert('Login cancellato');
            // }
        } catch (error) {
            console.error(error);
            Alert.alert('Errore nel login con Facebook', error.message);
        }
    };

    function validateCredentials(email, password) {
        const errors = {};

        // Username validation
        if (!email || email.trim() === '') {
            errors.email = 'Email richiesta.';
        }
        // else if (username.length < 3) {
        //     errors.username = 'Username must be at least 3 characters long.';
        // }

        // Password validation
        if (!password || password.trim() === '') {
            errors.password = 'Password richiesta.';
        }
        // else if (password.length < 6) {
        //     errors.password = 'Password must be at least 6 characters long.';
        // }

        const isValid = Object.keys(errors).length === 0;

        return { isValid, errors };
    }

    async function onFacebookButtonPress() {
        // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

        if (result.isCancelled) {
            throw 'User cancelled the login process';
        }

        // Once signed in, get the users AccessToken
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
            throw 'Something went wrong obtaining access token';
        }

        // Create a Firebase credential with the AccessToken
        const facebookCredential = FacebookAuthProvider.credential(data.accessToken);

        // Sign-in the user with the credential
        return signInWithCredential(getAuth(), facebookCredential);
    }

    return (
        <ImageBackground
            source={require('../assets/background-home.png')}
            style={styles.background}
        >
            <View style={styles.headerContainer}>
                <Text style={styles.title}>LIBERI PER DAVVERO</Text>
                <Text style={styles.subtitle}>Accedi nella tua area personale</Text>
            </View>

            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                placeholderTextColor="#ccc"
                style={styles.input}
                autoCapitalize='none'
            />
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                placeholderTextColor="#ccc"
                secureTextEntry
                style={styles.input}
                autoCapitalize='none'
            />

            <TouchableOpacity onPress={() => { }}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Button
                title="Facebook Sign-In"
                onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}
            />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: 'white',
        marginTop: 10,
    },
    input: {
        backgroundColor: 'white',
        width: '80%',
        borderRadius: 20,
        padding: 15,
        marginBottom: 20,
    },
    forgotText: {
        color: 'white',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#1DA1F2',
        paddingVertical: 15,
        paddingHorizontal: 60,
        borderRadius: 25,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
