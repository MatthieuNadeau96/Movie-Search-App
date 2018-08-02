import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {

  render() {
    return (
      <div className="List">
        {
          this.props.movieList.length > 0 ? this.props.movieList.map(movie => {
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
    );
  }

}

export default List;
