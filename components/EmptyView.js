import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { primaryColor, 
	primaryTextColor, 
	secondaryLightColor, 
	secondaryColor, 
	secondaryDarkColor } from '../utils/colors'

function EmptyView() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Nothing to show...</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		color: secondaryColor
	}
})

export default EmptyView