export default function DetailsCard({id, name, flag, capital, region, subregion, area, population}) {
	return (
		<div>
			<img src={flag} alt={name} width="300" height="200" />
			<p>ID: {id}</p>
			<p>Name: {name}</p>
			<p>Capital: {capital}</p>
			<p>Region: {region}</p>
			<p>Subregion: {subregion}</p>
			<p>Area: {area}</p>
			<p>Population: {population}</p>
		</div>
	)
}