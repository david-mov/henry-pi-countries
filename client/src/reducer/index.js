import { 
	GET_ALL_COUNTRIES,
	SEARCH_COUNTRIES,
	GET_DETAILS
} from '../actions/constants';

const initialState = {
	allCountries: [],
	countriesLoaded: [],
	countryDetails: {}
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
		case GET_DETAILS:
			return ({
				...state,
				countryDetails: action.payload
			})
		default:
			return ({...state});
	}
}

export default reducer;