import React from 'react'
import { View, Text, FlatList } from 'react-native'

import Header from './Header'

export default class CityList extends React.Component {
    render() {
        return <View>
        	<Header title="CITIES"/>
	    	<Text>CityListView</Text>
	    </View>
    }
}