import Card from '../CountryCard/CountryCard';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllCountries } from '../../actions';

export default function Cards() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllCountries());
	}, [dispatch]);
	const countries = useSelector(state => state.countriesLoaded);
	if (countries) {
		return(
			<div>
				{countries?.map(c => 
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