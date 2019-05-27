export const ADD_CITY = "ADD_CITY"
export const LOAD_CITIES = "LOAD_CITIES"

export function actionAddCity(city) {
	return {
		type: ADD_CITY,
		city
	}
}

export function actionLoadCities(cities) {
	return {
		type: LOAD_CITIES,
		cities
	}
}