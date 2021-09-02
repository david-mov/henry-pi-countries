import axios from 'axios';
import { 
	GET_ALL_COUNTRIES,
	SEARCH_COUNTRIES
} from './constants';

export function getAllCountries() {
	return function(dispatch) {
		return axios.get('http://localhost:3001/countries')
		.then((res) => {
			dispatch({ type: GET_ALL_COUNTRIES, payload: res.data });
		})
		.catch((err) => console.error(err));
	}
}

export function searchCountries(country) {
	return function(dispatch) {
		return axios.get('http://localhost:3001/countries?name=' + country)
		.then((res) => {
			dispatch({ type: SEARCH_COUNTRIES, payload: res.data });
		})
		.catch((err) => console.log(err));
	}
}