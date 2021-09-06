import Card from '../CountryCard/CountryCard';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { getAllCountries } from '../../../../stateManagement/actions';

export default function Cards() {
	const [page, setPage] = useState([]);	
	const dispatch = useDispatch();		
	const location = useLocation();
	const query = useMemo(() => new URLSearchParams(location.search), [location.search]);
	useEffect(() => {
		dispatch(getAllCountries());
	}, [dispatch])	
	const countries = useSelector(state => state.countriesLoaded);
	useEffect(() => {
		let queryPage = query.get('page');
		let pageNumber = queryPage && !isNaN(queryPage) && queryPage > 0 ? parseInt(queryPage) : 1;
		let maxPage = Math.ceil(countries.length / 9);
		if (pageNumber > maxPage) pageNumber = maxPage;
		setPage(countries.slice((pageNumber * 9 - 9), (pageNumber * 9)));
	}, [query, countries])
	if (page) {
		return(
			<div>
				{page?.map(c => 
					<Card 
						key={c.id} 
						id={c.id}
						flag={c.flag} 		
						name={c.name} 
						region={c.region}
					/>
				)}
			</div>
		)	
	} else {
		return(
			<div>Countries not found!</div>
		)
	}
}