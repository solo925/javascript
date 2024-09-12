import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [product, setProduct] = useState([]);

  async function fetchListOfProducts() {
    // const api = require('./db.json')
    const apiResponse = await fetch('http://localhost:3000/products'); // This will work with files in the public folder.
    const result = await apiResponse.json();
    console.log(result.products)
    setProduct(result);
  }


  useEffect(() => {
    fetchListOfProducts();
  }, []);



  console.log(product);

  return (
    <div>
      {product.map((prod, index) => (
        <div className='container
        ' key={index}>
          <h2>{prod.name}</h2>
          <p>{prod.description}</p>
          <p className='price
          '>Price: {prod.price}</p>
        </div>
      ))}
    </div>
  )
}

export default App;
