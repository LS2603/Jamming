import { useState } from 'react'

export default function SearchBar({ onSearch }) {
    const [term, setTerm] = useState('');

    function handleSearch () {
      onSearch(term)
    }

    return (
      <div>
        <input
         type="text" 
          placeholder="Search for a song..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  }