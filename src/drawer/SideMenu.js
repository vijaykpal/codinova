import React, {Component} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, StyleSheet, AsyncStorage, Image} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import {ICON} from '../common/Constant';
import {connect} from 'react-redux';

class SideMenu extends Component {

  constructor(props){
    super(props);
    this.state = {
      totalEmp : 0,
      favEmp: 0
    }
  }

  async componentDidMount(){
    let employees = await AsyncStorage.getItem('employeeList')
        empList = employees ? JSON.parse(employees) : [];
        this.setState({totalEmp: empList.length})
  }

  onClose = () => {
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());
  };

  componentDidUpdate(prevProps){
    let {employeeCount, favCount} = this.props;
        if(prevProps.employeeCount !== employeeCount || prevProps.favCount !== favCount){
          this.setState({totalEmp: employeeCount, favEmp: favCount})
        }
  }

  render(){
    let {totalEmp, favEmp} = this.state;
    return(
      <SafeAreaView style = {{flex: 1}}>
        <View style = {styles.drawerHeader}>
          <TouchableOpacity style ={styles.closeBtn} onPress = {() => this.onClose()}>
            <Image style={{width: 50, height: 50}}
                    source={ICON.BACK_ARROW}/>
          </TouchableOpacity>
        </View>
        <View style = {styles.optionsView}>
          <Text style = {styles.option}>Total Employees: {totalEmp}</Text>
          <Text style = {styles.option}>Total Favourite: {favEmp}</Text>
        </View>
      </SafeAreaView>
    )
  }
};

const styles = StyleSheet.create({
  drawerHeader: {
    height: '14%',
    backgroundColor: 'green'
  },
  closeBtn:{
    marginTop: 30, 
    marginLeft: 10
  },
  optionsView:{
    marginHorizontal: 10, 
    marginVertical: 20
  },
  option:{
    marginVertical: 10,
    fontSize: 18
  }
});

mapStateToProps = (state) => {
  return {
    employeeCount: state.employeeList,
    favCount: state.favCount
  }
}

export default connect(mapStateToProps, null)(SideMenu);