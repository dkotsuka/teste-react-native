import React from 'react'
import { View, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

function CityListItem(props) {
	return <View>
		<Text>{props.name}</Text>
		<MaterialIcons name={'navigate-next'} size={25} />
	</View>
}

