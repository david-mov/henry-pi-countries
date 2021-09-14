import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCountries, postActivity, getAllActivities } from '../../stateManagement/actions';

export default function AddPage() {
	const dispatch = useDispatch();
	const allCountries = useSelector(state => state.allCountries);
	const allActivities = useSelector(state => state.allActivities);
	useEffect(() => {
		dispatch(getAllCountries());
		dispatch(getAllActivities());
	}, [dispatch]);
	const [createNew, setCreateNew] = useState(false);
	const [activity, setActivity] = useState({
		name: '',
		difficult: '',
		duration: '',
		season: '',
		countries: ''
	});
	function handleChangeNew(ev) {
		setActivity({
			...activity,
			[ev.target.name]: ev.target.value
		})
	}

	function handleChange(ev) {
		let found = allActivities.find((el) => el.id.toString() === ev.target.value);
		setActivity({
			...activity,
			...found
		});
	}

	function handleSelect(ev) {
		setActivity({
			...activity,
			countries: Array.from(ev.target.selectedOptions, option => option.value).join(',')
		})
	}

	function handleSubmit(ev) {
		ev.preventDefault();
		if (activity.name !== "" && activity.countries !== "") {
			dispatch(postActivity(activity));
		}
	}
	return (
		<div>
			<h1>Addition Page</h1>
			<form onSubmit={(ev) => handleSubmit(ev)}>
				{
					!createNew && <div>
						<label>Choose an activity: </label>
						<select onChange={(ev) => handleChange(ev)}>
							<option value=""></option>
							{
								allActivities?.map((el) => 
									<option 
										key={el.id} 
										value={el.id}
									>{el.name}</option>
								)
							}
						</select>
					<br />
					<label> Create new activity: </label>
					<button onClick={() => setCreateNew(!createNew)}>Create new</button>	
					</div>
				}
				{
					createNew && <div>
						<label>Use already created activity: </label>
						<button onClick={() => setCreateNew(!createNew)}>Do it</button>
					</div>
				}
				{
					createNew && ['name','difficult','duration','season'].map((el) => 
						<div key={el}>
							<label>{el[0].toUpperCase() + el.slice(1)}: </label>
							<input 
								type='text' 
								autoComplete='off' 
								name={el} 
								value={activity[el]} 
								onChange={(ev) => handleChangeNew(ev)}
							/>
						</div>
					)
				} 
				<div>
					<label>Countries related to this activity:</label> <br />
					<select onChange={(ev) => handleSelect(ev)} multiple>
						<option value=""></option>
						{
							allCountries?.map((el) => 
								<option 
									key={el.id} 
									value={el.id}
								>{el.name}</option>
							)
						}
					</select> <br />
					<label>Hold down the Ctrl (windows) or Command (Mac) button to select multiple options.</label>
				</div>
				<button type='submit'>Add</button>
			</form>
		</div>
	)
}