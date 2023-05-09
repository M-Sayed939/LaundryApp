import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, Alert} from 'react-native';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase/firebase";
import CustomInputField from "./components/CustomInputField";
import CustomButton from "./components/CustomButton";

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handelSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user)
                navigation.navigate('HomeScreen')
            })
            .catch((error) => {
                console.log(error.message)
            });
    };

    return (
        <View style={[styles.container, StyleSheet.absoluteFill]}>
            <Image source={require('../../assets/logo.png')} style={styles.logo}/>
            <Text style={styles.title}>New Account</Text>

            <CustomInputField isPassword={false} placeHolder="Name" value={name}
                              setValue={(text) => setName(text)}/>

            <CustomInputField style={{marginTop: 20,}} isPassword={false} placeHolder="Email" value={email}
                              setValue={(text) => setEmail(text)}/>

            <CustomInputField style={{marginTop: 20,}} isPassword={true} placeHolder="Password" value={password}
                              setValue={(text) => setPassword(text)}/>

            <CustomButton text="Register" handleClick={handelSignUp}/>

            <View style={{
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Text style={[styles.hintText, {marginTop: 30}]}>
                    By registering you agree to
                </Text>
                <Text style={[styles.textClick, {marginStart: 5}]}>
                    our Terms of Use and Privacy Policy
                </Text>
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
        marginVertical: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 30,
        color: 'rgba(18,18,18,0.6)',
        fontFamily: 'Roboto',
    },
    hintText: {
        color: 'rgba(18,18,18,0.6)',
        fontWeight: 600,
        fontSize: 12,
        marginTop: 16,
        alignSelf: 'center',
        fontFamily: 'Roboto',
    },
    textClick: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '800',
        marginTop: 10,
        fontSize: 12,
        lineHeight: 18,
        color: 'rgba(0, 0, 0, 0.6)',
        flex: 0,
        flexGrow: 0
    },
});

export default RegisterScreen;
