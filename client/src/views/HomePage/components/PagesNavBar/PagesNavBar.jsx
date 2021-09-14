import { useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

export default function PagesNavBar() {	
	const history = useHistory();
	const location = useLocation();
	const query = new URLSearchParams(location.search);
	let currPage = parseInt(query.get('page')) || 1;
	const countries = useSelector(state => state.countriesLoaded);
	let totalPages = Math.ceil(countries.length / 10);
	function handlePagination(pageNumber) {
		query.set('page', pageNumber);
		history.push({ search: query.toString() })
	}
	return (
		<div>	
			<button onClick={() => handlePagination(1)}>First</button>
			{currPage - 2 > 0 && 
				<button onClick={() => handlePagination(currPage - 2)}>{currPage - 2}</button> }
			{currPage - 1 > 0 && 
				<button onClick={() => handlePagination(currPage - 1)}>{currPage - 1}</button> }
			<label> {currPage} </label>
			{currPage + 1 <= totalPages && 
				<button onClick={() => handlePagination(currPage + 1)}>{currPage + 1}</button> }
			{currPage + 2 <= totalPages &&
				<button onClick={() => handlePagination(currPage + 2)}>{currPage + 2}</button> }	
			<button onClick={() => handlePagination(totalPages)}>Last</button>
		</div>
	)
}