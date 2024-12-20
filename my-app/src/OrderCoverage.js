import React, { useState } from 'react';
import axios from 'axios';

function OrderCoverage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!query.trim()) {
      setError('Please enter a search query.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.get(`http://localhost:5000/search?query=${query}`);
      setResults(response.data);

      if (response.data.length === 0) {
        setError('No results found.');
      }
    } catch (err) {
      setError('Error fetching results.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Drug Search Engine</h1>
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for drugs..."
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="results">
        {results.length > 0 ? (
          <ul>
            {results.map((item) => (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
              </li>
            ))}
          </ul>
        ) : (
          !error && <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default OrderCoverage;
