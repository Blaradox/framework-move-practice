const SearchBar = (props) => (
  <div>
    <input type="search" />
    <button onClick={
      () => {
        let input = document.querySelector('input').value.toLowerCase();
        const filtered = props.list.filter( movie => {
          return movie.title.toLowerCase().includes(input);
        });
        if ( filtered.length === 0 ) {
          props.cb([{title:'No movie found...'}])
        } else {
          props.cb(filtered);
        }
        document.querySelector('input').value = '';
      }
    }>Search Movies</button>
    <button onClick={
      () => {
        props.cb(props.originalList);
        document.querySelector('input').value = '';
      }
    }>Clear Search</button>
  </div>
)

window.SearchBar = SearchBar;
