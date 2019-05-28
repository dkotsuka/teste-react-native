import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Button, Input } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

import { createId } from '../utils/helper'
import { addLocation, editLocation, removeLocation } from '../utils/asyncStorage'
import { actionAddLocation,
	actionEditLocation,
	actionRemoveLocation } from '../redux/actions/location-actions'
import { primaryColor, 
	primaryTextColor, 
	secondaryLightColor, 
	secondaryColor, 
	secondaryDarkColor } from '../utils/colors'

class AddLocation extends Component {

	state={
		name: "",
		type: "",
		address: "",
		notes: "",
		id: ""
	}

	componentDidUpdate(){
		if(this.props.location){
			if(this.state.id != this.props.location.id){
				this.populateState()
			}
		}		
	}

	populateState(){
		const {name, type, address, notes, id} = this.props.location
		this.setState({
			name, type, address, notes, id
		})
	}

	onChangeName = (event) => {
		const value = event.nativeEvent.text
		this.setState({
			name: value
		})
	}

	onChangeType = (event) => {
		const value = event.nativeEvent.text
		this.setState({
			type: value
		})
	}

	onChangeAddress = (event) => {
		const value = event.nativeEvent.text
		this.setState({
			address: value
		})
	}

	onChangeNotes = (event) => {
		const value = event.nativeEvent.text
		this.setState({
			notes: value
		})
	}

	onSubmit = () => {
		const {name, type, address, notes} = this.state
		const cityId = this.props.city.id
		const {dispatch} = this.props
		let location

		if(!this.props.location){
			const id = 'loc' + createId()
			location = {[id]:{ id, cityId, name, type, address, notes }}
			addLocation(location)
			.then(() => this.onClose())
			.catch((err) => alert(err))
			dispatch(actionAddLocation(location))
		} else {
			const {id} = this.state
			location = {[id]:{ id, cityId, name, type, address, notes }}
			editLocation(location)
			.then(() => this.onClose())
			.catch((err) => alert(err))
			dispatch(actionEditLocation(location))
		}
	}

	onClose = () => {
		this.props.clearLocation()
		this.setState({
			name: "",
			type: "",
			address: "",
			notes: ""
		})
		this.props.toggleVisibility()
	}

	onDelete = () => {
		const {dispatch} = this.props
		const {id} = this.state
		removeLocation(id)
		.then(this.onClose())
		.catch(err => alert(err))
		dispatch(actionRemoveLocation(id))
	}

	render() {
		return (
			<KeyboardAvoidingView>
				<Modal
					animationType="slide"
			        transparent={false}
			        visible={this.props.isVisible}>
					
					<View style={styles.container}>
						<Text style={styles.text}>
							{this.props.location ? "Edit location of " : "New location in "}
							{this.props.city.name}
						</Text>
						<Input
							placeholder='Location name'
							inputStyle={styles.input}
							inputContainerStyle={styles.inputContainer}
							value={this.state.name}
							onChange={this.onChangeName}/>

						<Input 
							placeholder='Location type (eg. restaurant)'
							inputStyle={styles.input}
							inputContainerStyle={styles.inputContainer}
							value={this.state.type}
							onChange={this.onChangeType}/>
						<Input 
							placeholder='Address'
							inputStyle={styles.input}
							inputContainerStyle={styles.inputContainer}
							value={this.state.address}
							onChange={this.onChangeAddress}/>

						<Input 
							placeholder='Notes'
							inputStyle={styles.input}
							inputContainerStyle={styles.inputContainer}
							value={this.state.notes}
							multiline={true}
							numberOfLines = {4}
							onChange={this.onChangeNotes}/>

						<Button 
							title={this.props.location ? "Save changes" : "Add location"}
							containerStyle={styles.submitContainer}
							buttonStyle={[styles.button, styles.commonButton,
									{marginLeft: 10, marginRight: 10}]}
							onPress={this.onSubmit}/>
						{this.props.location ?
							<Button
								title='Delete location'
								containerStyle={styles.submitContainer}
								buttonStyle={[styles.button, styles.deleteButton,
									{marginLeft: 10, marginRight: 10}]}
								onPress={this.onDelete}/>
							: null }
					</View>
					<Button 
						title="Close" 
						containerStyle={styles.closeContainer}
						buttonStyle={[styles.button, styles.commonButton]}
						onPress={this.onClose}/>
				</Modal>
			</KeyboardAvoidingView>
		)
	}
}
export default connect()(AddLocation)

const styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 40,
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
		width: "100%",
	},
	button: {
		borderRadius: 0,
		paddingRight: 20,
		paddingLeft: 20,
	},
	commonButton: {
		backgroundColor: secondaryDarkColor,
	},
	deleteButton: {
		backgroundColor: primaryColor,
		marginTop: 10,
	}
})