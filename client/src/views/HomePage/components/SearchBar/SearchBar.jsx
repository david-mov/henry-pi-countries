import { useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { searchCountries } from '../../../../stateManagement/actions';

export default function SearchBar() {
	const dispatch = useDispatch();
	const [search, setSearch] = useState('');
	const location = useLocation();
	const history = useHistory();
	const query = useMemo(() => new URLSearchParams(location.search), [location.search]);
	const [previousQuery, setPreviousQuery] = useState('');
	useEffect(() => {
		let querySearch = query.get('search') || '';
		if (querySearch !== previousQuery) {
			dispatch(searchCountries(querySearch));	
			setPreviousQuery(querySearch);		
		}
	}, [dispatch, query, previousQuery])

	function handleChange(e) {
		setSearch(e.target.value);
	}
	function handleSubmit(e) {
		e.preventDefault();
		query.set('search', search);
		history.push({ search: query.toString() });
		setSearch('');
	}
	return (
		<div>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input 
					type='text' 
					autoComplete='off' 
					value={search} 
					onChange={(e) => handleChange(e)}
				/>
				<button type='submit'>Search</button>
			</form>
		</div>
	)
}