
export const LOAD_LOCATIONS = "LOAD_ALL_LOCATIONS"
export const ADD_LOCATION = "ADD_LOCATION"
export const REMOVE_LOCATION = "REMOVE_LOCATION"
export const EDIT_LOCATION = "EDIT_LOCATION"

export function actionLoadLocations(locations) {
	return {
		type: LOAD_LOCATIONS,
		locations
	}
}

export function actionAddLocation(location) {
	return {
		type: ADD_LOCATION,
		location
	}
}
export function actionEditLocation(location) {
	return {
		type: EDIT_LOCATION,
		location
	}
}
export function actionRemoveLocation(id) {
	return {
		type: REMOVE_LOCATION,
		id
	}
}