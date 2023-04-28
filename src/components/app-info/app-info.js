import './app-info.css'

const AppInfo = ({ allFilmsCount, favouriteMovieCount }) => {
	return (
		<div className='app-info'>
			<p className='fs-3 text-uppercase'>Barcha kinolar soni: {allFilmsCount}</p>
			<p className='fs-4 text-uppercase'>Sevimli filmlar soni: {favouriteMovieCount}</p>
		</div>
	)
}

export default AppInfo
