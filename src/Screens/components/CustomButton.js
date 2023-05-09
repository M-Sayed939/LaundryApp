import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
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
});


const CustomButton = ({handleClick, text}) => {
    return (
        <TouchableOpacity style={[styles.button, {
            marginTop: 20,
        }]} onPress={handleClick}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
};

export default CustomButton;