export default function ActivityCard({name, difficult, duration, season}) {
	return (
		<div>
			<h4>{name}</h4>
			<p>{difficult}</p>
			<p>{duration}</p>
			<p>{season}</p>
		</div>
	)
}