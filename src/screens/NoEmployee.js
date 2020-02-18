import React from 'react';
import {View,
    StyleSheet
} from 'react-native';
import {Button} from '../common/Button';

export const NoEmployee = (props) => {
    console.log("navigateToAddEmpForm...");
    navigateToAddEmpForm = () => {
        //TODO navigation to form
        console.log("navigateToAddEmpForm");
        props.navigation.navigate('AddEmpForm')
    };

    return(
        <View style = {styles.container}>
            <View style = {styles.addEmpBtnView}>
                <Button btnName = 'ADD EMPLOYEE' btnHandler = {navigateToAddEmpForm} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#32CD32',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addEmpBtnView: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        marginVertical: 20
    }
});