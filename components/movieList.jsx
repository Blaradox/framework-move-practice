const MovieList = (props) => (
  <ul>
    {props.movies.map( (movie, index) =>
      <window.MovieListEntry key={index} movie={movie} />
    )}
  </ul>
);

window.MovieList = MovieList;
