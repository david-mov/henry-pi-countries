import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DetailsCard from './components/DetailsCard/DetailsCard';
import ActivityCards from './components/ActivityCards/ActivityCards';
import { getDetails } from '../../stateManagement/actions';
import s from './DetailsPage.module.css';
import b from '../../components/layouts/goBack.module.css';

export default function DetailsPage() {
	const history = useHistory();
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getDetails(id))
	}, [dispatch, id])
	let c = useSelector(state => state.countryDetails);
	return (
		<div className={s.container}>
			<button className={b.goBack} onClick={() => history.goBack()}>Go Back</button>		
			<h1 className={s.title}>Country Details</h1>
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
			<h1 className={s.title}>Related Activities</h1>
			<ActivityCards activities={c.activities}/>
			<button className={b.goBack} onClick={() => history.goBack()}>Go Back</button>				
		</div>
	)
}