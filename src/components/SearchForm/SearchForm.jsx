import { useState } from 'react';
import { useDispatch } from 'react-redux';

function SearchForm() {
  const [neoSearch, setNeoSearch] = useState();
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch({ type: 'SEARCH_GIPHY', payload: neoSearch });
    setNeoSearch('');
  };

  const handleStartSearch = (event) => {
    setNeoSearch(event.target.value);
  };

  return (
    <div>
      <form>
        <input
          id="search"
          placeholder="What you want?"
          type="text"
          value={neoSearch}
          onChange={handleStartSearch}
        />
        <button onClick={handleSearch}>Find ?</button>
      </form>
    </div>
  );
}

export default SearchForm;
