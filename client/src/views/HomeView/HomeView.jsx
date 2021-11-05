import { Link } from 'react-router-dom';
import Cards from './components/CountryCards/CountryCards';
import SearchBar from './components/SearchBar/SearchBar';
import PagesNavBar from './components/PagesNavBar/PagesNavBar'
import FilterBar from './components/FilterBar/FilterBar';
import s from '../../styles/homePage.module.css';

export default function HomeView() {
	return (
		<div className={s.container}>
			<div className={s.navbar}>
				<div className={s.title}>
					<h1>Countries App</h1>					
				</div>
				<div className={s.searchAndAdd}>
					<SearchBar />
					<Link to='/add'>
						<button className={s.btn}>Add new tourist activity</button>
					</Link>
				</div>
			</div>
			<FilterBar />			
			<PagesNavBar />
			<Cards />
			<PagesNavBar />
		</div>
	)
}