import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, AsyncStorage} from 'react-native';
import {InputWithLabel} from '../common/InputWithLabel';
import {Button} from '../common/Button';
import {getInitials, checkRequiredFields} from '../utils';
const uuidv4 = require('uuid/v4');

class AddEmpForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            fName: '',
            lName: '',
            jobTitle: '',
            salary: '',
            isEmpty: false,
            saving: false
        }
    }
    
    onChangeText = (text, field) => {
        this.setState({[field]: text, isEmpty: false})
    };

    onSave = async () => {
        let {fName, lName, jobTitle, salary} = this.state,
        isEmpty = checkRequiredFields(fName, lName, jobTitle, salary);
        if(!isEmpty){
            this.setState({saving: true})
            let initial = getInitials(fName, lName);
            empList = [],
            empObj = {
                fName: fName,
                lName: lName, 
                jobTitle: jobTitle,
                salary: salary,
                initial: initial,
                isFav: false,
                empID: uuidv4()
            },
            employees = await AsyncStorage.getItem('employeeList')
            empList = employees ? JSON.parse(employees) : [];
            empList.push(empObj);
            await AsyncStorage.setItem('employeeList', JSON.stringify(empList));
            this.setState({isEmpty: false})
            this.props.navigation.replace('EmployeeList', {empArr: empList});
        }
        else{
            this.setState({isEmpty: true})
        }

    };

    render(){
        let {isEmpty, saving} = this.state;
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

                    {isEmpty ? <Text style = {{color: 'red',marginLeft: 60}}>Please fill all the details..!!</Text> : null}
                </View>
                
                <View style = {{flexDirection: 'row', justifyContent: 'center', marginVertical: 20}}>
                    <Button btnName = 'Save' btnHandler = {this.onSave} isLoading = {saving} />
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