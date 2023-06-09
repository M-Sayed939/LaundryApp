import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity, Alert, ScrollView} from 'react-native';
import {
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import {auth, db} from "../firebase/firebase";
import TextDivider from "../components/TextDivider";
import CustomInputFiled from "../components/CustomInputField";
import CustomButton from "../components/CustomButton";
import {doc, setDoc} from "firebase/firestore";

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const provider = new GoogleAuthProvider();
    const emailRegex = /^\S+@\S+\.\S+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    const handleLogin = () => {
        if (!emailRegex.test(email)) {
            Alert.alert('Invalid email');
            return;
        }

        if (!passwordRegex.test(password)) {
            Alert.alert('Invalid password');
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                const email = user.user.email;
                const phone = user.user.phoneNumber;
                const userRef = doc(db, 'users', user.user.idToken);

                setDoc(userRef, {
                    email: email,
                    phone: phone
                }).then(r => {
                    console.log('done')
                }).catch((err) => {
                    console.log(err.message)
                })

                navigation.navigate('HomeScreen');
            })
            .catch((error) => {
                console.log(error.message)
            });
    };

    const handleResetPassword = () => {
        navigation.navigate("ForgetScreen");
    };

    const onPressSignUp = () => {
        navigation.navigate("RegisterScreen");
    };

    const handleLoginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                // handle success
                const userRef = doc(db, 'users', token);

                setDoc(userRef, {
                    email: user.email,
                    phone: user.phoneNumber
                }).then(r => {
                    console.log('done')
                }).catch((err) => {
                    console.log(err.message)
                })
                navigation.navigate('HomeScreen');
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
        <ScrollView style={[StyleSheet.absoluteFill]}>
            <View style={styles.container}>

                <Image source={require('../../assets/logo.png')} style={styles.logo}/>

                <Text style={styles.title}>Welcome Back!</Text>

                <CustomInputFiled
                    style={[styles.input, {marginBottom: 20,}]}
                    placeHolder="Email"
                    value={email}
                    setValue={(text) => setEmail(text)}
                    isPassword={false}/>

                <CustomInputFiled
                    style={[styles.input, {marginBottom: 20,}]}
                    placeHolder="Password"
                    value={password}
                    setValue={(text) => setPassword(text)}
                    isPassword={true}/>


                <CustomButton text="Login" handleClick={handleLogin}/>

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
                </TouchableOpacity>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 20
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
        </ScrollView>
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
        marginTop: 35,
        marginBottom: 20,
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
        marginTop: 16,
        fontSize: 12,
        lineHeight: 18,
        color: 'rgba(0, 0, 0, 0.6)',
        flex: 0,
        flexGrow: 0
    },
});

export default LoginScreen;
