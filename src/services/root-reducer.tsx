import { combineReducers } from 'redux'
import { searchData } from '../slices/search-data/searchData'

export const rootReducer = combineReducers({
	[searchData.name]: searchData.reducer,
})
