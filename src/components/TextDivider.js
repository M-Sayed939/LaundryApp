import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#CCCCCC',
    },
    text: {
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

const TextDivider = ({ children }) => (
    <View style={styles.container}>
        <View style={styles.line} />
        <Text style={styles.text}>{children}</Text>
        <View style={styles.line} />
    </View>
);

export default TextDivider;
