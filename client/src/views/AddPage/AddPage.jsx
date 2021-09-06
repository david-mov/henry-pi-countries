import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCountries, postActivity } from '../../stateManagement/actions';

export default function AddPage() {
	const dispatch = useDispatch();
	const allCountries = useSelector(state => state.countriesLoaded);
	useEffect(() => {
		dispatch(getAllCountries());
	}, [dispatch]);
	const [activity, setActivity] = useState({
		name: '',
		difficult: '',
		duration: '',
		season: '',
		countries: ''
	});
	function handleChange(ev) {
		setActivity({
			...activity,
			[ev.target.name]: ev.target.value
		})
	}

	function handleSelect(ev) {
		setActivity({
			...activity,
			countries: Array.from(ev.target.selectedOptions, option => option.value).join(',')
		})
	}

	function handleSubmit(ev) {
		ev.preventDefault();
		dispatch(postActivity(activity));
	}
	return (
		<div>
			<h1>Addition Page</h1>
			<form onSubmit={(ev) => handleSubmit(ev)}>
				{
					['name','difficult','duration','season'].map((el) => 
						<div key={el}>
							<label>{el[0].toUpperCase() + el.slice(1)}: </label>
							<input 
								type='text' 
								autoComplete='off' 
								name={el} 
								value={activity[el]} 
								onChange={(ev) => handleChange(ev)}
							/>
						</div>
					)
				}
				<div>
					<label>Countries related to this activity:</label> <br />
					<select onChange={(ev) => handleSelect(ev)} multiple>
						{
							allCountries.map((el) => 
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