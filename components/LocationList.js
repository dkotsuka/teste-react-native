import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class LocationList extends Component {
	static navigationOptions = ({navigation}) => {
		const {name} = navigation.state.params
		return { tabBarLabel: name }
	}
	render(){
		console.log('LocationList props', this.props)
		return (
			<View>
				<Text>LocationList</Text>
			</View>
		)
	}
}

function mapStateToProps({locations}, {navigation}) {
	const { id, name, country } = navigation.state.params
	const state = { city: { id, name, country }, locations: null }
	if (!locations) {
		return state
	}

	const keys = Object.keys(locations)
	const list = []

	for (let i in keys) {
		list.push(locations[keys[i]])
	}
	if(list.length > 0) {
		state = {city: { id, name, country }, locations: list}
	}
	return state
	
}

export default connect(mapStateToProps)(LocationList)