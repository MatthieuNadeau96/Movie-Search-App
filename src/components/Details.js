import React, { Component } from 'react';

class Details extends Component {

  render() {
    return (
      this.props.detailedList.map(movie => {
        return (
          <div className="detailsPage">
            <div className="card" key={movie.id}>
              <img className="poster" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster"></img>
              <div className="info">
                <h3 className="title">{movie.title}</h3>
                <p className="release_date">{movie.release_date}</p>
                <p className="overview">{movie.overview}</p>
                <p className="vote_average">{movie.vote_average} / 10</p>
              </div>
            </div>
          </div>
        )
      })
    );
  }

}

export default Details;
