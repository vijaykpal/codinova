import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';

export const Button = (props) => {
    let {btnName, btnHandler, isLoading = false} = props;
    return(
        <View style = {styles.container}>
            <TouchableOpacity onPress = {() => btnHandler()} style = {styles.addBtn}>
                {
                isLoading ? <ActivityIndicator size = 'large' color = '#fff' /> : 
                <Text style = {styles.addEmpBtnText}>{btnName}</Text>
                }
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        height: 50,
        width: '80%',
        backgroundColor: '#228B22',
        borderRadius: 3
    },
    addBtn:{
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addEmpBtnText:{
        color: '#fff',
        fontSize: 25
    }
});