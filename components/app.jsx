class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'}
      ],
      originalList : [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'}
      ]
    }
    this.changeMovieList = this.changeMovieList.bind(this);
  }

  changeMovieList(list) {
    this.setState({
      movies: list
    })
  }

  render() {
    return (
      <div className='app'>
      <h1>Movie List</h1>
      <window.SearchBar
        originalList={this.state.originalList}
        list={this.state.movies}
        cb={this.changeMovieList}
      />
      <window.MovieList movies={this.state.movies} />
      </div>
    );
  }
}

window.App = App;
