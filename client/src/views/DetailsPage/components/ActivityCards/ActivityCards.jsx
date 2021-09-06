import ActivityCard from '../ActivityCard/ActivityCard';

export default function ActivityCards({activities}) {
	return (
		<div>
			<h2>Activities</h2>
			{
				activities?.map((a) => 
					<ActivityCard 
						key={a.id} 
						name={a.name} 
						difficult={a.difficult} 
						duration={a.duration} 
						season={a.season}
					/>
				)
			}
		</div>
	)
}