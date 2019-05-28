import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'

import CityItem from './CityItem'
import EmptyView from './EmptyView'
import { getInitialData } from '../utils/asyncStorage'
import { actionLoadCities } from '../redux/actions/cities-actions'
import { actionLoadLocations } from '../redux/actions/location-actions'
import { primaryColor } from '../utils/colors'

class CityList extends React.Component {
	static navigationOptions = {
        title: 'CITIES',
        headerTintColor: 'white',
        headerStyle: {
        	backgroundColor: primaryColor
        }
    }
    componentDidMount() {
		getInitialData().then(({cities, locations}) => {
			this.props.dispatch(actionLoadCities(cities))
			this.props.dispatch(actionLoadLocations(locations))
		})
	}

	onItemPress = (item) => {
		const {navigation} = this.props
		const {id, name, country} = item
		navigation.navigate('LocationList', { id, name, country })

	}

    render() {
    	const { cities } = this.props
        return (
        	<View>
        		{cities ?
					<FlatList 
						data={ cities }
					  	keyExtractor={(item) => item.id}
					  	renderItem={({item}) => <CityItem city={item} onItemPress={this.onItemPress}/>}
						/>
					: <EmptyView/>
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