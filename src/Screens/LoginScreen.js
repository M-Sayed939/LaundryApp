import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Image, Text, TouchableOpacity, Alert} from 'react-native';
import {
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import {auth} from "../firebase/firebase";
import TextDivider from "./components/TextDivider";


const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const provider = new GoogleAuthProvider();

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user)
                navigation.navigate('HomeScreen')
            })
            .catch((error) => {
                console.log(error.message)
            });
    };

    const handleResetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                Alert.alert('Password reset email sent successfully')
            })
            .catch((error) => {
                console.log('Password reset email could not be sent:', error);
            });
    };

    const onPressSignUp = () => {
        navigation.navigate("Register");
    };

    const handleLoginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                // handle success
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                Alert.alert(errorMessage);
                // handle error
            });
    };

    return (
        <View style={[styles.container, StyleSheet.absoluteFill]}>
            <Image source={require('../../assets/logo.png')} style={styles.logo}/>

            <Text style={styles.title}>Welcome Back!</Text>

            <TextInput
                style={[styles.input, {
                    marginBottom: 20,
                }]}
                placeholder="Email"
                placeholderTextColor="#9b9b9b"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#9b9b9b"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}
            />

            <TouchableOpacity style={[styles.button, {
                marginTop: 20,
            }]} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleResetPassword}>
                <Text style={styles.hintText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TextDivider>
                <Text style={styles.hintText}>OR</Text>
            </TextDivider>

            <TouchableOpacity onPress={handleLoginWithGoogle}>
                <Image source={require('../../assets/icon_gmail.png')} style={{
                    width: 44,
                    marginTop: 20,
                    alignSelf: 'center'
                }}/>
                <Text style={[styles.buttonText, {marginLeft: 8}]}>Sign in with Gmail</Text>
            </TouchableOpacity>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Text style={[styles.hintText]}>
                    Don't have an account?
                </Text>
                <TouchableOpacity onPress={onPressSignUp}>
                    <Text style={[styles.textClick, {marginStart: 5}]}>
                        Create a new account
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
    },
    logo: {
        width: 150,
        height: 150,
        marginTop:10,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 30,
        color: 'rgba(18,18,18,0.6)',
        fontFamily: 'Roboto',
    },
    input: {
        width: '100%',
        height: 56,
        borderColor: 'rgba(0,0,0,0.08)',
        borderWidth: 2,
        borderRadius: 28,
        paddingHorizontal: 16,
        fontSize: 16,
        fontFamily: 'Roboto',
        color: 'rgba(0,0,0,0.6)',
    },
    hintText: {
        color: 'rgba(18,18,18,0.6)',
        fontWeight: 600,
        fontSize: 12,
        marginTop: 16,
        alignSelf: 'center',
        fontFamily: 'Roboto',
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        paddingHorizontal: 24,
        gap: 8,
        width: '100%',
        height: 56,
        backgroundColor: '#46CDD2',
        borderRadius: 100,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '400',
    },
    textClick: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '800',
        marginTop: 16,
        fontSize: 12,
        lineHeight: 18,
        color: 'rgba(0, 0, 0, 0.6)',
        flex: 0,
        flexGrow: 0
    },
});

export default LoginScreen;
