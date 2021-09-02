import Cards from '../../components/CountryCards/CountryCards';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function HomePage() {
	return (
		<div>
			<h1>Home Page</h1>
			<SearchBar />
			<Cards />
		</div>
	)
}