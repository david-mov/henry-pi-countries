import s from './ActivityCard.module.css'

export default function ActivityCard({name, difficult, duration, season}) {
	return (
		<div className={s.container}>
			<h4 className={`${s.data} ${s.title}`}>{name}</h4>
			<p className={s.data}>Difficult: {difficult}/10</p>
			<p className={s.data}>Duration: {duration} min.</p>
			<p className={s.data}>Season: {season}</p>
		</div>
	)
}