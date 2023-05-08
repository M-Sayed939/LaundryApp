import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Image, Text, TouchableOpacity} from 'react-native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={[styles.container, StyleSheet.absoluteFill]}>
            <Image source={require('../../assets/logo.png')} style={styles.logo}/>
            <Text style={styles.title}>Welcome Back!</Text>
            <TextInput
                style={styles.input}
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
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Button English</Text>
            </TouchableOpacity>
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
        width: 100,
        height: 100,
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
        marginBottom: 20,
        fontSize: 16,
        fontFamily: 'Roboto',
        color: 'rgba(0,0,0,0.6)',
    },
    forgotPassword: {
        color: 'rgba(18,18,18,0.6)',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 12,
        lineHeight: 18,
        textAlign: 'right',
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
        fontWeight: 'bold',
    },
});

export default LoginScreen;
