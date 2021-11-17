import { data } from 'browserslist';
import React from 'react';
import { useParams } from "react-router-dom";
import { json, checkStatus } from './utils';

function Movie() {
  let params = useParams();                           //access url params
  const [state, setState] = React.useState([]);     //set state of movie to null initially

  React.useEffect(() => {                             //replaces componentDidMount
      fetch(`https://www.omdbapi.com/?i=${params.id}&apikey=b7da8d63`)
      .then(checkStatus)
      .then(json)
      .then((data) => {
        if (data.Response === 'False') {
          throw new Error(data.Error);
        }
        if (data.Response === 'True') {
          console.log(data);
          setState({ movie: data, error: '' });
        }
      })
      .catch((error) => {
        setState({ error: error.message });
        console.log(error);
      })
  }, []);


  if (!state.movie) {
    return null;
  }

  const {
    Title,
    Year,
    Plot,
    Director,
    imdbRating,
    Poster,
  } = state.movie;

  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-6">
          <h1>{Title}</h1>
          <ul className="list-unstyled">
            <li>
              <p>Year: {Year}</p>
            </li>
            <li>
              <p>Director: {Director}</p>
            </li>
            <li>
              <p>Plot: {Plot}</p>
            </li>
            <li>
              <p>imdbRating: {imdbRating} / 10</p>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <img src={Poster} className="img-fluid" />
        </div>
      </div>
    </div>
  )
}

export default Movie;