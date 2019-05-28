import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

import AddLocation from './AddLocation'
import { primaryColor } from '../utils/colors'

class LocationList extends Component {
	static navigationOptions = ({navigation}) => {
		const {name} = navigation.state.params
		return { 
			title: name.toUpperCase(), 
	        headerTintColor: 'white',
	        headerStyle: {
	        	backgroundColor: primaryColor
	        }
	    }
	}
	state={ 
		modalVisible: false,
	}

	toggleModalVisibility = () => {
		if(this.state.modalVisible){
			this.setState({
				modalVisible: false,
			})
		} else {
			this.setState({
				modalVisible: true,
			})
		}
	}
	render(){
		console.log('LocationList props', this.props)
		return (
			<View style={styles.container}>
				<AddLocation
					isVisible={this.state.modalVisible} 
					toggleVisibility={this.toggleModalVisibility}
					city={this.props.city}/>
				<Text>LocationList</Text>
				<Button 
					icon={<MaterialIcons name={'add'} size={36} color='white' />}
					containerStyle={styles.buttonContainer}
					buttonStyle={styles.button}
					onPress={this.toggleModalVisibility}/>
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	buttonContainer:{
		position: 'absolute',
		elevation: 2,
		bottom: 20,
		right: 20,
	},
	button: {
		width: 50,
		height: 50,
		borderRadius: 30,
		backgroundColor: primaryColor,
		
	}
})