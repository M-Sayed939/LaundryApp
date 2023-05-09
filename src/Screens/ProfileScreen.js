import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput, Alert} from 'react-native';
// import DatePicker from 'react-native-datepicker';
import CustomInputFiled from "../components/CustomInputFiled";
// import firebase from "firebase/compat";
// import {firestore} from '../firebase';
import {Share as DatePickerAndroid} from "react-native-web/src";
const ProfileScreen = () => {
    const [name, setName] = useState('XXXxx');
    const [email, setEmail] = useState('xxxxxx@xxx.com');
    const [phoneNumber, setPhoneNumber] = useState('000000000');
    const [birthdate, setBirthdate] = useState('01/01/2000');
    const [editable, setEditable] = useState(false);

    const handleEditPress = () => {
        setEditable(true);
    };
    // useEffect(() => {
    //     const userId = firebase.auth().currentUser.uid;
    //     firebase.firestore().collection('users').doc(userId).get()
    //         .then((doc) => {
    //             if (doc.exists) {
    //                 const userData = doc.data();
    //                 setName(userData.name);
    //                 setEmail(userData.email);
    //                 setPhoneNumber(userData.phoneNumber);
    //                 setBirthDate(userData.birthDate.toDate());
    //             } else {
    //                 console.log('No such document!');
    //             }
    //         })
    //         .catch((error) => {
    //             console.log('Error getting document:', error);
    //         });
    // }, []);
    const showDatePicker = async () => {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
                date: birthDate,
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                const selectedDate = new Date(year, month, day);
                setBirthDate(selectedDate);
            }
        } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }
    };

    // const handleSavePress = async () => {
    //     if (validateBirthdate()) {
    //         setEditable(false);
    //         try {
    //             const userRef = firestore.collection('users').doc(firebase.auth.currentUser.uid);
    //             await userRef.set({
    //                 name, email,phoneNumber,birthdate,
    //             });
    //             console.log('Profile Updated Successfully <3');
    //         } catch (error) {
    //             console.error('Error in updating!! :',error);
    //         }
    //     } else {
    //         alert('You must be at least 18 years old to use this app.');
    //     }
    // };
    const handleSavePress = async () => {
                validateAge() ? saveProfile : () => Alert.alert('Age should be 18 or above.')
        if (validateBirthdate()) {
            setEditable(false);
            try {
                const userRef = firestore.collection('users').doc(firebase.auth.currentUser.uid);
                await userRef.set({
                    name, email,phoneNumber,birthdate,
                });
                console.log('Profile Updated Successfully <3');
            } catch (error) {
                console.error('Error in updating!! :',error);
            }
        } else {
            alert('You must be at least 18 years old to use this app.');
        }
    };
    // const saveProfile = () => {
    //     const userId = firebase.auth().currentUser.uid;
    //     const userRef = firebase.firestore().collection('users').doc(userId);
    //     userRef.update({
    //         name: name,
    //         email: email,
    //         phoneNumber: phoneNumber,
    //         birthDate: firebase.firestore.Timestamp.fromDate(birthDate),
    //     })
    //         .then(() => {
    //             Alert.alert('Profile updated successfully!');
    //         })
    //         .catch((error) => {
    //             console.error('Error updating profile:', error);
    //         });
    // };

    const handleSignOutPress = () => {
        firebase.auth().signOut()
            .then(() => {
                console.log('User signed out');
            })
            .catch((error) => {
                console.error('Error signing out:', error);
            });    };
// const handleSignOutPress = () => {
        // firebase.auth().signOut()
        //     .then(() => {
        //         console.log('User signed out');
        //     })
        //     .catch((error) => {
        //         console.error('Error signing out:', error);
        //     });
        // };

    const validateAge = () => {
        const today = new Date();
        const birthDateCopy = new Date(birthDate);
        let age = today.getFullYear() - birthDateCopy.getFullYear();
        const month = today.getMonth() - birthDateCopy.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDateCopy.getDate())) {
            age--;
        }
        return age >= 18;
    };

    return (
        <View style={[styles.container, StyleSheet.absoluteFill]}>
                <Text style={[styles.profileHeaderText , styles.alignLeft] }>Profile</Text>
                <Text style={[styles.hintText , styles.alignLeft] }>Name:</Text>
                <CustomInputFiled
                    value={name}
                    // onChangeText={setName}
                    editable={editable}
                    style={styles.inputField}
                    setValue={(text) => setName(text)}
                />
                <Text style={[styles.hintText , styles.alignLeft] }>Email:</Text>
                <CustomInputFiled
                    value={email}
                    // onChangeText={setEmail}
                    editable={editable}
                    style={styles.inputField}
                    setValue={(text) => setEmail(text)}
                />
                <Text style={[styles.hintText , styles.alignLeft] }>Phone Number:</Text>
                <CustomInputFiled
                    value={phoneNumber}
                    // onChangeText={setPhoneNumber}
                    editable={editable}
                    style={styles.inputField}
                    setValue={(text) => setPhoneNumber(text)}
                    keyboardType={"phone-pad"}
                />
                <Text style={[styles.hintText , styles.alignLeft] }>Birthdate:</Text>
                {editable ? (

                    <CustomInputFiled style={{borderWidth: 1, borderColor: 'gray', padding: 8, marginBottom: 8}} onPress={showDatePicker}/>
                ) : (
                    <Text style={styles.pickerStyle}>{birthdate}</Text>
                )}
            <View style={styles.buttonContainer}>
                {editable ? (
                    <TouchableOpacity
                        onPress={handleSavePress}
                        style={styles.saveButton}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        onPress={handleEditPress}
                        style={styles.editButton}>
                        <Text style={styles.buttonText}>Edit</Text>
                    </TouchableOpacity>
                )}
                <TouchableOpacity
                    onPress={handleSignOutPress}
                    style={styles.signOutButton}>
                    <Text style={styles.buttonText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white",
        paddingHorizontal:16,
    },
    profileHeaderText: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 30,
        color: 'rgba(18,18,18,0.8)',
        fontFamily: 'Roboto',
    },
    fieldsContainer: {
        marginTop: 30,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    saveButton: {
        width:"50%",
        marginVertical: 10,
        textAlign:"center",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 100,
        backgroundColor: '#4caf50',
        marginHorizontal:10,

    },
    editButton: {
        width:"50%",
        marginVertical: 10,
        textAlign:"center",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 100,
        backgroundColor: '#2196f3',
        marginHorizontal:10,

    },
    signOutButton: {
        width:"50%",
        marginVertical: 10,
        textAlign:"center",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 100,
        backgroundColor: '#f44336',

    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign:"center",
    },
    alignLeft:{
        alignSelf:'flex-start',
    },
    hintText: {
        color: 'rgba(18,18,18,0.6)',
        fontWeight: 600,
        fontSize: 12,
        marginTop: 16,
        alignSelf: 'center',
        fontFamily: 'Roboto',
        marginStart:16,
    },
    pickerStyle: {
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
    inputField: {
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        padding: 5,
    },
});

