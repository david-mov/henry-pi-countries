import { Link } from 'react-router-dom';

export default function Card({id, flag, name, region}) {
	return (
		<div>
			<img src={flag} alt={name} width="300" height="200" />
			<p>{name}</p>
			<p>{region}</p>
			<Link to={`/details/${id}`}>
				<button>View Details</button>
			</Link>			
		</div>
	)
}