import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { secondaryColor } from '../utils/colors'

export default function CityListItem(props) {
	return <ListItem 
		containerStyle={styles.container}
		key={props.id}
		title={props.title}
		subtitle={props.subtitle}
		onPress={props.onPress}
		rightElement={<MaterialIcons name={'navigate-next'} size={25} color='gray' />}
	/>
}

const styles = StyleSheet.create({
	container: {
		borderBottomWidth: 1,
		borderColor: secondaryColor,
	},
})

