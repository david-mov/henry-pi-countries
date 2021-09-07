import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DetailsCard from './components/DetailsCard/DetailsCard';
import ActivityCards from './components/ActivityCards/ActivityCards';
import { getDetails } from '../../stateManagement/actions';

export default function DetailsPage() {
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getDetails(id))
	}, [dispatch, id])
	let c = useSelector(state => state.countryDetails);
	return (
		<div>
			<h1>Details Page</h1>
			<DetailsCard 
				id={c.id} 
				name={c.name} 
				flag={c.flag} 
				capital={c.capital} 
				region={c?.subregion?.region?.name} 
				subregion={c?.subregion?.name} 
				area={c.area} 
				population={c.population} 
			/>
			<ActivityCards activities={c.activities}/>
		</div>
	)
}