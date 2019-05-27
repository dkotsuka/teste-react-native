import { ADD_CITY, LOAD_CITIES } from "../actions/cities-actions"

function cities(state = {}, action) {

	switch (action.type) {
		case ADD_CITY:
			return {
				...state,
				...action.city
			}

		case LOAD_CITIES:
			return {
				...state,
				...action.cities
			}

		default:
			return state
	}
}