import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const styles = StyleSheet.create({
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
    }
});


const CustomInputFiled = ({
                              value,
                              setValue,
                              placeHolder,
                              isPassword,
                              placeholderTextColor = "#9b9b9b",
                              style
                          }) => {
    return (
        <TextInput
            style={[styles.input, style]}
            placeholder={placeHolder}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={isPassword}
            onChangeText={(text) => setValue(text)}
            value={value}
        />
    )
};

export default CustomInputFiled;