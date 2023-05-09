import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import DatePicker from 'react-native-datepicker';
import CustomInputFiled from "../components/CustomInputFiled";
import {firestore} from '../firebase';
import firebase from "firebase/compat";

const ProfileScreen = () => {
    const [name, setName] = useState('XXXxx');
    const [email, setEmail] = useState('xxxxxx@xxx.com');
    const [phoneNumber, setPhoneNumber] = useState('000000000');
    const [birthdate, setBirthdate] = useState('01/01/2000');
    const [editable, setEditable] = useState(false);

    const handleEditPress = () => {
        setEditable(true);
    };

    const handleSavePress = async () => {
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

    const handleSignOutPress = () => {
        // Implement sign out functionality here
    };

    const validateBirthdate = () => {
        const dob = new Date(birthdate);
        const eighteenYearsAgo = new Date();
        eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
        return dob <= eighteenYearsAgo;
    };

    return (
        <View style={[styles.container, StyleSheet.absoluteFill]}>
                <Text style={[styles.profileHeaderText , styles.alignLeft] }>Profile</Text>
                <Text style={[styles.hintText , styles.alignLeft] }>Name:</Text>
                <CustomInputFiled
                    value={name}
                    onChangeText={setName}
                    editable={editable}
                    style={styles.inputField}
                />
                <Text style={[styles.hintText , styles.alignLeft] }>Email:</Text>
                <CustomInputFiled
                    value={email}
                    onChangeText={setEmail}
                    editable={editable}
                    style={styles.inputField}
                />
                <Text style={[styles.hintText , styles.alignLeft] }>Phone Number:</Text>
                <CustomInputFiled
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    editable={editable}
                    style={styles.inputField}
                />
                <Text style={[styles.hintText , styles.alignLeft] }>Birthdate:</Text>
                {editable ? (
                    <DatePicker
                        date={birthdate}
                        onDateChange={setBirthdate}
                        mode="date"
                        placeholder="Select date"
                        format="MM/DD/YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        style={styles.pickerStyle}
                    />
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
});

export default ProfileScreen;

