import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    Dimensions,
    Image,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from "../firebase/firebase";
import CustomInputFiled from "../components/CustomInputField";

const ForgetScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');

    const handleEmailChange = (text) => {
        setEmail(text);
    }

    const handleSendEmailPressed = () => {
        if (email.trim().toLowerCase() === '') {
            Alert.alert('Error', 'Please enter your email.');
        } else if (!email.includes('@') || !email.endsWith('@example.com')) {
            Alert.alert('Error', 'Please enter a valid email address with @example.com domain.');
        } else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    Alert.alert('Success', 'An email has been sent to your inbox to reset your password.');
                    setEmail('');
                })
                .catch((error) => {
                    console.warn(error.message);
                    Alert.alert('Error', 'Failed to send email. Please try again later.');
                });
        }
    };

    const handleSignInPressed = () => {
        navigation.navigate('LoginScreen');
    };

    return (
        <SafeAreaView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.titleText}>Forgot Password?</Text>
                <Text style={styles.Text}>Enter your email below and open it to read how to reset your password</Text>
                <CustomInputFiled placeholder="Enter your Email" onChangeText={handleEmailChange} value={email} />
                <TouchableOpacity style={styles.button} onPress={handleSendEmailPressed}>
                    <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleSignInPressed}>
                    <Text style={styles.buttonText}>Back To Sign In</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#F9FBFC',
    },
    titleText: {
        fontWeight: 'bold',
        paddingBottom: 30,
        paddingRight: 25,
        fontSize: 20,
        color: 'black',
    },
    Text: {
        paddingRight: 25,
        letterSpacing: 1,
        lineHeight: 20,
        paddingBottom: 20,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default ForgetScreen;
