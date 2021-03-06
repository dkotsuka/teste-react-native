import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { createBottomTabNavigator, } from 'react-navigation-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import CityList from './CityList'
import AddCity from './AddCity'
import StackNavigator from './StackNavigator'
import { primaryColor, secondaryColor } from '../utils/colors'

export default createAppContainer(createBottomTabNavigator(
	{
    List: StackNavigator,
    Add: AddCity
	},
  {
    defaultNavigationOptions:({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        console.log(navigation)
        let iconName;
        if (routeName === 'List') {
          iconName = `location-city`;
        } else if (routeName === 'Add') {
          iconName = `add`;
        }
        return <MaterialIcons name={iconName} size={25} color={tintColor} />;
      },
      tabBarOptions: {
        activeTintColor: primaryColor,
        inactiveTintColor: secondaryColor,
      },
    })
  }
)) 