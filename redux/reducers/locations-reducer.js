import { 
	LOAD_LOCATIONS, 
	ADD_LOCATION, 
	REMOVE_LOCATION, 
	EDIT_LOCATION 
} from "../actions/location-actions"

export default function locations(state={}, action) {

	switch (action.type) {
		case LOAD_LOCATIONS:
			return {
				...state,
				...action.locations
			}

		case ADD_LOCATION:
			return {
				...state,
				...action.location
			}

		case REMOVE_LOCATION:
			const newState = Object.assign({}, state)
			delete newState[action.id]
			return newState

		case EDIT_LOCATION:
			return {
				...state,
				...action.location
			}

		default:
			return state
	}
}