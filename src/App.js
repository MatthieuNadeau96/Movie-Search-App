import React, { Component } from 'react';
import './App.css';
// import List from './components/List';
import { Link } from 'react-router-dom';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';

const API_KEY = 'c6396876f6d8074ed2cd825b08fa8460';

class App extends Component {

  state = {
    movieList: [],
    detailedList: []
  }

  // TODO: add a "more info" button feature that will use this url :
  // https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&query=alien

  // TODO: add a button to jump back to the top of the page

  getMovieList = async (e) => {
    e.preventDefault();
    const movieName = e.target.elements.movieName.value;
    const api_call = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName}`);
    const data = await api_call.json()
    const movieList = data.results.map(movieResults => (
      {
        id: `${movieResults.id}`,
        title: `${movieResults.title}`,
        overview: `${movieResults.overview}`,
        vote_average: `${movieResults.vote_average}`,
        release_date: `${movieResults.release_date}`.slice(0, 4),
        poster_path: `${movieResults.poster_path}`

      }
    ))
    // console.log(data);
    this.setState({
      movieList
    })
  }

  getMoreInfo = async (e) => {
    const id = e;
    const api_call = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    const detailedList = Object.keys(data).map(detailedResults => (
      {
        budget: `${detailedResults.budget}`,
        revenue: `${detailedResults.revenue}`,
        genres: `${detailedResults.genres}`,
        poster_path: `${detailedResults.poster_path}`,
        runtime: `${detailedResults.runtime}`,

      }
    ))
    this.setState({
      detailedList
    })
  }


  render() {
    return (
    <div className="App">
      <h1>Movie Search</h1>
      <form onSubmit={this.getMovieList}>
        <input type="text" placeholder="Enter a Movie Title..." name="movieName"/>
      </form>
      <div className="List">
        {
          this.state.movieList.length > 0 ? this.state.movieList.map(movie => {
            return (
              <div className="card" key={movie.id}>
              <img className="poster" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster"></img>
                <div className="info">
                  <h3 className="title">{movie.title}</h3>
                  <p className="release_date">{movie.release_date}</p>
                  <p className="overview">{movie.overview}</p>
                  <p className="vote_average">{movie.vote_average} / 10</p>
                  <button className="info_btn" onClick={() => this.getMoreInfo(movie.id)}>
                    <Link to="/details">More Info</Link>
                  </button>
                </div>
              </div>
            )
          }) : null
        }
      </div>
      <ScrollUpButton/>
    </div>
    );
  }
}


export default App;
