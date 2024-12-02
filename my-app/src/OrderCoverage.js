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
    } catch (err) {
      setError('Error fetching results.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Order Coverage</h1>
      
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search orders..."
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="results">
        {results.length === 0 ? (
          <p>No results found</p>
        ) : (
          <ul>
            {results.map((item, index) => (
              <li key={index}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default OrderCoverage;
