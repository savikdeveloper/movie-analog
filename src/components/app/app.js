import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from '../movies-add-form/movies-add-form'
import SearchPanel from '../search-panel/search-panel'
import './app.css'

function App() {

	const data = [
		{ name: 'wednesday', viewers: 12000, favourite: false, id: 1},
		{ name: 'Squid game', viewers: 32000, favourite: false, id: 2},
		{ name: 'Avatar', viewers: 22000, favourite: true, id: 3},
	]

	return (
		<div className='app font-monospace'>
			<div className='content'>
				<AppInfo />
				<div className='search-panel'>
					<SearchPanel />
					<AppFilter />
				</div>
				<MovieList data={data} />
				<MoviesAddForm />
			</div>
		</div>
	)
}

export default App
