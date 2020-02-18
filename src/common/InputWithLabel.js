import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export const InputWithLabel = (props) => {
    let {label, onChangeHandler} = props;
    return(
        <View style = {styles.inputBox}>
            <Text>{label}</Text>
            <TextInput 
                onChange = {text => onChangeHandler(text)}
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