import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux'
import { Constants } from 'expo';

import { primaryColor } from "../utils/colors"
import { createId } from '../utils/helper'
import { actionAddCity } from '../redux/actions/cities-actions'
import { addCity } from '../utils/asyncStorage'

class AddCity extends Component{
	state = {
		name: "",
		country: ""
	}
	static navigationOptions = {
        tabBarLabel: 'Add'
    }

    handleNameChange = (e) => {
    	const name = e.nativeEvent.text
    	this.setState({ name })
    }

    handleCountryChange = (e) => {
    	const country = e.nativeEvent.text
    	this.setState({ country })
    }

    onSubmit = () => {
    	const id = 'city' + createId()
    	const {name, country} = this.state
    	const {dispatch} = this.props
    	if(name.length > 0 && country.length > 0){
    		const city = {
	    		[id] : { id, name, country }
	    	}
	    	addCity(city).then(dispatch(actionAddCity(city)))
    	}
    }

  	render(){
    	return <KeyboardAvoidingView style={styles.kav} behavior="padding">
	    	<View style={styles.container}>
	      		<Text style={styles.title}>CITIES</Text>
	      		<Input 
	      			placeholder='City name'
	      			containerStyle={styles.inputContainer}
	      			inputContainerStyle={styles.input}
	      			value={this.state.name}
	      			onChange={this.handleNameChange}
	      			/>
	      		
	      		<Input 
	      			placeholder='Country name' 
	      			containerStyle={styles.inputContainer}
	      			inputContainerStyle={styles.input}
	      			value={this.state.country}
	      			onChange={this.handleCountryChange}
	      			/>
	      		
	      		<Button 
	      			title="Submit" 
	      			containerStyle={styles.buttonContainer} 
	      			buttonStyle={styles.button}
	      			onPress={this.onSubmit}
	      			/>
	    	</View>
    	</KeyboardAvoidingView>
  	}
}

export default connect()(AddCity)

const styles = StyleSheet.create({
	kav:{
		flex: 1,
	},
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: primaryColor,
		paddingLeft: 15,
		paddingRight: 15,
		flex: 1,
		justifyContent: "center",
		alignItems:'center',
	},
	title: {
		color: 'white',
		fontSize: 20,
		lineHeight: 50,
		fontWeight: 'bold',
	},
	inputContainer: {
		backgroundColor: "white",
		marginBottom: 10,
	},
	input:{
		height:48,
		borderBottomWidth: 0,
	},
	buttonContainer: {
		width: "100%",
	},
	button:{
		height:48,
		backgroundColor: "gray",
		borderRadius: 0,
	}
})