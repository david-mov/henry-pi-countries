import { Link } from 'react-router-dom';
import s from '../../styles/landingPage.module.css';

export default function LandingPage() {
	return (
		<div className={s.container}>
			<h1 className={s.title}>Welcome!</h1>
			<Link to='/home'>
				<button className={s.btn}>Start</button>
			</Link>
		</div>
	)
}