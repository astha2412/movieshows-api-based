import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const MovieTicketForm = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
    setMovies(await response.json());
  }

  useEffect(() => {
      getMovies();
  }, []);


  const handleSubmit = (event, movieId) => {
    event.preventDefault();
  };

  return (
    <>
      <h2>Book Movie Tickets</h2>
      <div className="container-fluid mt-100">
        <div className="row text-center">
          {movies.map(movie => (
            <div key={movie.score}>

              <form onSubmit={(event) => handleSubmit(event, movie.score)}>
                <div>
                  <label htmlFor="movieName">Movie Name:</label>
                  <input
                    type="text"
                    id="movieName"
                    value={movie.show.name}
                    disabled
                  />
                  <label htmlFor="movieSummary">Movie Summary:</label>
                  <input
                    type="text"
                    id="movieName"
                    value={movie.show.summary}
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
              
            </div>
            
          ))}
        </div>
      </div>
      <Link to="/">Go back to movie details</Link>
    </>
  );
};

export default MovieTicketForm






