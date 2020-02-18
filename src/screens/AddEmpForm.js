import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {InputWithLabel} from '../common/InputWithLabel';
import {Button} from '../common/Button';

class AddEmpForm extends Component{
    
    onChangeText = (text) => {
        //Todo handle text change
        console.log("onChangeText : ", text);
    };

    onSave = () => {
        //TODO save action
        console.log("onSave : ");
        this.props.navigation.navigate('EmployeeList');
    };

    render(){
        return(
            <View style = {styles.container}>
                <View style = {{flexDirection: 'row', justifyContent: 'center', marginVertical: 30}}>
                    <Text style = {styles.heading}>
                        Enter Employee Details
                    </Text>
                </View>

                <View style = {{marginVertical: 20}}>
                    <InputWithLabel label = {'First Name'} onChangeHandler = {this.onChangeText}/>
                    <InputWithLabel label = {'Last Name'} onChangeHandler = {this.onChangeText}/>
                    <InputWithLabel label = {'Job Title'} onChangeHandler = {this.onChangeText}/>
                    <InputWithLabel label = {'Salary'} onChangeHandler = {this.onChangeText}/>
                </View>
                
                <View style = {{flexDirection: 'row', justifyContent: 'center', marginVertical: 20}}>
                    <Button btnName = 'Save' btnHandler = {this.onSave} />
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    heading:{
        color: 'green',
        fontSize: 25,
        fontWeight: '900',
    },
    inputBox: {
        marginHorizontal: '15%'
    },
    inputField: {
        borderBottomWidth: 2,
        borderBottomColor: 'green'
    }
})

export default AddEmpForm;