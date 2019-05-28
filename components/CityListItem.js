import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export default function CityListItem(props) {
	const { name } = props.city.item
	return <View onPress={props.onPress} style={styles.container}>
		<Text style={styles.text}>{name}</Text>
		<MaterialIcons name={'navigate-next'} size={48} color='gray' />
	</View>
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 10,
		borderBottomWidth: 1,
		borderColor: 'gray',
	},
	text: {
		fontSize: 20,
		lineHeight: 20,
		color: 'gray',
	},
	icon: {
		height: 25,
	}
})

