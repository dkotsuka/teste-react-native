import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'

import Header from './Header'
import CityListItem from './CityListItem'
import { getInitialData } from '../utils/asyncStorage'
import { actionLoadCities } from '../redux/actions/cities-actions'

class CityList extends React.Component {
	static navigationOptions = {
        tabBarLabel: 'Cities'
    }
    componentDidMount() {
		getInitialData().then(({cities}) => {
			this.props.dispatch(actionLoadCities(cities))
		})
	}
    render() {
    	const { cities } = this.props
    	console.log(cities)
        return (
        	<View>
        		<Header title="CITIES"/>
        		{cities ? 
        			<FlatList 
        				data={cities}
        				keyExtractor={(city) => city.id}
        				renderItem={(city) => <CityListItem city={city}/>}
        			/>
        			: <Text>Lista Vazia</Text>
        		}
	    		
	    	</View>
	    )
    }
}

function mapStateToProps({cities}) {
	if(!cities){
		return {cities: null}
	}
	const keys = Object.keys(cities)
	const list = []

	for (let i in keys) {
		list.push(cities[keys[i]])
	}
	if(list.length > 0) {
		return {cities: list}
	}
	return {cities: null}
}

export default connect(mapStateToProps)(CityList)