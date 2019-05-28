import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements';

import { primaryColor, 
	primaryTextColor, 
	secondaryLightColor, 
	secondaryColor, 
	secondaryDarkColor } from '../utils/colors'

export default class LocationItem extends Component{
	render(){
		const {location} = this.props
		return <TouchableOpacity>
			<Card
				title={location.name}>
				<View style={styles.lineContainer}>
					<Text style={styles.text}>Address: {location.address}</Text>
					<Text style={styles.type}>{location.type.toUpperCase()}</Text>
				</View>
				<Text style={styles.text}>Notes: {location.notes}</Text>
			</Card>
		</TouchableOpacity>
	}
}

const styles = StyleSheet.create({
	lineContainer: {
		flexDirection: 'row',
	},
	text: {
		flex: 1
	},
	type: {
		color: secondaryColor,
	}
})