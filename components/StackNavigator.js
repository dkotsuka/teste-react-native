import React from 'react'
import { createStackNavigator } from 'react-navigation'

import CityList from './CityList'
import LocationList from './LocationList'

const StackNavigator = createStackNavigator(
	{
		CityList,
		LocationList
	},
	{
		initialRouteName: 'CityList',
		headerMode : 'screen',
	}
)

export default StackNavigator