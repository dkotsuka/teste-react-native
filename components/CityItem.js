import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { secondaryColor } from '../utils/colors'

export default class CityItem extends Component{
	render(){
		const {city} = this.props
		return <TouchableOpacity onPress={() => this.props.onItemPress(city)}>
			<View style={styles.container}>
				<View style={styles.leftbox}>
					<Text style={styles.title}>{city.name}</Text>
					<Text style={styles.text}>{city.country}</Text>
				</View>
				<MaterialIcons name={'navigate-next'} size={25} color='gray' />
			</View>
		</TouchableOpacity>
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderColor: secondaryColor,
		padding: 10,
	},
	leftbox: {
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	title: {
		fontSize: 16,
	},
	text: {
		color: secondaryColor,
	}
})