import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

import AddLocation from './AddLocation'
import LocationItem from './LocationItem'
import EmptyView from './EmptyView'
import { primaryColor, primaryTextColor } from '../utils/colors'

class LocationList extends Component {
	static navigationOptions = ({navigation}) => {
		const {name} = navigation.state.params
		return { 
			title: name.toUpperCase(), 
	        headerTintColor: primaryTextColor,
	        headerStyle: {
	        	backgroundColor: primaryColor
	        }
	    }
	}
	state={ 
		modalVisible: false,
		location: null,
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

	onItemPress = (location) => {
		this.setState({
			location,
			modalVisible: true,
		})
	}

	clearLocation = () => {
		this.setState({
			location: null
		})
	}

	render(){
		const { locations } = this.props
		console.log(locations)
		return (
			<View style={styles.container}>
				<AddLocation
					isVisible={this.state.modalVisible} 
					toggleVisibility={this.toggleModalVisibility}
					city={this.props.city}
					location={this.state.location}
					clearLocation={this.clearLocation}/>
				{
					locations ?
					<FlatList
					  	data={ locations }
					  	keyExtractor={(item) => item.id}
					  	renderItem={({item}) => <LocationItem location={item} onItemPress={this.onItemPress}/>}
					/>
					: <EmptyView/>
				}
				
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
	if (!locations) {
		return { city: { id, name, country }, locations: null }
	}

	const keys = Object.keys(locations)
	const list = []

	for (let i in keys) {
		if(locations[keys[i]].cityId == id ){
			list.push(locations[keys[i]])
		}
	}
	if(list.length > 0) {
		return {city: { id, name, country }, locations: list}
	}
	return { city: { id, name, country }, locations: null }
	
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