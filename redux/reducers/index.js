import { combineReducers } from 'redux'
import cities from "./cities-reducer"
import locations from "./locations-reducer"

export default combineReducers({
	cities,
	locations
})