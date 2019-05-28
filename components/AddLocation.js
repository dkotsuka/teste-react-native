import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Button, Input } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

import { primaryColor, 
	primaryTextColor, 
	secondaryLightColor, 
	secondaryColor, 
	secondaryDarkColor } from '../utils/colors'

class AddLocation extends Component {

	_scrollToInput (reactNode: any) {
	  this.scroll.props.scrollToFocusedInput(reactNode)
	}
	render() {
		return (
			<KeyboardAvoidingView>
				<Modal
					animationType="slide"
			        transparent={false}
			        visible={this.props.isVisible}>
					
					<View style={styles.container}>
						<Text style={styles.text}>New location in XXXX</Text>
						<Input
							placeholder='Location name'
							inputStyle={styles.input}
							inputContainerStyle={styles.inputContainer}/>

						<Input 
							placeholder='Location type (eg. restaurant)'
							inputStyle={styles.input}
							inputContainerStyle={styles.inputContainer}/>
						<Input 
							placeholder='Adress'
							inputStyle={styles.input}
							inputContainerStyle={styles.inputContainer}/>

						<Input 
							placeholder='Notes'
							inputStyle={styles.input}
							inputContainerStyle={styles.inputContainer}/>

						<Button 
							title="Add Location"
							containerStyle={styles.submitContainer}
							buttonStyle={[styles.button,{marginLeft: 10, marginRight: 10}]}/>
					</View>
					<Button 
						title="Close" 
						containerStyle={styles.closeContainer}
						buttonStyle={styles.button}/>
				</Modal>
			</KeyboardAvoidingView>
		)
	}
}
export default AddLocation

const styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 20,
		color: secondaryColor,
		marginBottom: 10
	},
	inputContainer: {
		borderBottomWidth: 0,
		paddingLeft: 10,
		marginBottom: 10,
		backgroundColor: secondaryLightColor,
	},
	input: {
		margin: 0,
		padding: 0,
	},
	closeContainer: {
		position: 'absolute',
		bottom: 15,
		left: 15,
		borderRadius: 0,
	},
	submitContainer:{
		marginRight: 10,
		marginLeft: 10,
		width: "100%",
	},
	button: {
		backgroundColor: secondaryDarkColor,
		borderRadius: 0,
		paddingRight: 20,
		paddingLeft: 20,
	}
})