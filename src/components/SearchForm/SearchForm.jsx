import { useState } from 'react';
import { useDispatch } from 'react-redux';

function SearchForm() {
  const [neoSearch, setNeoSearch] = useState({ name: '' });
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch({ type: 'SEARCH_GIPHY', payload: neoSearch });
    setNeoSearch({ name: '' });
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
          value={neoSearch.name}
          onChange={(event) =>
            setNeoSearch({ ...neoSearch, name: event.target.value })
          }
        />
        <button onClick={handleSearch}>Find ?</button>
      </form>
    </div>
  );
}

export default SearchForm;
