import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert,
    Dimensions,
    Image,
    ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import auth from '../firebase';
import { useState} from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import {auth} from "../firebase/firebase";


const ForgetScreen = () => {
    const navigation = useNavigation();
    const [Email,setEmail] = useState('');


    const onSendEmailPressed = () =>{
        sendPasswordResetEmail(auth, Email)
            .then(() => {
                console.warn('Email Sent');

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.warn('INVALID E-MAIL');

            });
    };

    const onSignInPress = () =>{
        console.warn('Forgot Password');
        navigation.navigate('LoginScreen');

    };





    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image source={Logo} style={styles.logo} resizeMode="contain" />
                <Text style={styles.titleText}>ForgotPassword?</Text>
                <Text style={styles.Text}>Enter your email below and open it to read how to reset your password</Text>
                <CustomInput placeholder="Enter your Email" value={Email} setValue={setEmail}/>
                <CustomButton text="Send" onPress={onSendEmailPressed} />
                <CustomButton text="Back To Sign In " onPress={onSignInPress}  type="TERTIARY"/>


            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems:'center',
        padding:30,
        backgroundColor:'#F9FBFC',
    },
    logo: {
        width:'70%',
        maxWidth:300,
        maxHeight:200,
        margin: 20,
    },
    titleText:{
        fontWeight:'bold',
        paddingBottom:30,
        paddingRight:25,
        fontSize:20,
        color:'black',
    },
    Text:{
        paddingRight:25,
        letterSpacing:1,
        lineHeight:20,
        paddingBottom:20,
    },
});

export default ForgetScreen;
