import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, AsyncStorage} from 'react-native';
import {InputWithLabel} from '../common/InputWithLabel';
import {Button} from '../common/Button';

class AddEmpForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            fName: '',
            lName: '',
            jobTitle: '',
            salary: ''
        }
    }
    
    onChangeText = (text, field) => {
        //Todo handle text change
        console.log("onChangeText : ", text, field);
        this.setState({[field]: text})
    };

    onSave = async () => {
        //TODO save action
        let {fName, lName, jobTitle, salary} = this.state,
        empList = [],
        empObj = {
            fName: fName,
            lName: lName, 
            jobTitle: jobTitle,
            salary: salary
        },
        employees = await AsyncStorage.getItem('employeeList')
        empList = employees ? JSON.parse(employees) : [];
        empList.push(empObj);
        await AsyncStorage.setItem('employeeList', JSON.stringify(empList));
        this.props.navigation.navigate('EmployeeList', {empArr: empList});
    };

    render(){
        return(
            <View style = {styles.container}>
                <View style = {{flexDirection: 'row', justifyContent: 'center', marginVertical: 30}}>
                    <Text style = {styles.heading}>
                        Enter Employee Details
                    </Text>
                </View>

                <ScrollView>
                <View style = {{marginVertical: 20}}>
                    <InputWithLabel 
                        label = {'First Name'} 
                        field = 'fName'
                        onChangeHandler = {this.onChangeText} />
                    <InputWithLabel 
                        label = {'Last Name'} 
                        field = 'lName'
                        onChangeHandler = {this.onChangeText} />
                    <InputWithLabel 
                        label = {'Job Title'}
                        field = 'jobTitle' 
                        onChangeHandler = {this.onChangeText} />
                    <InputWithLabel 
                        label = {'Salary'} 
                        field = 'salary'
                        onChangeHandler = {this.onChangeText} 
                        keyboardType = 'numeric' />
                </View>
                
                <View style = {{flexDirection: 'row', justifyContent: 'center', marginVertical: 20}}>
                    <Button btnName = 'Save' btnHandler = {this.onSave} />
                </View>
                </ScrollView>
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