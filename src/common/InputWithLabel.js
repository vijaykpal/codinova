import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export const InputWithLabel = (props) => {
    let {label, field, onChangeHandler, keyboardType} = props;
    return(
        <View style = {styles.inputBox}>
            <Text>{label}</Text>
            <TextInput 
                autoCapitalize = 'words'
                onChangeText = {(text) => onChangeHandler(text, field)}
                keyboardType =  {keyboardType ? keyboardType : 'default'}
                style = {styles.inputField} />
        </View>
    )
};

const styles = StyleSheet.create({
    inputBox: {
        marginHorizontal: '15%',
        marginVertical: 20
    },
    inputField: {
        borderBottomWidth: 2,
        borderBottomColor: 'green'
    }
})