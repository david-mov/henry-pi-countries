import { 
	GET_ALL_COUNTRIES,
	SEARCH_COUNTRIES
} from '../actions/constants';

const initialState = {
	allCountries: [],
	countriesLoaded: []
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_COUNTRIES:
			return ({
				...state,
				allCountries: action.payload,
				countriesLoaded: action.payload
			});
		case SEARCH_COUNTRIES:
			return ({
				...state,
				countriesLoaded: action.payload
			});
		default:
			return ({...state});
	}
}

export default reducer;