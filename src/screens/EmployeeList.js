import React, {Component} from 'react';
import {View, FlatList, Text, AsyncStorage, Image, BackHandler} from 'react-native';
import {Header, Card, Avatar, Button} from 'react-native-elements';
import { DrawerActions } from 'react-navigation-drawer';
import {TouchableOpacity } from 'react-native-gesture-handler';
import {ICON} from '../common/Constant';
import {connect} from 'react-redux';
import {getFavCount} from '../utils';

class EmployeeList extends Component{

    constructor(props){
        super(props);
        this.state = {
            employeeList: []
        }
    }

    componentDidMount(){
        const { navigation } = this.props,
        empArr = navigation.getParam('empArr'),
        favCount = getFavCount(empArr);
        this.setState({employeeList: empArr});
        this.props.empListAction(empArr.length);
        this.props.favCountAction(favCount);
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

    }

    clearStorage = async () => {
        await AsyncStorage.setItem('employeeList', '');
    };

    openDrawer = () => {
        this.props.navigation.dispatch(DrawerActions.toggleDrawer());
    };

    openForm = () => {
        this.props.navigation.navigate('AddEmpForm');
    };

    favourite = async (item) => {
        let {employeeList} = this.state,
            {item: {empID}} = item,
            favCount = 0;
        employeeList.map(ele => {
            if(ele.empID == empID){
                ele.isFav = !ele.isFav;
            }
            if(ele.isFav){
                favCount++;
            }
        })
        this.setState({employeeList: employeeList});
        this.props.favCountAction(favCount);
        await AsyncStorage.setItem('employeeList', JSON.stringify(employeeList));
    };

    handleBackPress = () => {
        BackHandler.exitApp();
      }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
      }

    render(){
        let {employeeList} = this.state,
        leftComponent = (
            <TouchableOpacity onPress={this.openDrawer}>
                <Image style={{width: 30, height: 28}}
                  source={ICON.MENU}/>
            </TouchableOpacity>
        ),
        rightComp = (
            <TouchableOpacity onPress={this.openForm} style = {{height: 40, width: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey'}}>
                <Text style = {{fontSize: 30}}>+</Text>
            </TouchableOpacity>
        );
        return (
            <View style = {{height: '100%', marginBottom: -10}}>
                <Header
                placement="left"
                leftComponent={leftComponent}
                centerComponent={{ text: 'Inbox', style: { color: '#000', fontSize: 26} }}
                rightComponent={rightComp}
                backgroundColor= {'green'}
                />

                <FlatList data = {employeeList} 
                    renderItem = {(item) => {
                        let {item:{fName, lName, jobTitle, initial = 'AB', isFav}} = item;
                        return(
                            <Card containerStyle={{padding: 0, height: 80, borderRadius: 3}}>
                                <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '100%', marginHorizontal: 10}}>
                                    <View style = {{flexDirection: 'row', justifyContent: 'flex-start'}}>
                                        <Avatar rounded title = {initial} />
                                        <View style={{marginLeft: 20}}>
                                        <Text>{fName} {lName}</Text>
                                        <Text>{jobTitle}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity onPress={() => this.favourite(item)}>
                                        <Image style={{width: 30, height: 28}}
                                            source={isFav ? ICON.FAV : ICON.UN_FAV}/>
                                    </TouchableOpacity>
                                
                                </View>
                            </Card>
                        )
                    }}
                />
            </View>
        )
    }
};

mapDispatchToProps = dispatch => {
    return{
        empListAction: (empList) => dispatch({type: 'ADD_EMPLOYEE', employeeList: empList}),
        favCountAction: (favCount) => dispatch({type: 'FAV_EMPLOYEE', favCount: favCount})
    }
}

export default connect(null, mapDispatchToProps)(EmployeeList);