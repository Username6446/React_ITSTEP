import "./FavoriteMovie.css";

const FavoriteMovie = ({ movie }) => {
  return (
    <div className="movie-card">
      <img className="movie-poster" src={movie.poster} alt={movie.title} />
      <div className="movie-info">
        <h1>{movie.title}</h1>
        <p><strong>Режисер:</strong> {movie.director}</p>
        <p><strong>Рік випуску:</strong> {movie.year}</p>
        <p><strong>Кіностудія:</strong> {movie.studio}</p>
      </div>
    </div>
  );
};

export default FavoriteMovie;