import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class LocationList extends Component {
	static navigationOptions = (props) => {
		console.log(props)
		return { tabBarLabel: 'Cities' }
	}
	render(){
		return (
			<View>
				<Text>LocationList</Text>
			</View>
		)
	}
}

export default LocationList