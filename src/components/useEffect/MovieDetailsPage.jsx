import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MovieDetailsPage = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
    setMovies(await response.json());
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <h2>List of Movies</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {movies.map((curElem) => (
            <div className="col-10 col-md-4 mt-5" key={curElem.show.id}>
              <div className="card p-2">
                <div className="d-flex align-items-center">
                  <div className="image">
                    {curElem.show.image && (
                      <img
                        src={curElem.show.image.medium}
                        className="rounded"
                        width="100"
                        alt="Movie Poster"
                      />
                    )}
                  </div>
                  <div className="ml-3 w-100">
                    <h4 className="mb-0 mt-0 textLeft">
                      {curElem.show.name || 'N/A'}
                    </h4>
                    <span className="textLeft">
                      Show score - {curElem.score || 'N/A'}
                    </span>
                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                      <div className="d-flex flex-column">
                        <span className="show-id">Show Id</span>
                        <span className="number1">
                          {curElem.show.id || 'N/A'}
                        </span>
                      </div>
                      <div className="d-flex flex-column">
                        <span className="type">Show Type</span>
                        <span className="number2">
                          {curElem.show.type || 'N/A'}
                        </span>
                      </div>
                      <button>
                        <Link to="/ticket-form">Book Ticket</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieDetailsPage;