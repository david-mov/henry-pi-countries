import { Link } from 'react-router-dom';
import Cards from './components/CountryCards/CountryCards';
import SearchBar from './components/SearchBar/SearchBar';
import PagesNavBar from './components/PagesNavBar/PagesNavBar'
import FilterBar from './components/FilterBar/FilterBar';

export default function HomePage() {
	return (
		<div>
			<h1>Home Page</h1>
			<PagesNavBar />
			<SearchBar />
			<label>Add new tourist activity: </label>
			<Link to='/add'><button>Click here</button></Link>
			<FilterBar />
			<Cards />
		</div>
	)
}