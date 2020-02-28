import React, { Fragment } from 'react';
import './App.css';

import MovieCard from './components/MovieCard'
import Footer from './components/Footer'
import Search from './components/Search'
import Modal from './components/Modal'

import ImdbServices from './services/ImdbServices'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      loadCount : 0,
      show: false,
      describeMovie : '',
      genres: []
  }

  this.handleGetMovies = this.handleGetMovies.bind(this)
  this.handleSearchMovies = this.handleSearchMovies.bind(this)
  this.handleGetGenres = this.handleGetGenres.bind(this)
  this.showModal = this.showModal.bind(this)
  }

  async componentDidMount(){
    await this.handleGetMovies()
    await this.handleGetMovies()
  }

  showModal(movie){
    if(!this.state.show){
      this.setState({genres: []})
      movie.genre_ids.forEach(async genre => await this.handleGetGenres(genre))
    }
    
    this.setState({
      show: !this.state.show,
      describeMovie: movie
    });
  };



  async handleGetMovies() {
    await this.setState({loadCount: this.state.loadCount + 1})
    const {loadCount, movies} = this.state 
    let resultMovies = await ImdbServices.getMovies((loadCount ? loadCount : 1))
    this.setState({
        movies: [...movies, ...resultMovies]
    })

}

  async handleSearchMovies(param) {
    let resultMovies = await ImdbServices.searchMovies(param)
    if(Array.isArray(resultMovies))   {
     this.setState({
      movies: (resultMovies ? resultMovies : [])
      })
      }
  }

  async handleGetGenres (genreId){
    const result = await ImdbServices.getGenre(genreId)

    this.setState({genres: [
      result,
      ...this.state.genres
    ]})
    
  }


  render() {
    return (
      <Fragment>
        <Modal onClose={this.showModal} show={this.state.show}
               describeMovie={this.state.describeMovie}
               genres={this.state.genres}
        >
        </Modal>
      <div className="min-h-screen flex flex-col font-sans">
        <Search handleSearchMovies={this.handleSearchMovies}/>
        <MovieCard 
          handleGetMovies={this.handleGetMovies}
          movies={this.state.movies}
          showModal={this.showModal}
          />
        <Footer 
          movies={this.state.movies}
          handleGetMovies={this.handleGetMovies}
          loadCount={this.state.loadCount}
        />
      </div>
      </Fragment>
    );
  }
}

export default App;