export default ProfileScreen;



// import React, {useState, useEffect} from 'react';
// import { View, Text, TextInput, Button, TouchableOpacity, Alert, DatePickerAndroid } from 'react-native';
// // import firebase from 'firebase';
//
// const ProfileScreen = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [birthDate, setBirthDate] = useState(new Date());
//
//     // useEffect(() => {
//     //     const userId = firebase.auth().currentUser.uid;
//     //     firebase.firestore().collection('users').doc(userId).get()
//     //         .then((doc) => {
//     //             if (doc.exists) {
//     //                 const userData = doc.data();
//     //                 setName(userData.name);
//     //                 setEmail(userData.email);
//     //                 setPhoneNumber(userData.phoneNumber);
//     //                 setBirthDate(userData.birthDate.toDate());
//     //             } else {
//     //                 console.log('No such document!');
//     //             }
//     //         })
//     //         .catch((error) => {
//     //             console.log('Error getting document:', error);
//     //         });
//     // }, []);
//
//     const showDatePicker = async () => {
//         try {
//             const {action, year, month, day} = await DatePickerAndroid.open({
//                 date: birthDate,
//             });
//             if (action !== DatePickerAndroid.dismissedAction) {
//                 const selectedDate = new Date(year, month, day);
//                 setBirthDate(selectedDate);
//             }
//         } catch ({code, message}) {
//             console.warn('Cannot open date picker', message);
//         }
//     };
//
//     const saveProfile = () => {
//         // const userId = firebase.auth().currentUser.uid;
//         // const userRef = firebase.firestore().collection('users').doc(userId);
//         // userRef.update({
//         //     name: name,
//         //     email: email,
//         //     phoneNumber: phoneNumber,
//         //     birthDate: firebase.firestore.Timestamp.fromDate(birthDate),
//         // })
//         //     .then(() => {
//         //         Alert.alert('Profile updated successfully!');
//         //     })
//         //     .catch((error) => {
//         //         console.error('Error updating profile:', error);
//         //     });
//     };
//
//     const signOut = () => {
//         // firebase.auth().signOut()
//         //     .then(() => {
//         //         console.log('User signed out');
//         //     })
//         //     .catch((error) => {
//         //         console.error('Error signing out:', error);
//         //     });
//     };
//
//     const validateAge = () => {
//         const today = new Date();
//         const birthDateCopy = new Date(birthDate);
//         let age = today.getFullYear() - birthDateCopy.getFullYear();
//         const month = today.getMonth() - birthDateCopy.getMonth();
//         if (month < 0 || (month === 0 && today.getDate() < birthDateCopy.getDate())) {
//             age--;
//         }
//         return age >= 18;
//     };
//
//     return (
//         <View style={{flex: 1, padding: 16}}>
//             <Text style={{fontSize: 24, fontWeight: 'bold'}}>Profile</Text>
//             <View style={{marginTop: 16}}>
//                 <Text>Name:</Text>
//                 <TextInput style={{borderWidth: 1, borderColor: 'gray', padding: 8, marginBottom: 8}} value={name} onChangeText={(text) => setName(text)} />
//                 <Text>Email:</Text>
//                 <TextInput style={{borderWidth: 1, borderColor: 'gray', padding: 8, marginBottom: 8}} value={email} onChangeText={(text) => setEmail(text)} />
//                 <Text>Phone Number:</Text>
//                 <TextInput style={{borderWidth: 1, borderColor: 'gray', padding: 8, marginBottom: 8}} value={phoneNumber} onChangeText={(text) => setPhoneNumber(text
//                 )} keyboardType="phone-pad" />
//                 <Text>Birth Date:</Text>
//                 <TouchableOpacity style={{borderWidth: 1, borderColor: 'gray', padding: 8, marginBottom: 8}} onPress={showDatePicker}>
//                     <Text>{birthDate.toDateString()}</Text>
//                 </TouchableOpacity>
//                 <Button title="Edit/Save" onPress={validateAge() ? saveProfile : () => Alert.alert('Age should be 18 or above.')} />
//             </View>
//             <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 16}}>
//                 <Button title="Sign Out" onPress={signOut} />
//             </View>
//         </View>
//     );
// };
