import { AsyncStorage } from 'react-native'

const STORAGE_KEY = "ASYNC_STORAGE_KEY_FOR_LOCATION_LIST_APP"

export function getInitialData() {
	return AsyncStorage.getItem(STORAGE_KEY)
		.then(res => JSON.parse(res))
}

export function addCity(city) {
	return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(
		{ cities : city }
	))
}

export function addLocation(location) {
	return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(
		{ locations : location }
	))
}

export function editLocation(location) {
	return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(
		{ locations : location }
	))
}

export function removeLocation(id) {
	return AsyncStorage.getItem(STORAGE_KEY)
		.then((res) => JSON.parse(res))
		.then((data) => {
			data.locations = {
				...data.locations,
				[id] : undefined
			}
			delete data.locations[id]
			return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
		})
}