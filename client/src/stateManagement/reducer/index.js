import { 
	GET_ALL_COUNTRIES,
	SEARCH_COUNTRIES,
	GET_DETAILS,
	GET_ALL_ACTIVITIES,
	GET_ALL_REGIONS,
	APPLY_FILTERS
} from '../../consts/actions';

const initialState = {
	countriesLoaded: [],
	countryDetails: {},
	allCountries: [],
	allActivities: [],
	allRegions: [],
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_COUNTRIES:
			// console.log('entre get all countries');
			return ({
				...state,
				allCountries: action.payload,
				countriesLoaded: action.payload
			});
		case SEARCH_COUNTRIES:
			// console.log('entre search countries');
			return ({
				...state,
				countriesLoaded: action.payload
			});
		case GET_DETAILS:
			// console.log('entre get details');
			return ({
				...state,
				countryDetails: action.payload
			});
		case GET_ALL_ACTIVITIES:
			// console.log('entre get all activities');
			return ({
				...state,
				allActivities: action.payload
			});
		case GET_ALL_REGIONS:
			// console.log('entre get all regions');
			return ({
				...state,
				allRegions: action.payload
			});
		case APPLY_FILTERS:
			// console.log('entre apply filters');
			const f = action.payload;
			const regionFilter = f.region !== '' ? state.allCountries.filter(e => e.subregion.region.name === f.region ) : [...state.allCountries];
			const activityFilter = f.activity !== '' ? state.allCountries.filter(e => e.activities.some(a => a.name === f.activity)) : [...state.allCountries];
			const matches = [];
			for (let i = 0; i < regionFilter.length; i++) {
				for (let j = 0; j < activityFilter.length; j++) {
					if (regionFilter[i].id === activityFilter[j].id) {
						matches.push(regionFilter[i]);
					}
				}
			}
			if (f.order === 'alp_asc') {
				matches.sort((a,b) => a.name.localeCompare(b.name));
			} 
			else if (f.order === 'alp_desc') {
				matches.sort((a,b) => b.name.localeCompare(a.name));
			} 
			else if (f.order === 'area_asc') {
				matches.sort((a,b) => a.area - b.area);
			} 
			else if (f.order === 'area_desc') {
				matches.sort((a,b) => b.area - a.area);
			}
			// console.log(matches);
			return ({
				...state,
				countriesLoaded: matches
			})		
		default:
			// console.log('entre default');
			return ({...state});
	}
}

export default reducer;
