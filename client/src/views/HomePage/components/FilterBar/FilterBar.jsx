import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllActivities, getAllRegions } from '../../../../stateManagement/actions';
import { useLocation, useHistory } from 'react-router-dom';

export default function FilterBar() {
	const dispatch = useDispatch();
	const history = useHistory();
	const location = useLocation();
	const query = new URLSearchParams(location.search);
	useEffect(() => {
		dispatch(getAllActivities());
		dispatch(getAllRegions());
	}, [dispatch])
	const activities = useSelector(state => state.allActivities);
	const regions = useSelector(state => state.allRegions);
	const [filters, setFilters] = useState({
		region: '',
		activity: '',
		order: ''
	});

	function handleChange(ev) {
		setFilters({
			...filters,
			[ev.target.name]: ev.target.value
		})
	}
	function handleSubmit(ev) {
		ev.preventDefault();
		query.set('region', filters.region);
		query.set('activity', filters.activity);
		query.set('order', filters.order);
		history.push({ search: query.toString() });
	}

	return (
		<form onSubmit={(ev) => handleSubmit(ev)}>
			<div>
				<label>Filter by region: </label>
				<select name='region' onChange={(ev) => handleChange(ev)}>
					<option value=''>All</option>
					{
						regions?.map((r) => 
							<option key={r.name} value={r.name}>{r.name}</option>
						)
					}
				</select>
			</div>
			<div>
				<label>Filter by activity: </label>
				<select name='activity' onChange={(ev) => handleChange(ev)}>
					<option value=''>All</option>
					{
						activities?.map((a) =>
							<option key={a.name} value={a.name}>{a.name}</option>
						)
					}
				</select>
			</div>
			<div>
				<label>Order: </label>
				<select name='order' onChange={(ev) => handleChange(ev)}>
					<option value=''>Default</option>
					<option value='alp_asc'>Alphabetical Asc</option>
					<option value='alp_desc'>Alphabetical Desc</option>
					<option value='pop_asc'>Population Asc.</option>
					<option value='pop_desc'>Population Desc.</option>
				</select>
			</div>
			<button type='submit'>Filter</button>
		</form>
	)
}