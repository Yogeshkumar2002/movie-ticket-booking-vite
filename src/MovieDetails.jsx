import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './assets/css/MovieDetails.css'; 
import Header from './Header';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://backend-crud-one.vercel.app/product/${id}`)
      .then(response => {
        setMovie(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch movie details');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading movie details...</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return <p>Movie not found</p>;

  return (
     <div className="movie-details-wrapper">
    <div className="movie-details-container">
      <div className="movie-poster">
        <img src={movie.image} alt={movie.name} />
      </div>
      <div className="movie-info">
        <h1>{movie.name}</h1>
        <p><strong>Title:</strong> {movie.title}</p>
        <p><strong>Release Date:</strong> {movie.releasedate}</p>
        <p><strong>Director:</strong> {movie.director}</p>
        <p><strong>Budget:</strong> {movie.budget}</p>
        <p><strong>Ticket Price:</strong> ₹{movie.ticketprice}</p>
        <p><strong>Description:</strong> {movie.description}</p>
        <button className="book-button">Book Now - ₹{movie.ticketprice}</button>
      </div>
    </div>
    </div>
  );
};

export default MovieDetails;
