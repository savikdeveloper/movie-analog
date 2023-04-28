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
				{ name: 'wednesday', viewers: 12000, favourite: false, like: false, id: 1},
				{ name: 'Squid game', viewers: 32000, favourite: false, like: false, id: 2},
				{ name: 'Avatar', viewers: 22000, favourite: false, like: false, id: 3},
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
		const newItem = {name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false, like: false}
		this.setState(({data}) =>{
			return {
				data: [...data, newItem]
			}
		})
	}

	onToggleFavourite = (id) =>{
		this.setState(({data}) => {
			const newArr = data.map(item => {
				if(item.id === id){
					return {...item, favourite: !item.favourite}
				} else{
					return item;
				}
			})
			return {
				data: newArr,
			}
		})
	}
	onToggleLike = (id) => {
		this.setState(({data}) => {
			const newArr = data.map(item => {
				if(item.id === id){
					return {...item, like: !item.like}
				} else{
					return item;
				}
			})
			return {
				data: newArr,
			}
		})
	}

	render() {
		const { data } = this.state
		const allFilmsCount = data.length;
		const favouriteMovieCount = data.filter(c => c.favourite).length;
		return(
			<div className='app font-monospace'>
				<div className='content'>
					<AppInfo allFilmsCount={allFilmsCount} favouriteMovieCount={favouriteMovieCount}/>
					<div className='search-panel'>
						<SearchPanel />
						<AppFilter />
					</div>
					<MovieList onToggleFavourite={this.onToggleFavourite} onToggleLike={this.onToggleLike} data={data} onDelete={this.onDelete}/>
					<MoviesAddForm addForm={this.addForm} />
				</div>
			</div>
		)
	}
}

export default App
