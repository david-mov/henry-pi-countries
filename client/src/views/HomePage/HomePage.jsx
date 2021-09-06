import { Link } from 'react-router-dom';
import Cards from './components/CountryCards/CountryCards';
import SearchBar from './components/SearchBar/SearchBar';

export default function HomePage() {
	return (
		<div>
			<h1>Home Page</h1>
			<SearchBar />
			<label>Add new tourist activity: </label>
			<Link to='/add'><button>Click here</button></Link>
			<Cards />
		</div>
	)
}