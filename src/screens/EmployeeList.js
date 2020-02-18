import React, {Component} from 'react';
import {View, FlatList, Text, StyleSheet, AsyncStorage} from 'react-native';
import {Header, Icon, Card, Avatar, Button} from 'react-native-elements';

class EmployeeList extends Component{

    constructor(props){
        super(props);
        this.state = {
            employeeList: []
        }
    }

    componentDidMount(){
        const { navigation } = this.props,
        empArr = navigation.getParam('empArr');
        this.setState({employeeList: empArr})
    }

    clearStorage = async () => {
        await AsyncStorage.setItem('employeeList', '');
    };

    render(){
        let {employeeList} = this.state;
        return (
            <View style = {{height: '100%', marginBottom: -10}}>
                <Header
                placement="left"
                leftComponent={<Icon type='Octicons' name='three-bars' color='#000' />}
                centerComponent={{ text: 'Inbox', style: { color: '#000', fontSize: 26} }}
                rightComponent={<Icon type='Entypo' name='dots-three-vertical' color='#000' />}
                backgroundColor= {'green'}
                />

                <FlatList data = {employeeList} 
                    renderItem = {(item) => {
                        let {item:{fName, lName, jobTitle}} = item;
                        return(
                            <Card containerStyle={{padding: 0, height: 80, borderRadius: 3}}>
                                <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '100%', marginHorizontal: 10}}>
                                    <View style = {{flexDirection: 'row', justifyContent: 'flex-start'}}>
                                        <Avatar rounded title="MD" />
                                        <View style={{marginLeft: 20}}>
                                        <Text>{fName} {lName}</Text>
                                        <Text>{jobTitle}</Text>
                                        </View>
                                    </View>
                                    <Icon type='Entypo' name='star' color='yellow' />
                                </View>
                            </Card>
                        )
                    }}
                />
                <Button
                title="Clear Async Storage"
                onPress = {() => this.clearStorage()}
                />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container:{
        
    }
})

export default EmployeeList;