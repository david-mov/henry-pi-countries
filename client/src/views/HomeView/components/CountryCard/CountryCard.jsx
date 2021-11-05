import { Link } from 'react-router-dom';
import s from './CountryCard.module.css'

export default function Card({id, flag, name, region, area}) {
	return (
		<div className={s.container}>
			<div className={s.image}>
				<img src={flag} alt={name} width="300" height="200" />
			</div>
			<div className={s.data}>
				<p className={s.title}>{name}</p>
				<p>Region: {region}</p>
				<p>Area: {area}km²</p>
				<Link to={`/details/${id}`}>
					<button className={s.btn}>View Details</button>
				</Link>	
			</div>	
		</div>
	)
}