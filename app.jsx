const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'}
];

const App = () => (
  <div className='app'>
    <h1>Movie List</h1>
    <MovieList movies={movies} />
  </div>
);

const MovieList = (props) => (
  <ul>
    {props.movies.map( (movie, index) =>
      <MovieListEntry key={index} movie={movie} />
    )}
  </ul>
);

const MovieListEntry = (props) => (
  <li>{props.movie.title}</li>
);

ReactDOM.render(<App />, document.getElementById('app'));
