export default function Card({flag, name, region}) {
	return (
		<div>
			<img src={flag} alt={name} width="300" height="200" />
			<p>{name}</p>
			<p>{region}</p>
		</div>
	)
}