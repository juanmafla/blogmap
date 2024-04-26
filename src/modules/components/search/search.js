import search from './images/search.svg';
import './css/style.css';

function Search() {
  return (
    <div class="searchwrap">
        <img src={search} alt="Search"></img>
        <input type="text" placeholder="Search"></input>
    </div>
  );
}

export default Search;