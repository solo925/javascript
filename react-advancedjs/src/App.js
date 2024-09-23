import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [location, setLocation] = useState('all');
  const [price, setPrice] = useState('all');
  const [sortBy, setSortBy] = useState('price');

  // Fetch data and apply filters
  async function fetchData() {
    const response = await fetch("http://localhost:3001/eventsData");
    const apiResponse = await response.json();

    // Filter by price
    let filteredData = apiResponse;
    if (price === 'high') {
      filteredData = apiResponse.filter((value) => value.price >= 50);
    } else if (price === 'medium') {
      filteredData = apiResponse.filter((value) => value.price >= 30 && value.price < 50);
    } else if (price === 'low') {
      filteredData = apiResponse.filter((value) => value.price >= 0 && value.price < 30);
    }

    // Sort data
    if (sortBy === 'price') {
      filteredData.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'date') {
      filteredData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }

    setData(filteredData);
  }

  // Fetch data when component mounts or filters/sort options change
  useEffect(() => {
    fetchData();
  }, [location, price, sortBy]);

  // Add to favorites
  function handleAddToFavorites(id) {
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);

    }
  }

  // Remove from favorites
  function handleRemoveFromFavorites(id) {
    setFavorites(favorites.filter(favId => favId !== id));
  }

  // Update and display favorites list
  function updateFavorites() {
    return data.filter((item) => favorites.includes(item.id));
  }

  return (
    <div className='App'>
      <header>
        <h1>Events</h1>

        <div className="controls">
          <label htmlFor="location-filter">Filter by Location: </label>
          <select id="location-filter" value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="all">All</option>
          </select>

          <label htmlFor="price-filter">Filter by Price: </label>
          <select id="price-filter" value={price} onChange={(e) => setPrice(e.target.value)}>
            <option value="all">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <label htmlFor="sort-by">Sort by: </label>
          <select id="sort-by" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="price">Price</option>
            <option value="date">Date</option>
          </select>
        </div>

        <div className="favorites">
          <h2>Favorites</h2>
          <ul id="favorites-list">
            {updateFavorites().map((fav) => (
              <li key={fav.id}>
                {fav.title}
                <button onClick={() => handleRemoveFromFavorites(fav.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <main>
        {data.map((item, index) => (
          <div className='container' key={index}>
            <h1>{item.title}</h1>
            <p className='price'>{item.price}</p>
            <p>{item.date}</p>
            <p>{item.location}</p>
            <p>{item.company}</p>
            <button className='button' onClick={() => handleAddToFavorites(item.id)}>
              {favorites.includes(item.id) ? 'Added to Favorites' : 'Add to Favorites'}
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
