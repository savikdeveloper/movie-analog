import { Component } from 'react'
import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from '../movies-add-form/movies-add-form'
import SearchPanel from '../search-panel/search-panel'
import './app.css'
import { v4 as uuidv4 } from 'uuid';

class	App extends Component {
	constructor(props){
		super(props)
		this.state = {
			data: [
				{ name: 'wednesday', viewers: 12000, favourite: false, id: 1},
				{ name: 'Squid game', viewers: 32000, favourite: false, id: 2},
				{ name: 'Avatar', viewers: 22000, favourite: true, id: 3},
			]
		}
	}

	onDelete = id =>{
		this.setState(({data}) =>{
			return {
				data: data.filter(s => s.id !== id)
			}
		})
	}

	addForm = (item) =>{
		this.setState(({data}) =>{
			return {
				data: [...data, {...item, id: uuidv4() }]
			}
		})
	}

	render() {
		const { data } = this.state
		return(
			<div className='app font-monospace'>
				<div className='content'>
					<AppInfo />
					<div className='search-panel'>
						<SearchPanel />
						<AppFilter />
					</div>
					<MovieList data={data} onDelete={this.onDelete}/>
					<MoviesAddForm addForm={this.addForm} />
				</div>
			</div>
		)
	}
}

export default App
