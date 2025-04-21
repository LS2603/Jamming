import { useState } from 'react'

export default function SearchBar({ onSearch }) {
    const [term, setTerm] = useState('');

    function handleSubmit(e) {
      e.preventDefault();
      onSearch(term);
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
        <input
         type="text" 
          placeholder="Search for a song..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
        </form>
      </div>
    );
  }