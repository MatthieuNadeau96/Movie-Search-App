import React, { Component } from 'react';
import './App.css';

const API_KEY = 'c6396876f6d8074ed2cd825b08fa8460';

class App extends Component {

  state = {
    movieList: []
  }

  handleSubmit = async (e) => {
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
        release_date: `${movieResults.release_date}`,
        poster_path: `${movieResults.poster_path}`

      }
    ))
    // console.log(data);
    this.setState({
      movieList
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Movie Search</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter a Movie Title..." name="movieName"/>
        </form>
        <div className="List">
          {
            this.state.movieList.length > 0 ? this.state.movieList.map(movie => {
              return (

                  <div key={movie.id}>
                    <img className="poster" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster"></img>
                    <h3 className="title">{movie.title}</h3>
                    <p className="release_date">{movie.release_date}</p>
                    <p className="vote_average">{movie.vote_average} / 10</p>
                    <p className="overview">{movie.overview}</p>
                  </div>

              )
            }) : null
          }
        </div>
      </div>
    );
  }
}

export default App;
