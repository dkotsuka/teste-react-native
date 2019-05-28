import React from 'react'
import { View, Text } from 'react-native'
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

	onItemPress = (id) => {
		const {navigation} = this.props
		navigation.navigate('LocationList', { id })

	}

    render() {
    	const { cities } = this.props
        return (
        	<View>
        		<Header title="CITIES"/>
        		{cities ?
					cities.map((l, i) => (
						<CityListItem
							key={i}
							id={l.id}
							title={l.name}
							subtitle={l.country}
							onPress={() => this.onItemPress(l.id)}
						/>
					))
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