import React, {Component} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {Header, Icon, Card, Avatar} from 'react-native-elements';
import {employeeArr} from '../dummayData';

class EmployeeList extends Component{
    render(){
        return (
            <View style = {{height: '100%', marginBottom: -10}}>
                <Header
                placement="left"
                leftComponent={<Icon type='Octicons' name='three-bars' color='#000' />}
                centerComponent={{ text: 'Inbox', style: { color: '#000', fontSize: 26} }}
                rightComponent={<Icon type='Entypo' name='dots-three-vertical' color='#000' />}
                backgroundColor= {'green'}
                />

                <FlatList data = {employeeArr} 
                    keyExtractor = {item => item.empID}
                    renderItem = {(item) => {
                        let {item: {fName, lName, title}} = item;
                        return(
                            <Card containerStyle={{padding: 0, height: 80, borderRadius: 3}}>
                                <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '100%', marginHorizontal: 10}}>
                                    <View style = {{flexDirection: 'row', justifyContent: 'flex-start'}}>
                                        <Avatar rounded title="MD" />
                                        <View style={{marginLeft: 20}}>
                                        <Text>{fName} {lName}</Text>
                                        <Text>{title}</Text>
                                        </View>
                                    </View>
                                    <Icon type='Entypo' name='star' color='yellow' />
                                </View>
                            </Card>
                        )
                    }}
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